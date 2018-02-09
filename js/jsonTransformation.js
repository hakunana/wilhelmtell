/**
 * Main parser function. Takes as input a jQuery object and parses it to JSON-LD according to schemaorg ruleset.
 * 
 * @event execParser
 * @memberof validateAndParse
 * @param {jQuery} $element The validated jQuery object to be parsed to JSON-LD.
 */
function execParser($element)
{	
  $('#'+getIdOfJsonContentDiv()).empty();
  var jsonString = "";
  
  var myJsonLd = {};
  myJsonLd["@context"]="http://schema.org";

  myJsonLd= recursiveEach($element,myJsonLd);
  
  myJsonLdString = JSON.stringify(deleteAllEmptyEntitiesInContainer(myJsonLd), null, 2);
  myJsonLdString = htmlEscape('<script type="application/ld+json"> ')+"\n"+myJsonLdString;
  myJsonLdString = myJsonLdString + "\n"+htmlEscape('</script>');
  
  $('#'+getIdOfJsonContentDiv()).append(myJsonLdString); 
}

/**
 * Deletes all empty entities in given JSON and returns Object afterwards.
 * 
 * @memberof validateAndParse
 * @param {Object|Array|string} jsonLdEntity The JSON-LD entity to be cleaned of empty container.
 * @returns {Object} An object containing no empty container.
 */
function deleteAllEmptyEntitiesInContainer(jsonLdEntity){
	// jsonLdEntity is Object
	if( Object.prototype.toString.call( jsonLdEntity ) === '[object Object]' ) {
		if (Object.keys(jsonLdEntity).length == 1 && jsonLdEntity["@type"]){
			return "";
		} else {
			Object.keys(jsonLdEntity).forEach(function(key) {
				var tempEntity = deleteAllEmptyEntitiesInContainer(jsonLdEntity[key]);
				if(tempEntity===""){
					delete jsonLdEntity[key];
				}else{
					jsonLdEntity[key]=tempEntity;
				}
			});
		}
	}else if(Object.prototype.toString.call( jsonLdEntity ) === '[object Array]'){
	// jsonLdEntity is Array
		if(jsonLdEntity.length<1){
			return "";
		} else {
			for (var i = 0; i < jsonLdEntity.length; i++) {
				jsonLdEntity[i] = deleteAllEmptyEntitiesInContainer(jsonLdEntity[i]);	
			}
		}
	}

	return jsonLdEntity;
}

/**
 * Recursively loops trough the DOM, finds all relevant elements to create JSON from and adds them correctly formatted to the root object.
 * @memberof validateAndParse
 * @param {jQuery} $element 
 * @param {Object} rootObj
 * @returns {Object} 
 */
function recursiveEach($element,rootObj){

    $element.children().each(function () {
		var $currentElement = $(this);
		if($currentElement.is("input") && hasAttr($currentElement,"schemaorgid")){
			if($currentElement.val()){
				rootObj[$currentElement.attr("schemaorgid")]=$currentElement.val();
			}
		} else if ($currentElement.is("div") && hasAttr($currentElement,"schemaorgid")){
			if($currentElement.attr("multiplechildren")=='true'){
				rootObj[$currentElement.attr("schemaorgid")]=[];
			}else{
				rootObj[$currentElement.attr("schemaorgid")]={};
			}
			recursiveEach($currentElement,rootObj[$currentElement.attr("schemaorgid")]);
		} else if ($currentElement.is("div") && hasAttr($currentElement,"jsonval")){
			if($currentElement.attr("jsonval")=='nodeelem'){
				rootObj.push(recursiveEach($currentElement,{}));
			} else {
				alert("Error: Element with ID:"+$currentElement.attr('id')+". There is no rule on how to handle an element with attribute jsonval and attribute value:"+$currentElement.attr('jsonval')+"Thus proceding as if element is not in scope of JSON transformation");
				recursiveEach($currentElement,rootObj);
			}
		} else{
			recursiveEach($currentElement,rootObj)
		}
	});
	
	return rootObj;
}

/**
 * Checks whether a given JQuery element has given attribute.
 * @memberof validateAndParse
 * @param {jQuery} $element 
 * @param {string} attributeToCheck
 * @returns {boolean} 
 */
function hasAttr($element,attributeToCheck){
	if($($element).attr(attributeToCheck)){
		return true;
	} else {
		return false;
	}
}

/**
 * Helper function escaping html tags. Needed especially for the SCRIPT element tag in the JSON-LD output. 
 * String requires to be embedded in PRE tag to be displayed correctly after having been escaped.
 * @memberof validateAndParse
 * @param {string} str string containing html tags to be escaped. 
 * @returns {string} html escaped string.
 */
function htmlEscape(str) {
    return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}