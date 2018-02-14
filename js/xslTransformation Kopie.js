/**
 * Called by the transform function. Loads any document via given path from the server.
 * 
 * @callback transform~loadDocument
 * @param {string} url 
 * @param {Document} callback
 */
function load(url, callback) {
  var req = new XMLHttpRequest();
  req.open('GET', url);
  // to allow us doing XSLT in IE
  try { req.responseType = "msxml-document"; } catch (ex) {}
  req.onload = function() {
    callback(req.responseXML);
  };
  req.send();
}

/**
 * Entry function triggering all events and functions for the XSL transformation.
 * 
 * @namespace
 * @fires displayHtmlFromXml
 * @param {Document} xml The XML file containing all the schemaorg related data.
 * @param {Document} xsl The XSL file containing the tranformation rules.
 */
function transform(xml, xsl) {
  currentXml=xml;
  $("#"+getIdOfBodyContentDiv()).empty();
  $('#'+getIdOfJsonContentDiv()).empty();
    load(
      xml,
      function(inputXml) {
        load(
          xsl,
          function(xsltSheet) {
              displayHtmlFromXml(inputXml, xsltSheet);
          }
        );
      }
    );
}
/**
 * Function called by transform() and processing the xslt. Ultimately attaches the retrieved HTML elements to the DOM.
 * Populates the template for the elements to be cloned. This template is then used for the creation of any additional nodeelement.
 * Meaning: 
 * All elements which can be added by the user are taken from a template of clones representing the first set of unique nodeelements loaded from the XSL transformation.
 * The cloning process includes also the generation of unique IDs and voiding all VISIBLE input fields. The inivisible ones are kept with the default value.
 * 
 * @memberof transform
 * @event displayHtmlFromXml
 * @param {any} xmlInput 
 * @param {any} xsltSheet 
 */
function displayHtmlFromXml(xmlInput, xsltSheet) {
  if (typeof XSLTProcessor !== 'undefined') {
    var proc = new XSLTProcessor();
    proc.setParameter(null, "labellang", currentLanguage());
    proc.importStylesheet(xsltSheet);
    
    document.getElementById(getIdOfBodyContentDiv()).appendChild(proc.transformToFragment(xmlInput, document));
  }
  else if (typeof xmlInput.transformNode !== 'undefined') {

    var template = new ActiveXObject('Msxml2.XslTemplate.6.0');
    template.stylesheet = xsltSheet;

    var proc = template.createProcessor();
    proc.input = xmlInput;
    proc.addParameter('labellang', currentLanguage());
    proc.transform();

    $("#"+getIdOfBodyContentDiv()).append(proc.output);
  }

  setAdditionalAttributes();
  setAdditionalFormatsAfterXSLInit();
  resetAndAppendCommentPopovers();
  retrieveFirstElementsToClone();
 
}

/**
 * Called essentially by the {@link transform.addElementFromClone|clone element} function.
 * Retrieves each element within the cloned object and reassigns a unique ID.
 * 
 * @memberof transform
 * @param {jQuery} $currentElement 
 */
function changeIdOfSelfAndChildren($currentElement) {
  //If Current element is a node
  if ($currentElement[0] != null) {
      //Change ID of Node if ID attribute exists
      if ($currentElement[0].id != "") {
          $currentElement[0].id = stringGen(20);
      }
      //If element has childNodes itself
      if ($currentElement[0].childNodes.length > 0) {
          //For each child of Element given
          for (var i = 0; i < $currentElement[0].childNodes.length; i++) {

              //change Id for each child as well
              changeIdOfSelfAndChildren($currentElement[0].childNodes[i]);
          }
      }
  } else {
      if ($currentElement.id != "") {
          //If element is not a node but has ID
          $currentElement.id = stringGen(20);
      }
      //If element has childNodes itself
      if ($currentElement.childNodes.length > 0) {
          //For each child of Element given
          for (var i = 0; i < $currentElement.childNodes.length; i++) {

              //change Id for each child as well
              changeIdOfSelfAndChildren($currentElement.childNodes[i]);
          }
      }
  }
}

/**
 * Called essentially by the {@link transform.addElementFromClone|clone element} function.
 * Retrieves each visible input element relevant for schemaorg and voids its value.
 * 
 * @memberof transform
 * @param {jQuery} $currentElement 
 */
function voidVisibleValueOfSelfAndChildren(elementId) {
  $("#" + elementId)
    .find("input[schemaorgid]")
    .filter(function () {
      return $(this).css("display") != "none";
  }).val("");
}

//DATE FORMAT VERSION CHANGE
function applyCustomFormatPerType(elementId) {
  $("#" + elementId)
    .find('div[formatAs]')
    .each(function (i) {
      customFormatSelector($(this), $(this).attr("formatAs"));
  });
}

/**
 * Initialization stage for the cloning process triggered by the {@link transform.displayHtmlFromXml|XML transformation event}.
 * Called only once right after the XSL transformation.
 * 
 * This function each div marked with the attribute multiplechildren="true" and takes a snapshot (clone).
 * The clones can then later be used as templates for adding nodeelements. 
 * 
 * @memberof transform
 */
function retrieveFirstElementsToClone()
{
  //gets first nodeelement of each div with multiplechildren=true
  var $allMultipleElements = $("#"+getIdOfBodyContentDiv()).find("div[multiplechildren='true']").find("div[jsonval='nodeelem']:first");
  
  if($allMultipleElements.length > 0){
    for (var index = 0; index < $allMultipleElements.length; index++) {
      var staticIdOfparentOfThis = $("#"+$allMultipleElements[index]["id"]).closest('div[multiplechildren="true"]').attr('staticid');

      var $nodeElemClone= $("#"+$allMultipleElements[index]["id"]).clone(false);

      //Change ID of children with ID
      changeIdOfSelfAndChildren($nodeElemClone);

      elementsToClone.push(
          {
            nodeElem: $nodeElemClone,
            staticId: staticIdOfparentOfThis
          }
        );
    }
  }

  resetAndAppendDeleteButtons();
  resetAndAppendAddButtons();
  initMainFormValidation();
  
}

/**
 * Actual cloning process:
 * 1) Taking the desired clone from template and copying it to a temporary array.
 * 2) {@link transform.changeIdOfSelfAndChildren|Reassign unique IDs} to all relevant elements in temp array.
 * 3) {@link transform.voidVisibleValueOfSelfAndChildren|void values} of all visible and relevant input elements in temp array.
 * 4) Append the new clones to DOM.
 * 5) {@link transform.resetAndAppendDeleteButtons|Reset and append} delete buttons.
 * 6) {@link transform.resetAndAppendAddButtons|Reset and append} add buttons.
 * 
 * @memberof transform
 * @param {string} containerId The plain element ID of the container in which the clone should be appended to.
 * @param {string} staticIdToAddTo The ID of the nodeelement to be taken as template for cloning.
 */
function addElementFromClone(containerId, staticIdToAddTo){
  var clonesArrayPos = getArrayPositionOfElementViaStaticId(elementsToClone, staticIdToAddTo);
  if(clonesArrayPos>-1){
    var newNodeElem = $(elementsToClone[clonesArrayPos].nodeElem).clone(false);
    
    changeIdOfSelfAndChildren(newNodeElem);
    appendInputToDOMElem(containerId, newNodeElem);
    voidVisibleValueOfSelfAndChildren(newNodeElem[0]["id"]);
    //DATE FORMAT VERSION CHANGE
    applyCustomFormatPerType(newNodeElem[0]["id"]);

  }else{
    alert("There was an error, please reload the page and try again.");
  }
  resetAndAppendDeleteButtons();
  resetAndAppendAddButtons();
  resetAndAppendCommentPopovers();
}

/**
 * Searches trough given array of CloneElements for matching id. Will return index if found, else -1.
 * @memberof transform
 * @param {CloneElement[]} clonesArray 
 * @param {string} staticIdToFind The static id to look for in the array.
 * @returns {number} The index of the element found in the array. Returns -1 in case nothing is found.
 */
function getArrayPositionOfElementViaStaticId(clonesArray, staticIdToFind) {
  var count = clonesArray.length;
  for (var i = 0; i < count; i++) {
      if (clonesArray[i].staticId == staticIdToFind) {
          return i;
      }
  }
  return -1;
}

/**
 * Goes trough the DOM and
 * 1) Removes all occurrences of BUTTON with the attribute jsonButtonType="add"
 * 2) Appends a proper "add button" to any DIV with the attribute multiplechildren="true"
 * 
 * This is needed so that user can add children (nodeelem) to a parent entity.
 * @memberof transform
 */
function resetAndAppendAddButtons() {
  //Delete all add buttons first
  var allExistingAddButtons = $("#"+getIdOfBodyContentDiv()).find('button[jsonButtonType="add"]');
  if (allExistingAddButtons.length > 0) {
      for (var i = 0; i < allExistingAddButtons.length; i++) {
          $("#" + allExistingAddButtons[i]["id"]).remove();
      }
  }

  //Append add buttons again to possibly new last position
  var allMultipleElements = $("#"+getIdOfBodyContentDiv()).find('div[multiplechildren="true"]');
  if (allMultipleElements.length > 0) {
      for (var index = 0; index < allMultipleElements.length; index++) {
          var staticIdValue = "";
          staticIdValue = allMultipleElements[index].attributes.staticid.value;

          var addBtnOnClickAction = "addElementFromClone('" + allMultipleElements[index]["id"] + "', '" + staticIdValue + "')";
          var btnHtml = '<button id="' + stringGen(20) + '" jsonButtonType="add" onclick="' + addBtnOnClickAction + '"' + additionalAddButtonattributes() + '>' + buttonAddText() + '</button>';

          appendInputToDOMElem(allMultipleElements[index]["id"], btnHtml);
      }
  }
}

/**
 * Goes trough the DOM and
 * 1) Destroys any existing popover
 * 2) Appends for each title or subtitle in scope the schema.org comment for matching node and a localised title.
 * 
 * @memberof transform
 */
function resetAndAppendCommentPopovers(){
  //Destroy first all existing popovers
    $("[data-toggle='popover']").popover('destroy');
  
  //Create popover for all titles with no multiplechildren
    $("#"+getIdOfBodyContentDiv())
    .find("p[usage='title']")
    .each(function(i){
      //If is node without multiplechildren
        if($(this).closest('div[staticid]').attr('multiplechildren')!="true"){
          //Get schemaorgid of nearest node parent
            var parentNodeID = $(this).closest('div[staticid]').attr('schemaorgid');
          //Look for comment string with given schemaorgid
            var commentString=getSchemaOrgAnnotationForSchemaorgId(parentNodeID);
            
            var languageToTranslate=function(){
              if(currentLanguage()==AvailableLanguageEnumeration.FRENCH){
                  return "fr";
              }else if(currentLanguage()==AvailableLanguageEnumeration.ITALIAN){
                  return "it";
              }else if(currentLanguage()==AvailableLanguageEnumeration.ENGLISH){
                  return "en";
              }else{
                return "de";
              }
            };

          //Do only if any comment has been found
            if (commentString!=""){
              var translatedText;
              var $thisElement = this;

              var params=[ 
                {name:"text", value:commentString},
                {name:"lang", value:languageToTranslate()}
              ];
              $.get("/php/translate.php", params, titleTranslationResult);
              
              function titleTranslationResult(data){
                var result = JSON.parse(data);
                //console.log(result);
                  translatedText = result[0][0][0];
                  if(result[0][1]!== undefined)
                  {
                    translatedText+= result[0][1][0];
                  }

                  //Create popover with comment of matching schemaorgid of parent
                  $($thisElement).popover({title:popoverTitleText(), content:translatedText, html: true, placement: "bottom"});
                  //Format as "pseudolink"  
                  $($thisElement).attr("style","text-decoration:underline");
              }
            }
        }
    });
  
    //Create popover for all subtitles
    $("#"+getIdOfBodyContentDiv())
    .find("p[usage='subtitle']")
    .each(function(i){
      //Get schemaorgid of nearest node parent  
        var parentNodeID = $(this).closest('div[staticid]').attr('schemaorgid');
      //Look for comment string with given schemaorgid
        var commentString=getSchemaOrgAnnotationForSchemaorgId(parentNodeID);

        var languageToTranslate=function(){
          if(currentLanguage()==AvailableLanguageEnumeration.FRENCH){
              return "fr";
          }else if(currentLanguage()==AvailableLanguageEnumeration.ITALIAN){
              return "it";
          }else if(currentLanguage()==AvailableLanguageEnumeration.ENGLISH){
              return "en";
          }else{
            return "de";
          }
        };

      //Do only if any comment has been found
        if (commentString!=""){
          var translatedText;
          var $thisElement = this;

          var params=[ 
            {name:"text", value:commentString},
            {name:"lang", value:languageToTranslate()}
          ];
          $.get("/php/translate.php", params, subtitleTranslationResult);
          
          function subtitleTranslationResult(data){
            var result = JSON.parse(data);
            //console.log(result);
              translatedText = result[0][0][0];
              if(result[0][1]!== undefined)
              {
                translatedText+= result[0][1][0];
              }
          
            //Create popover with comment of matching schemaorgid of parent
            $($thisElement).popover({title:popoverTitleText(), content:translatedText, html: true, placement: "bottom"});
            //Format as "pseudolink"  
            $($thisElement).attr("style","text-decoration:underline");
          }
        }      
    });
  }

/**
* Goes trough the DOM and
* 1) Removes all occurrences of BUTTON with the attribute jsonButtonType="del".
* 2) Appends a proper "del button" to DIVs in scope with the attribute jsonval="nodeelem".
* A DIV is only in scope if it is not the last nodeelem left within a required node. 
*
* The buttons are needed in order that a user can select a specific nodeelement to delete.
* @memberof transform
*/
function resetAndAppendDeleteButtons() {
  //Delete all delete buttons first
  var allExistingDelButtons = $("#"+getIdOfBodyContentDiv()).find('button[jsonButtonType="del"]');
  if (allExistingDelButtons.length > 0) {
      for (var i = 0; i < allExistingDelButtons.length; i++) {
          $("#" + allExistingDelButtons[i]["id"]).remove();
      }
  }
  //Append delete buttons again to possibly new last position
  $("#"+getIdOfBodyContentDiv())
    .find('[multiplechildren="true"]')
    .each(function (i) {
      //If elemement is in the first hierarchy of multiplechildren elements
      if($(this).parents('[multiplechildren="true"]').length<=0)
      {
        var allNodeelems = $(this).find('div[jsonval="nodeelem"]');
        var minNumberOfElements = 0;
        
        //If nodeelement belongs to a required node, then set minimun required nodeelements to 1
        if($(this).attr("required")=="required"){
          minNumberOfElements++;
        }

        if (allNodeelems.length > minNumberOfElements) {
            for (var index = 0; index < allNodeelems.length; index++) {
                var addBtnOnClickAction = "saveRemoveNodeelement('"+allNodeelems[index]["id"]+"')";
                var btnHtml = '<button id="' + stringGen(20) + '" jsonButtonType="del" onclick="' + addBtnOnClickAction + '"' + additionalDeleteButtonattributes() + '>' + buttonDeleteText() + '</button>';
      
                appendInputToDOMElem(allNodeelems[index]["id"], btnHtml);
            }
        }
      }
    });
}
/**
 * Function to be called when clicked on remove button. This function removes the element and resets all delete buttons again.
 * Doing so, it can be ensured, that required nodes which have just one nodeelement left, get no delete button added.
 * 
 * @param {string} elemId The JS native element ID of the input element of which its corresponding error message shall be removed.
 */
function saveRemoveNodeelement(elemId){
  $('#'+ elemId).remove();
  resetAndAppendDeleteButtons();
}