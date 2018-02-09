/**
 * Checks if current browser is IE via the userAgent property. Returns true in case is IE (Edge will return false however).
 * 
 * @returns {boolean} true if browser used is IE.
 */
function isMsIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
    {
        return true;
    } else // If another browser (including EDGE), return false
    {
        return false;
    }
}

/**
 * Random string generator used mainly for the generation of IDs. Returns an alphanumeric string.
 * 
 * @param {number} len The expected length of the generated string to be returned.
 * @returns {string} Alphanumeric string with charset: [abcdefghijklmnopqrstuvwxyz0123456789]
 */
function stringGen(len) {
    var text = "";

    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < len; i++)
        text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
}

/**
 * Appends any given input to the HTML element with given ID.
 * @param {string} elemId The JS native element ID of the input element of which its corresponding error message shall be removed.
 * @param {string} input The string to be appended to the element.
 */
function appendInputToDOMElem(elemId, input) {
    $("#" + elemId).append(input);
}

/**
 * Returns the selected language using the {@link getLanguageElementID()|ID of the selected element}.
 * @returns {string} selected language
 */
function currentLanguage() {
    return $("#"+getLanguageElementID()).val();
}

/**
 * Loads all official ISO currencies from remote and stores them locally in an array.
 * @async
 */
function loadAll_ISOCurrencies() {
    $.ajax({
        url:"/php/getISOCurrencies.php",
        success:function(data){
            //Add empty field
            data+='\n';
            //push each string divided by newline as separate element into array
            isoCurrenciesArray = data.split('\n');
            //Sort array alphabetically
            isoCurrenciesArray.sort();

            console.log("Loaded ISO Currencies");
        }
    });             
}

/**
 * Retrieves newest XML/RDF version of the schema.org reference and stores it locally in JSON.
 * @async
 */
function loadRDFAll_SchemaOrg() {
    $.ajax({
        url:"/php/getschemaorg.php",
        success:function(data){
            schemaorgComments = JSON.parse(data);

            console.log("Loaded RDF Schemaorg");
        }
    });             
}
/**
 * Loads all schema.org XML files from server
 * @async
 */
function loadXMLTemplatesForXSLT()
{
    $.ajax({
        url:"/php/getxmlfiles.php",
        success:function(data){
        xml_filesArray = data.split('\n');

        console.log("Loaded XML-templates");
        populateXMLTemplatesSelector(xml_filesArray);
        }
    });
}

/**
 * Used for retrieving the rdfs:comment annotation from schema.org XML/RDF file (needs first to be initialized by calling loadRDFAll_SchemaOrg()).
 * 
 * @param {string} schemaorgId The schema.org ID of which the comment shall be retrieved.
 * @returns {string} String in HTML format if found, empty string if nothing found.
 */
function getSchemaOrgAnnotationForSchemaorgId(schemaorgId){
   if (schemaorgComments[schemaorgId]==null)
   {
    return "";
   }else{
    return schemaorgComments[schemaorgId];
   }
}

/**
 * Checks if given value is in given array.
 * @param {string} stringItem 
 * @param {[]} arrayToSearch 
 * @returns {boolean} true if stringItem is in arrayToSearch.
 */
function inArray(stringItem, arrayToSearch)
{
    var count=arrayToSearch.length;
    for(var i=0;i<count;i++)
    {
        if(arrayToSearch[i]===stringItem){return true;}
    }
    return false;
}
