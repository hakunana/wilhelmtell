/**
 * @typedef {Object} CustomValidationMessage
 * @property {string} validationMessageTitle The short version of the validation message. Can be used as message title.
 * @property {string} validationMessageContent The extended version of the validation message. Can be used as message body.
 */

 /**
 * @typedef {Object} CustomValidationReturnObject
 * @property {boolean} isValid The return value of the validation. True if successful.
 * @property {CustomValidationMessage} [validationMessage] The validation message object for the corresponding datatype. Empty object if validation is successful.
 */

/**
 * @typedef {Object} CloneElement
 * @property {jQuery} nodeElem The node element (nodeList) to be cloned.
 * @property {string} staticId The ID of the original node, which this clone is originating from.
 */

/**
 * The ID of the element containing all relevant schemaorg elements for user input. 
 * @constant
 * @type {string}
 * @default body-content
 * @returns {string}
*/
function getIdOfBodyContentDiv(){
    return "body-content";
}

/**
 * The ID of the element containing the JSON-LD string. 
 * @constant
 * @type {string}
 * @default json-content
 * @returns {string}
*/
function getIdOfJsonContentDiv(){
    return "json-content";
}

/**
 * The relative path and filename of the xsl file on the server. 
 * @constant
 * @type {string}
 * @default /xsl/transform.xsl
 * @returns {string}
*/
function getXmlToHtmlXslPath(){
    return "/xsl/transform.xsl";
}

/**
 * The css class used to identify elements having validation errors. 
 * @constant
 * @type {string}
 * @default has-error
 * @returns {string}
 */
function getErrorClass(){
    return "has-error";
}

/**
 * The ID of the HTML element containing the language value. 
 * @constant
 * @type {string}
 * @default label-language
 * @returns {string}
 */
function getLanguageElementID(){
    return "label-language";
}

/**
 * Enum of all schema.org datatypes.
 * @readonly
 * @enum {string}
 */
var SchemaOrgDataTypeEnumeration = {
    //TEXT is always taken as default in case no Datatype is provided. 
    //Also: TEXT has no corresponding validation and will always be true, as any input is valid.
    TEXT: "http://schema.org/Text",
    BOOLEAN: "http://schema.org/Boolean",
    DATE:"http://schema.org/Date",
    TIME:"http://schema.org/Time",
    DATETIME:"http://schema.org/DateTime",
    NUMBER:"http://schema.org/Number",
    FLOAT:"http://schema.org/Float",
    INTEGER:"http://schema.org/Integer",
    URL:"http://schema.org/URL"
};

/**
 * Enum of all languages available.
 * @readonly
 * @enum {string}
 */
var AvailableLanguageEnumeration = {
    //GERMAN is usually taken as default in case no language can be found / is selected.
    FRENCH: "labelfr",
    ITALIAN: "labelit",
    ENGLISH:"labelen",
    GERMAN:"labelde"
};

//Pseudo-constants which get a dynamically assigned value on init.
//Globally used as params/object repositiories for various functions.
var xml_filesArray = [];
var currentXml="";
var elementsToClone=[];
var tempElementsToClone=[];
var schemaorgComments={};
var isoCurrenciesArray = [];