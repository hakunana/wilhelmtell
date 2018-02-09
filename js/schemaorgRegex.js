/**
 * Regex for validating a value of an input field assigned to the datatype {@link SchemaOrgDataTypeEnumeration.DATETIME|schemaorg datetime}.
 * Returns false if input does not match regex.
 * @memberof validateSchemaOrgElem
 * @param {string} dateTimeValueToCheck 
 * @returns {boolean}
 */
function isValidDateTimeISO8601Format(dateTimeValueToCheck) {
    //Regex checks if datetime given is valid and conform to ISO8601 format (as defined also by schema.org DateTime primitive datatype):
    return /^(?:[1-9]\d{3}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[1-9]\d(?:0[48]|[2468][048]|[13579][26])|(?:[2468][048]|[13579][26])00)-02-29)T(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:Z|[+-][01]\d:[0-5]\d)$/g.test(dateTimeValueToCheck);
}

/**
 * Regex for validating a value of an input field assigned to the datatype {@link SchemaOrgDataTypeEnumeration.DATE|schemaorg date}.
 * Returns false if input does not match regex.
 * @memberof validateSchemaOrgElem
 * @param {string} dateValueToCheck 
 * @returns {boolean}
 */
function isValidDateISO8601Format(dateValueToCheck) {
    //Regex checks if date given is valid and conform to ISO8601 format (as defined also by schema.org Date primitive datatype):
    return /^(?:[1-9]\d{3}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[1-9]\d(?:0[48]|[2468][048]|[13579][26])|(?:[2468][048]|[13579][26])00)-02-29)$/g.test(dateValueToCheck);
}

/**
 * Regex for validating a value of an input field assigned to the datatype {@link SchemaOrgDataTypeEnumeration.TIME|schemaorg time}.
 * Returns false if input does not match regex.
 * @memberof validateSchemaOrgElem
 * @param {string} timeValueToCheck 
 * @returns {boolean}
 */
function isValidTimeISO8601Format(timeValueToCheck) {
    //Regex checks if time given is valid and conform to ISO8601 format (as defined also by schema.org Time primitive datatype):
    return /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:Z|[+-][01]\d:[0-5]\d)$/g.test(timeValueToCheck);
}

/**
 * Regex for validating a value of an input field assigned to the datatype {@link SchemaOrgDataTypeEnumeration.BOOLEAN|schemaorg boolean}.
 * Returns false if input does not match regex.
 * @memberof validateSchemaOrgElem
 * @param {string} boolValueToCheck 
 * @returns {boolean}
 */
function isValidBool(boolValueToCheck) {
    //Regex checks if given bool value is valid (as defined also by schema.org Time primitive datatype):
    return /^(false|true)$/gi.test(boolValueToCheck);
}

/**
 * Regex for validating a value of an input field assigned to the datatype {@link SchemaOrgDataTypeEnumeration.NUMBER|schemaorg number}.
 * Returns false if input does not match regex.
 * @memberof validateSchemaOrgElem
 * @param {string} numberValueToCheck 
 * @returns {boolean}
 */
function isValidNumber(numberValueToCheck) {
    //number (float and integer allowed)
    return /^[+-]?([0-9]*[.])?[0-9]+$/g.test(numberValueToCheck);
}

/**
 * Regex for validating a value of an input field assigned to the datatype {@link SchemaOrgDataTypeEnumeration.FLOAT|schemaorg float}.
 * Returns false if input does not match regex.
 * @memberof validateSchemaOrgElem
 * @param {string} floatValueToCheck 
 * @returns {boolean}
 */
function isValidFloat(floatValueToCheck) {
    //float (only float numbers allowed)
    return /^[+-]?([0-9]*[.])[0-9]+$/g.test(floatValueToCheck);
}

/**
 * Regex for validating a value of an input field assigned to the datatype {@link SchemaOrgDataTypeEnumeration.INTEGER|schemaorg integer}.
 * Returns false if input does not match regex.
 * @memberof validateSchemaOrgElem
 * @param {string} integerValueToCheck 
 * @returns {boolean}
 */
function isValidInteger(integerValueToCheck) {
    //integer (only integer allowed)
    return /^[0-9]+$/g.test(integerValueToCheck);
}

/**
 * Regex for validating a value of an input field assigned to the datatype {@link SchemaOrgDataTypeEnumeration.URL|schemaorg url}.
 * Returns false if input does not match regex.
 * @memberof validateSchemaOrgElem
 * @param {string} urlValueToCheck 
 * @returns {boolean}
 */
function isValidUrl(urlValueToCheck) {
    return /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/ig.test(urlValueToCheck);
}