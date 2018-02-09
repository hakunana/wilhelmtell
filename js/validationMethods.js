/**
 * Entry function for parsing JSON. Does perform and delegate validation functions.
 * If browser is not IE, then validation of required fields will be performed via built-in HTML5 validation. 
 * Else, a custom made validation via Bootstrap v3 using tooltips is triggered. 
 * @namespace
 * @fires execParser
 * @param {string} elementId The JS native element ID of the input element of which its corresponding error message shall be removed.
 * @returns {boolean}
 */
function validateAndParse(elementId) {

    //IE has issues with cloned elements in forms. 
    //No HTML5 required validation possible, needs to be done manually:
    if (isMsIE()) {
        var isRequiredEmpty = false;

        var toolTipText = function () {
            //Tooltip Text
            var frenchTTText = "Ce champ de saisie ne doit pas être vide";
            var italianTTText = "Questa casella non deve essere vuota";
            var englishTTText = "This box must not be empty";
            var germanTTText = "Dieses Eingabefeld darf nicht leer sein";

            if (currentLanguage() == AvailableLanguageEnumeration.FRENCH) {
                return frenchTTText;
            } else if (currentLanguage() == AvailableLanguageEnumeration.ITALIAN) {
                return italianTTText;
            } else if (currentLanguage() == AvailableLanguageEnumeration.ENGLISH) {
                return englishTTText;
            } else {
                return germanTTText;
            }
        };
        //Check if there is any input field marked as required but empty value
        var inputRequiredButNoValue = $("#"+getIdOfBodyContentDiv()).find('input[required="required"]').each(function (i) {
            //For each required but empty field add Bootstrap v3 classes and generate tooltips.
            var inputElement = $(this);
            inputElement.attr("data-toggle", "tooltip");
            inputElement.attr("title", toolTipText());
            
            if (inputElement.val() == "") {
                //If there are required but empty fields, set flag for the validation to fail and show tooltip.
                isRequiredEmpty = true;
                inputElement.tooltip('show');
            } else {
            /*
                Hide any tooltips refering to filled input fields. 
                So in case it isn't the first time the validation has been triggered, 
                only the relevant tooltips are shown and not all, including the ones not needed anymore.

                THIS NEEDS TO BE DONE AS IE SEEMS NOT TO FULLY REFRESH THE STATE OF EACH OBJECT WHEN JQUERY DOES FIND().
                ONLY WHEN EACH ELEMENT IS ITERATED TROUGH, THE ACTUAL VALUE IS RETURNED...
            */    
                inputElement.tooltip("hide");
            }
        });

        if (isRequiredEmpty) {
            //If the validation fails, scroll to the top of the main content div and return false.
            window.scrollTo(0, document.getElementById(getIdOfBodyContentDiv()).scrollTop);
            return false;
        }

    } else {
        //If browser is not IE, then HTML5 validation can be performed by calling checkValidity.
        //First disable the form to being submitted.
        $('#body-form').submit(false);
        //Check validity via HTML5 built-in functionality.
        if (!$('#body-form')[0].checkValidity()) {
            //Return false in case validation fails.
            return false;
        }
    }

    //At last, in case all required fields are populated, check if there are no errors left 
    //i.e.: Due to wrong format according to the schemaorg datatypes
    //checkCustomValidity() pops an alert in case is false.
    if (checkCustomValidity()) {
        //If all is valid, sends content of root element to parse to JSONLD
        execParser($("#"+elementId).find("div[schemaorgid='root']:first"));
    }

}

/**
 * Entry function for validating each relevant input field to be validated against the schemaorg datatype convention.
 * Calls the {@link validateSchemaOrgElem.checkInputValidityOnSchemaOrgDefinition|proper validation function} for each value found.
 * @namespace
 * @fires displayValidationMessage Fires the event in case validation fails.
 * @param {string} elemId The JS native element ID of the input element of which its corresponding error message shall be removed.
 */
function validateSchemaOrgElem(elemId) {
    
        var elemValue = $("#" + elemId).val();
        var elemDatatype = $("#" + elemId).attr("datatype");
        var validationResponse = {};
    
        validationResponse = checkInputValidityOnSchemaOrgDefinition(elemValue, elemDatatype);
    
        if (!validationResponse.isValid) {
            displayValidationMessage(elemId, validationResponse.validationMessage);
        }
    }

/**
 * Custom built validation against the {@link SchemaOrgDataTypeEnumeration|schemaorg datatypes}.
 * Validates if given input values corresponds to given schema.org datatype. Pops an alert in case datatype is not empty and has an unknown datatype.
 * If validation fails, returns isValid as false and populates the validation message object. In case validation is OK, no validation message is populated.
 * 
 * @param {string} inputValue The input value to be validated against a given schemaorg datatype.
 * @param {string} schemaOrgDataType The schemaorg datatype the validation should be performed for.
 * @returns {CustomValidationReturnObject}
 * @memberof validateSchemaOrgElem
 */
function checkInputValidityOnSchemaOrgDefinition(inputValue, schemaOrgDataType) {
    
    var returnObject = {};

    if (inputValue != "") {

        var invalidDataTypeMessage = {
            validationMessageTitle : "ERROR - Please contact your technical support!",
            validationMessageContent : "The datatype: [" + schemaOrgDataType + "] is not a valid schema.org datatype. Only following exact datatypes are allowed to be defined:\n"+JSON.stringify(SchemaOrgDataTypeEnumeration)+"\nIf no datatype is specified, the default datatype "+SchemaOrgDataTypeEnumeration.TEXT+" will be taken."
        };

        switch (schemaOrgDataType) {

            case SchemaOrgDataTypeEnumeration.BOOLEAN:
                if (!isValidBool(inputValue)) {
                    returnObject.isValid = false;
                    returnObject.validationMessage = getValidationMessage(inputValue, schemaOrgDataType);
                } else {
                    returnObject.isValid = true;
                }
                break;
            case SchemaOrgDataTypeEnumeration.DATE:
                if (!isValidDateISO8601Format(inputValue)) {
                    returnObject.isValid = false;
                    returnObject.validationMessage = getValidationMessage(inputValue, schemaOrgDataType);
                } else {
                    returnObject.isValid = true;
                }
                break;
            case SchemaOrgDataTypeEnumeration.TIME:
                if (!isValidTimeISO8601Format(inputValue)) {
                    returnObject.isValid = false;
                    returnObject.validationMessage = getValidationMessage(inputValue, schemaOrgDataType);
                } else {
                    returnObject.isValid = true;
                }
                break;
            case SchemaOrgDataTypeEnumeration.DATETIME:
                if (!isValidDateTimeISO8601Format(inputValue)) {
                    returnObject.isValid = false;
                    returnObject.validationMessage = getValidationMessage(inputValue, schemaOrgDataType);
                } else {
                    returnObject.isValid = true;
                }
                break;
            case SchemaOrgDataTypeEnumeration.NUMBER:
                if (!isValidNumber(inputValue)) {
                    returnObject.isValid = false;
                    returnObject.validationMessage = getValidationMessage(inputValue, schemaOrgDataType);
                } else {
                    returnObject.isValid = true;
                }
                break;
            case SchemaOrgDataTypeEnumeration.FLOAT:
                if (!isValidFloat(inputValue)) {
                    returnObject.isValid = false;
                    returnObject.validationMessage = getValidationMessage(inputValue, schemaOrgDataType);
                } else {
                    returnObject.isValid = true;
                }
                break;
            case SchemaOrgDataTypeEnumeration.INTEGER:
                if (!isValidInteger(inputValue)) {
                    returnObject.isValid = false;
                    returnObject.validationMessage = getValidationMessage(inputValue, schemaOrgDataType);
                } else {
                    returnObject.isValid = true;
                }
                break;
            case SchemaOrgDataTypeEnumeration.URL:
                if (!isValidUrl(inputValue)) {
                    returnObject.isValid = false;
                    returnObject.validationMessage = getValidationMessage(inputValue, schemaOrgDataType);
                } else {
                    returnObject.isValid = true;
                }
                break;
            case SchemaOrgDataTypeEnumeration.TEXT:
                //TEXT is always valid as it can contain everything
                returnObject.isValid = true;
                break;
            default:
                //Datatype does not exist.
                returnObject.isValid = false;
                returnObject.validationMessage = invalidDataTypeMessage;
                alert(invalidDataTypeMessage.validationMessageTitle+"\n"+invalidDataTypeMessage.validationMessageContent);
        }
    } else {
        //If no value is given then validation returns always true
        returnObject.isValid = true;
    }
    return returnObject;
}

/**
 * Triggers datatype validation for each input field. 
 * Should be used as a failsafe directly after XSL transformation is completed, in case any default value in the source XML file is not corresponding to the defined schemaorg datatype.
 * @memberof transform
 * @event initMainFormValidation
 */
function initMainFormValidation() {
    var allInputElementToValidate = $("#"+getIdOfBodyContentDiv()).find('input[schemaorgid]');
    if (allInputElementToValidate.length > 0) {
        for (var index = 0; index < allInputElementToValidate.length; index++) {
            validateSchemaOrgElem(allInputElementToValidate[index]["id"]);
        }
    }
    //DATE FORMAT VERSION CHANGE
    applyCustomFormatPerType(getIdOfBodyContentDiv());
}

/**
 * Validation factory, validating the schema.org datatypes.
 * 
 * @memberof validateSchemaOrgElem
 * @param {string} inputValue The value of the input field populated by the user.
 * @param {SchemaOrgDataTypeEnumeration} schemaOrgDataType  The datatype according to the schemaorg definition.
 * @property {CustomValidationMessage} customValidationMessage The customValidationMessage to be set.
 * @returns {CustomValidationMessage}
 */
function getValidationMessage(inputValue, schemaOrgDataType){
    var customValidationMessage = {};

    if(currentLanguage()==AvailableLanguageEnumeration.FRENCH){
        customValidationMessage = 
            {   
                validationMessageTitle : "Donnée n'est pas valide:",
                validationMessageContent : "La donnée "+inputValue+" n'est pas valide car elle ne correspond pas au format défini sur le site "+schemaOrgDataType+" ."
            };
    }else if(currentLanguage()==AvailableLanguageEnumeration.ITALIAN){
        customValidationMessage = 
        {   
            validationMessageTitle : "Input non è valido:",
            validationMessageContent : "L`input "+inputValue+" non è valido perché non corrisponde al formato definito sul sito "+schemaOrgDataType+" ."
        };
    }else if(currentLanguage()==AvailableLanguageEnumeration.ENGLISH){
        customValidationMessage = 
        {   
            validationMessageTitle : "Invalid value:",
            validationMessageContent : "The input value "+inputValue+" is invalid as it does not correspond to the format defined by the website "+schemaOrgDataType+" ."
        };
    }else{
        //In case schemaOrgDataType is no a valid SchemaOrgDataTypeEnumeration
        customValidationMessage = 
        {   
            validationMessageTitle : "Ungültiger Wert:",
            validationMessageContent : "Der Wert "+inputValue+" ist ungültig weil er nicht dem Format gemäss der Definition auf der Website "+schemaOrgDataType+" entspricht."
        };
    }

    return customValidationMessage;
}

/**
 * Creates and displays the validation message via Bootstrap v3 by adding the corresponding {@link getErrorClass()|error css class} and creating a SPAN element containing the {@link CustomValidationMessage|validation message}.
 *
 * @param {string} elemId The JS native element ID of the input element of which its corresponding error message shall be removed.
 * @param {CustomValidationMessage} validationMessage The message body of the custom validation message.
 * @see removeValidationMessage
 * @event displayValidationMessage
 * @memberof validateSchemaOrgElem
 */
function displayValidationMessage(elemId, validationMessage){

    var inputElement = $("#"+elemId);
    //The input element is embedded in a label which is again embedded in a DIV element.
    var grandParentContainer = inputElement.parent().parent();
    var parentContainer = inputElement.parent();

    //Add the css class to DIV
    grandParentContainer.addClass(getErrorClass());
    //Add SPAN element with error message after the <label><input/></label/> block
    //Just show the message content. However, message title could be displayd instead of content...
    parentContainer.after("<span belongsTo='"+getErrorClass()+"-message"+elemId+"' class='help-block'>"+validationMessage.validationMessageContent+"</span>");
    //Before was: <div><label><input/></label/></div>
    //Now is: <div class="getErrorClass()"><label><input/></label/><span class="belongsTo... help-block">validationMessage</span></div>
}

/**
 * Removes the validation message displayed via Bootstrap v3 by removing the corresponding {@link getErrorClass()|error css class} and SPAN element containing the {@link CustomValidationMessage|validation message}.
 * @memberof validateSchemaOrgElem
 * @see displayValidationMessage
 * @param {string} elemId The JS native element ID of the input element of which its corresponding error message shall be removed.
 * @event removeValidationMessage
 */
function removeValidationMessage(elemId){

    var inputElement = $("#"+elemId);
    //The input element is embedded in a label which is again embedded in a DIV element. 
    //If DIV element has css class getErrorClass(), then remove the css class. Also remove the SPAN element containing the error text.
    //Thus: First, get DIV (grandparent) and then remove 
    var grandParentContainer = inputElement.parent().parent();
    var parentContainer = inputElement.parent();
    
    grandParentContainer.removeClass(getErrorClass());
    $("*[belongsTo='"+getErrorClass()+"-message"+elemId+"']").remove();

    //Before was: <div class="getErrorClass()"><label><input/></label/><span class="belongsTo... help-block">validationMessage</span></div>
    //Now is: <div><label><input/></label/></div>
}

/**
 * Checks if there are any DIV elements with {@link getErrorClass()|error css class}. If yes, the a predefined error message is displayed. Else, validation is successful.
 * @memberof validateSchemaOrgElem
 * @summary Returns true if no error, false and alert if error found.
 * @property {string} warningText The warning text alerted in case of errors. Will be set to the according language.
 * @property {string} frenchWarning The french version of the warningText.
 * @property {string} italianWarning The italian version of the warningText.
 * @property {string} englishWarning The english version of the warningText.
 * @property {string} germanWarning The german version of the warningText. This is default in case language cannot be identified.
 * @returns {boolean}
 */
function checkCustomValidity(){
    //Get any DIV with error class 
    var validationMessagesDisplayed = $("#"+getIdOfBodyContentDiv()).find('.'+getErrorClass());
    if(validationMessagesDisplayed.length > 0)
    { 
        var warningText = ""; 

        //Alert message
        var frenchWarning = "Il y a encore des erreurs dans le formulaire, veuillez remplir tous les champs correctement avant de continuer s'il vous plaît.";
        var italianWarning = "Ci sono ancora errori nel modulo, si prega di compilare tutti i campi correttamente prima di procedere.";
        var englishWarning = "There are errors in the form, please input first correct values for all marked fields.";
        var germanWarning = "Es bestehen noch Fehler im Formular, bitte zuerst alle Felder korrekt ausfüllen.";
    
        if(currentLanguage()==AvailableLanguageEnumeration.FRENCH){
            warningText= frenchWarning;
        }else if(currentLanguage()==AvailableLanguageEnumeration.ITALIAN){
            warningText= italianWarning;
        }else if(currentLanguage()==AvailableLanguageEnumeration.ENGLISH){
            warningText= englishWarning;
        }else{
            warningText= germanWarning;
        }

        alert(warningText);

        return false;
    }else{
        return true;
    }

}