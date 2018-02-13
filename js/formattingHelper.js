/**
 * Calls for each relevant HTML element in the DOM the corresponding formatting helper function.
 * This function should be called ideally right after the XSL transformation.
 * @namespace
 */
function setAdditionalAttributes() {
    $("#genJSONbtn").attr(additionalMainSubmitBtnAttributes());

    $("#"+getIdOfBodyContentDiv()).find('input[datatype="'+SchemaOrgDataTypeEnumeration.BOOLEAN+'"]').attr(additionalBooleanInputAttributes());
    $("#"+getIdOfBodyContentDiv()).find('input[datatype="'+SchemaOrgDataTypeEnumeration.DATE+'"]').attr(additionalDateInputAttributes());
    $("#"+getIdOfBodyContentDiv()).find('input[datatype="'+SchemaOrgDataTypeEnumeration.TIME+'"]').attr(additionalTimeInputAttributes());
    $("#"+getIdOfBodyContentDiv()).find('input[datatype="'+SchemaOrgDataTypeEnumeration.DATETIME+'"]').attr(additionalDateTimeInputAttributes());
    $("#"+getIdOfBodyContentDiv()).find('input[datatype="'+SchemaOrgDataTypeEnumeration.NUMBER+'"]').attr(additionalNumberInputAttributes());
    $("#"+getIdOfBodyContentDiv()).find('input[datatype="'+SchemaOrgDataTypeEnumeration.FLOAT+'"]').attr(additionalFloatInputAttributes());
    $("#"+getIdOfBodyContentDiv()).find('input[datatype="'+SchemaOrgDataTypeEnumeration.INTEGER+'"]').attr(additionalIntegerInputAttributes());
    $("#"+getIdOfBodyContentDiv()).find('input[datatype="'+SchemaOrgDataTypeEnumeration.URL+'"]').attr(additionalURLInputAttributes());
    $("#"+getIdOfBodyContentDiv()).find('input[datatype="'+SchemaOrgDataTypeEnumeration.TEXT+'"]').attr(additionalTextInputAttributes());

    $("#"+getIdOfBodyContentDiv()).find('div[schemaorgid]').attr(additionalDivAttributes());
    $("#"+getIdOfBodyContentDiv()).find('label[inschemaorg="visible"]').attr(additionalLabelWithVisibleInputAttributes());
    $("#"+getIdOfBodyContentDiv()).find('label[inschemaorg="hidden"]').attr(additionalLabelWithHiddenInputAttributes());
    $("#"+getIdOfBodyContentDiv()).find('p[usage="title"]').attr(additionalTitleAttributes());
    $("#"+getIdOfBodyContentDiv()).find('p[usage="subtitle"]').attr(additionalSubtitleAttributes());
    $("#"+getIdOfBodyContentDiv()).find('div[jsonval="nodeelem"]').attr(additionalNodeelemAttributes());
}

/**
 * Used for localization of delete button text
 * @memberof setAdditionalAttributes
 * @returns {string}
 */
function buttonDeleteText(){
    //Button Text
    var frenchDel = "Eliminer";
    var italianDel = "Elimina";
    var englishDel = "Remove";
    var germanDel = "Löschen";

    if(currentLanguage()==AvailableLanguageEnumeration.FRENCH){
        return frenchDel;
    }else if(currentLanguage()==AvailableLanguageEnumeration.ITALIAN){
        return italianDel;
    }else if(currentLanguage()==AvailableLanguageEnumeration.ENGLISH){
        return englishDel;
    }else{
        return germanDel;
    }
}

/**
 * Used for localization of add button text
 * @memberof setAdditionalAttributes
 * @returns {string}
 */
function buttonAddText(){

    //Button Text
    var frenchAdd = "Ajouter";
    var italianAdd = "Aggiungere";
    var englishAdd = "Add";
    var germanAdd = "Hinzufügen";

    if(currentLanguage()==AvailableLanguageEnumeration.FRENCH){
        return frenchAdd;
    }else if(currentLanguage()==AvailableLanguageEnumeration.ITALIAN){
        return italianAdd;
    }else if(currentLanguage()==AvailableLanguageEnumeration.ENGLISH){
        return englishAdd;
    }else{
        return germanAdd;
    }
}

function popoverTitleText(){
    //Button Text
    var frenchTitle = "Description traduite automatiquement (source schema.org):";
    var italianTitle = "Descrizione tradotta automaticamente (origine schema.org):";
    var englishTitle = "Description as provided by schema.org:";
    var germantitle = "Maschinell übersetzte Beschreibung (Quelle schema.org):";

    if(currentLanguage()==AvailableLanguageEnumeration.FRENCH){
        return frenchTitle;
    }else if(currentLanguage()==AvailableLanguageEnumeration.ITALIAN){
        return italianTitle;
    }else if(currentLanguage()==AvailableLanguageEnumeration.ENGLISH){
        return englishTitle;
    }else{
        return germantitle;
    }
}

/**
 * Helper function providing the option to add additional attributes to schemaorg delete buttons.
 * Can be used to add e.g. specific class attributes used by a framework.
 * @memberof setAdditionalAttributes
 * @returns {string}
 */
function additionalDeleteButtonattributes(){
    var attributeNameAndValue = '';
 
    //Usage Example:
    attributeNameAndValue="class='btn btn-secondary deletebtn' ";
        
        // $( ".deletebtn:last-child" ).wrap( "<div class='col-lg-12 l' />");
        
    return attributeNameAndValue;
}

/**
 * Helper function providing the option to add additional attributes to schemaorg add buttons.
 * Can be used to add e.g. specific class attributes used by a framework.
 * @memberof setAdditionalAttributes
 * @returns {string}
 */
function additionalAddButtonattributes(){
    var attributeNameAndValue = '';
    
    //Usage Example:

    attributeNameAndValue="class='btn btn-secondary addbtn'";

    $(".additionalDivAttributes>.addbtn").last().addClass("col-md-12");
    
    return attributeNameAndValue;
}

/**
 * Helper function providing the option to add additional attributes to schemaorg div elements.
 * Can be used to add e.g. specific class attributes used by a framework.
 * @memberof setAdditionalAttributes
 * @returns {Object}
 */
function additionalDivAttributes(){
    var attributeNameAndValueObject = {};
    attributeNameAndValueObject.class="control-label col-md-12 additionalDivAttributes";
    //Usage Example:
    // attributeNameAndValueObject.style="background-color:powderblue;";
    // attributeNameAndValueObject.class="additionalDivAttributes";

    return attributeNameAndValueObject;
}

/**
 * Helper function providing the option to add additional attributes to schemaorg label elements with visible input.
 * Can be used to add e.g. specific class attributes used by a framework.
 * @memberof setAdditionalAttributes
 * @returns {Object}
 */
function additionalLabelWithVisibleInputAttributes() {
    var attributeNameAndValueObject = {};

    //Usage Example:
    attributeNameAndValueObject.class="control-label col-lg-12 additionalLabelWithVisibleInputAttributes";

    return attributeNameAndValueObject;
}

/**
 * Helper function providing the option to add additional attributes to schemaorg label elements with hidden input.
 * Can be used to add e.g. specific class attributes used by a framework.
 * @memberof setAdditionalAttributes
 * @returns {Object}
 */
function additionalLabelWithHiddenInputAttributes() {
    var attributeNameAndValueObject = {};
    attributeNameAndValueObject.class="control-label col-md-12 additionalLabelWithHiddenInputAttributes";
    //Usage Example:
    attributeNameAndValueObject.style="color:green;";
    return attributeNameAndValueObject;
}

/**
 * Helper function providing the option to add additional attributes to schemaorg paragraph elements used as titles.
 * Can be used to add e.g. specific class attributes used by a framework.
 * @memberof setAdditionalAttributes
 * @returns {Object}
 */
function additionalTitleAttributes(){
    var attributeNameAndValueObject = {};
    attributeNameAndValueObject.class="control-label title col-lg-12";


    //Usage Example:
    // attributeNameAndValueObject.style="color:blue;";
    //attributeNameAndValueObject.style="background-color:white;";
    
    return attributeNameAndValueObject;
}

/**
 * Helper function providing the option to add additional attributes to schemaorg paragraph elements used as subtitles.
 * Can be used to add e.g. specific class attributes used by a framework.
 * @memberof setAdditionalAttributes
 * @returns {Object}
 */
function additionalSubtitleAttributes(){
    var attributeNameAndValueObject = {};
    attributeNameAndValueObject.class="control-label subtitle";
    
    //Usage Example:
    // attributeNameAndValueObject.style="color:orange;";

    return attributeNameAndValueObject;

}

/**
 * Helper function providing the option to add additional attributes to schemaorg div elements representing nodeelements only.
 * Can be used to add e.g. specific class attributes used by a framework.
 * @memberof setAdditionalAttributes
 * @returns {Object}
 */
function additionalNodeelemAttributes(){
    var attributeNameAndValueObject = {};
        attributeNameAndValueObject.class="nodeelement col-lg-5";

    //Usage Example:
    // attributeNameAndValueObject.style="color:red;";
    return attributeNameAndValueObject;

}

function findHighestNode(){
            var elementHeights = $('.nodeelement').map(function() {
            return $(this).height();
          }).get();
            
            console.log('elementHeights' + elementHeights);
            return findHighestNode;


}
/**
 * Helper function providing the option to add additional attributes to the main JSON-LD submit button.
 * Can be used to add e.g. specific class attributes used by a framework.
 * @memberof setAdditionalAttributes
 * @returns {Object}
 */
function additionalMainSubmitBtnAttributes(){
    var attributeNameAndValueObject = {};
    
    //Usage Example:
    attributeNameAndValueObject.class="btn btn-secondary submitbtn";
    if(isMsIE()){
        attributeNameAndValueObject.type="submit";
        attributeNameAndValueObject.form="body-form";
    }
    $( "#genJSONbtn" ).wrapAll( "<div class='col-lg-12 r' />");
    
    return attributeNameAndValueObject;
}

/**
 * Helper function providing the option to add additional attributes to schemaorg input fields marked as datatype boolean.
 * Can be used to add e.g. specific class attributes used by a framework.
 * @memberof setAdditionalAttributes
 * @returns {Object}
 */
function additionalBooleanInputAttributes(){
    var attributeNameAndValueObject = {};
    
    //Usage Example:
    attributeNameAndValueObject.class="form-control";
    attributeNameAndValueObject.onblur="validateSchemaOrgElem(this.id)"; 
    attributeNameAndValueObject.onfocus="removeValidationMessage(this.id)";

    return attributeNameAndValueObject;
}

/**
 * Helper function providing the option to add additional attributes to schemaorg input fields marked as datatype date.
 * Can be used to add e.g. specific class attributes used by a framework.
 * @memberof setAdditionalAttributes
 * @returns {Object}
 */
function additionalDateInputAttributes(){
    var attributeNameAndValueObject = {};
    
    //Usage Example:
    attributeNameAndValueObject.type="text";
    // attributeNameAndValueObject.class="form-control col-lg-6";
    attributeNameAndValueObject.onblur="validateSchemaOrgElem(this.id)"; 
    attributeNameAndValueObject.onfocus="removeValidationMessage(this.id)";

    return attributeNameAndValueObject;
}

/**
 * Helper function providing the option to add additional attributes to schemaorg input fields marked as datatype time.
 * Can be used to add e.g. specific class attributes used by a framework.
 * @memberof setAdditionalAttributes
 * @returns {Object}
 */
function additionalTimeInputAttributes(){
    var attributeNameAndValueObject = {};
    
    //Usage Example:
    attributeNameAndValueObject.type="text";
    attributeNameAndValueObject.class="form-control";
    attributeNameAndValueObject.onblur="validateSchemaOrgElem(this.id)";
    attributeNameAndValueObject.onfocus="removeValidationMessage(this.id)";

    return attributeNameAndValueObject;
}

/**
 * Helper function providing the option to add additional attributes to schemaorg input fields marked as datatype datetime.
 * Can be used to add e.g. specific class attributes used by a framework.
 * @memberof setAdditionalAttributes
 * @returns {Object}
 */
function additionalDateTimeInputAttributes(){
    var attributeNameAndValueObject = {};
    
    //Usage Example:
    attributeNameAndValueObject.type="text";
    attributeNameAndValueObject.class="form-control";
    attributeNameAndValueObject.onblur="validateSchemaOrgElem(this.id)"; 
    attributeNameAndValueObject.onfocus="removeValidationMessage(this.id)";

    return attributeNameAndValueObject;
}

/**
 * Helper function providing the option to add additional attributes to schemaorg input fields marked as datatype number.
 * Can be used to add e.g. specific class attributes used by a framework.
 * @memberof setAdditionalAttributes
 * @returns {Object}
 */
function additionalNumberInputAttributes(){
    var attributeNameAndValueObject = {};
    
    //Usage Example:
    attributeNameAndValueObject.type="text";
    attributeNameAndValueObject.class="form-control";
    attributeNameAndValueObject.onblur="validateSchemaOrgElem(this.id)"; 
    attributeNameAndValueObject.onfocus="removeValidationMessage(this.id)";

    return attributeNameAndValueObject;
}

/**
 * Helper function providing the option to add additional attributes to schemaorg input fields marked as datatype float.
 * Can be used to add e.g. specific class attributes used by a framework.
 * @memberof setAdditionalAttributes
 * @returns {Object}
 */
function additionalFloatInputAttributes(){
    var attributeNameAndValueObject = {};
    
    //Usage Example:
    attributeNameAndValueObject.type="text";
    attributeNameAndValueObject.class="form-control";
    attributeNameAndValueObject.onblur="validateSchemaOrgElem(this.id)";
    attributeNameAndValueObject.onfocus="removeValidationMessage(this.id)";

    return attributeNameAndValueObject;
}

/**
 * Helper function providing the option to add additional attributes to schemaorg input fields marked as datatype integer.
 * Can be used to add e.g. specific class attributes used by a framework.
 * @memberof setAdditionalAttributes
 * @returns {Object}
 */
function additionalIntegerInputAttributes(){
    var attributeNameAndValueObject = {};
    
    //Usage Example:
    attributeNameAndValueObject.type="text";
    attributeNameAndValueObject.class="form-control";
    attributeNameAndValueObject.onblur="validateSchemaOrgElem(this.id)";
    attributeNameAndValueObject.onfocus="removeValidationMessage(this.id)";

    return attributeNameAndValueObject;
}

/**
 * Helper function providing the option to add additional attributes to schemaorg input fields marked as datatype url.
 * Can be used to add e.g. specific class attributes used by a framework.
 * @memberof setAdditionalAttributes
 * @returns {Object}
 */
function additionalURLInputAttributes(){
    var attributeNameAndValueObject = {};
    
    //Usage Example:
    attributeNameAndValueObject.type="text";
    attributeNameAndValueObject.class="form-control";
    attributeNameAndValueObject.onblur="validateSchemaOrgElem(this.id)";
    attributeNameAndValueObject.onfocus="removeValidationMessage(this.id)";

    return attributeNameAndValueObject;
}

/**
 * Helper function providing the option to add additional attributes to schemaorg input fields marked as datatype text.
 * Can be used to add e.g. specific class attributes used by a framework.
 * @memberof setAdditionalAttributes
 * @returns {Object}
 */
function additionalTextInputAttributes(){
    var attributeNameAndValueObject = {};
    
    //Usage Example:
    attributeNameAndValueObject.type="text";
    attributeNameAndValueObject.class="form-control";
    attributeNameAndValueObject.onblur="validateSchemaOrgElem(this.id)";
    attributeNameAndValueObject.onfocus="removeValidationMessage(this.id)";

    return attributeNameAndValueObject;
}

/**
 * Helper function providing the option to add any kind of additional formats, html elements, etc... directly after xsl transformation.
 * Can be used e.g. for adding additional structural elements needed by a specific framework.
 * 
 * @memberof transform
 */
function setAdditionalFormatsAfterXSLInit(){
    //Usage Example:
    //Embed each <label><input schemaorgid="*"></input></label> into a div with class form-group for formatting purposes

    //Call format structure incl. datepicker for all relevant elements
    $("#"+getIdOfBodyContentDiv())
        .find('input[schemaorgid]')
        .filter(function () {
            return $(this).css("display") != "none";
        })
        .each(function (i) {
            //Add structure for visible elements only
            addStructurePerElementDatatype($(this),$(this).attr("datatype"));
        });

    //Add linebreak before new label in case label is visible but input is hidden
    //Do this so next label in on new line
    $("#"+getIdOfBodyContentDiv()).find('label[inschemaorg="hidden"]')
        .each(function (i) {
            if($(this).prev().attr("inschemaorg")=="hidden"){
                $(this).before("</br>");
            }
    });

}

/**
 * Adds additional structure to element (e.g. datepicker) according to given datatype.
 * 
 * @param {jQuery} $element  
 * @param {SchemaOrgDataTypeEnumeration} schemaOrgDataType 
 */
function addStructurePerElementDatatype($element, schemaOrgDataType) {
    switch (schemaOrgDataType) {

        case SchemaOrgDataTypeEnumeration.DATE:
            var parentContainer = $($element).parent();
            
            var divContainerId = stringGen(20);
            var divContainerId2 = stringGen(20);
            
            parentContainer.append('<div id="'+divContainerId+'" class="form-group"></div>');
            
            $("#"+divContainerId).append('<div formatAs="'+SchemaOrgDataTypeEnumeration.DATE+'" class="input-group date" id="'+divContainerId2+'"></div>');
            $("#"+divContainerId2).append($($element));
            $("#"+divContainerId2).append('<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>');
            
            break;
        case SchemaOrgDataTypeEnumeration.TIME:
            var parentContainer = $($element).parent();
            
            var divContainerId = stringGen(20);
            var divContainerId2 = stringGen(20);
            
            parentContainer.append('<div id="'+divContainerId+'" class="form-group"></div>');
            
            $("#"+divContainerId).append('<div formatAs="'+SchemaOrgDataTypeEnumeration.TIME+'" class="input-group date" id="'+divContainerId2+'"></div>');
            $("#"+divContainerId2).append($($element));
            $("#"+divContainerId2).append('<span class="input-group-addon"><span class="glyphicon glyphicon-time"></span></span>');
            
            break;
        case SchemaOrgDataTypeEnumeration.DATETIME:
            var parentContainer = $($element).parent();
            
            var divContainerId = stringGen(20);
            var divContainerId2 = stringGen(20);
            
            parentContainer.append('<div id="'+divContainerId+'" class="form-group"></div>');
            
            $("#"+divContainerId).append('<div formatAs="'+SchemaOrgDataTypeEnumeration.DATETIME+'" class="input-group date" id="'+divContainerId2+'"></div>');
            $("#"+divContainerId2).append($($element));
            $("#"+divContainerId2).append('<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>');
            
            break;
        default:
            //Regular plain text
            var parentContainer = $($element).parent();
            var divContainerId = stringGen(20);
            parentContainer.after('<div id="'+divContainerId+'" class="form-group"></div>');
            $("#"+divContainerId).append(parentContainer);
            //Additional steps if it is a currency field
            if($element.attr("schemaorgid")=="currency" || $element.attr("schemaorgid")=="priceCurrency"){
                formatAsCurrency($("#"+divContainerId));
            }         
    }
}

/**
 * Currently only used for date-related fields: Used for setting correct format and language for date/time-pickers.
 * 
 * @memberof setAdditionalAttributes
 * @param {jQuery} $element 
 * @param {SchemaOrgDataTypeEnumeration} schemaOrgDataType 
 */
function customFormatSelector($element, schemaOrgDataType) {

    var currentLocale= function(){
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

    switch (schemaOrgDataType) {
        case SchemaOrgDataTypeEnumeration.DATE:
            $($element).datetimepicker({format: 'YYYY-MM-DD',locale: currentLocale()});
            break;
        case SchemaOrgDataTypeEnumeration.TIME:
            $($element).datetimepicker({format: 'HH:mm:ssZ',locale: currentLocale()});
            break;
        case SchemaOrgDataTypeEnumeration.DATETIME:
            $($element).datetimepicker({format: 'YYYY-MM-DDTHH:mm:ssZ',locale: currentLocale()});
            break;
        default:
            //Do nothing...            
    }
}

/**
 * Looks for first input element in given container and sets it to display:none. 
 * Then appends select bar with appropriate action to fill hidden input element with chosen value onchange.
 * @memberof setAdditionalAttributes
 * @param {jQuery} $divContainer The "grandparent-container" of the input field (usually a div). 
 * Note: Usual strucutre is to have the input element encapsulated in label, e.g.: [label [input] ], 
 * However: Appending the select element directly within the label (e.g.: [label [input] [select]]) leads to errors in some browser.
 * Therefore: Append the select element always as sibling to label (e.g.: [div [label [input]] [select]]). 
 */
function formatAsCurrency($divContainer){
    var currencySelectorId=stringGen(20);
    var currentInputValue=$($divContainer).find('input[schemaorgid]:first').val();
    var currencyIsRequired= function (){
        if($($divContainer).find('input[schemaorgid]:first').attr("required")=="required"){
            return true;
        }else{
            return false;
        }
    };

    //Hide actual input field
    $($divContainer).find('input[schemaorgid]:first').css('display', 'none');
    //Append select element with onchange action to div container
    $($divContainer).append('<select onchange="setCurrencyToNearestInput($(this))" id="'+currencySelectorId+'"></select>');
    
    //Check if input value is neither empty nor invalid (meaning is in currency array)
    if(currentInputValue!="" && inArray(currentInputValue,isoCurrenciesArray))
    {
        //If true, then set value as selected
        $("#"+currencySelectorId).append('<option selected="selected" value="'+currentInputValue+'">'+currentInputValue+'</option>');
    }else{
        //If either empty or invalid
        if(currencyIsRequired())
        {
            //If currency is required, set currency and input field to default CHF
            $("#"+currencySelectorId).append('<option selected="selected" value="CHF">CHF</option>');
            $($divContainer).find('input[schemaorgid]:first').val("CHF");
            currentInputValue="CHF";
        }else{
            //if is not required, set an empty string as selected and void the text field
            $("#"+currencySelectorId).append('<option selected="selected" value=""></option>');
            $($divContainer).find('input[schemaorgid]:first').val("");
            currentInputValue="";
        }
    }

    //populate select element with each currency
    for ( var i=0 ; i < isoCurrenciesArray.length; i++ )
    {
        //Fill remaining currencies into select element, but add empty selector only if currency is not required
        if(isoCurrenciesArray[i]!=currentInputValue && !(isoCurrenciesArray[i]=="" && currencyIsRequired())){
            $("#"+currencySelectorId).append('<option value="'+isoCurrenciesArray[i]+'">'+isoCurrenciesArray[i]+'</option>');
        }
    }
}

/**
 * Sets relative to given element the first found schemaorginput field to value corresponding to given element value. 
 * See {@link setAdditionalAttributes.formatAsCurrency|currency formatter} for more information.
 * @memberof setAdditionalAttributes
 * @param {jQuery} $element The select element of which the currency value has been chosen.
 */
function setCurrencyToNearestInput($element){
    var valueToSet = $($element).val();
    $($element).parent().find('input[schemaorgid]:first').val(valueToSet);
}

/**
 * Populates each avalilable xml files on server as options in dropdown
 * @param {[]} filesArray 
 */
function populateXMLTemplatesSelector(filesArray){
    var shortXmlName = '';
    $('#xml-list').append('<option value="">Select ');
    
    for (var i = 0; i < filesArray.length; i++) {
        shortXmlName = filesArray[i].replace('/xml/','');
        $('#xml-list').append('<option value="'+ filesArray[i] +'">'+ shortXmlName);
    }
}