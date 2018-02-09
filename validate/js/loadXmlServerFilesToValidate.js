/**
 * 
 * 
 * @param {any} data 
 */
function xmltovalidateCallbackFunction(data)
{
  var shortXmlName = '';
  var xml_filesArray = [];
  xml_filesArray = data.split('\n');

  $('#xml-list').append('<option value="">- Select File -');
  
  for (var i = 0; i < xml_filesArray.length; i++) {
      $('#xml-list').append('<option value="'+ xml_filesArray[i] +'">'+ xml_filesArray[i]);
    }
}

$(function(){
  $.get("/php/getxmlfilestovalidate.php",{param:null},xmltovalidateCallbackFunction);
});