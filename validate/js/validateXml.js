/**
 * Entry function initiating serverside validation of the xml file.
 * 
 * @param {string} xml The path of the xml file
 * @param {string} xsd The path of the xsd file
 */
function validateFile(xml,xsd){
    $('#btn-container').empty();
    var params=[ 
        {name:"xml", value:xml},
        {name:"xsd", value:xsd}
  ];
  $.get("/php/getxsdvalidation.php", params, xsdCallbackFunction);
}
/**
 * Callback function obtaining string param from server. 
 * If validation has been successful calls create publish button.
 * 
 * @param {string} data 
 */
function xsdCallbackFunction(data)
{
    var isNoFileString = data.slice(0,6);
    $("#body-content").empty();
    if(data=="OK"){
        $("#body-content").append("XML file is valid. You can now publish the XML file by clicking on the button below.");
        createPublishButton();
    }else if(data=="NOFILE"){
        alert("Please select an XML file to be validated.");
    }
    else{
        if(isNoFileString=="NOCRIT"){
            var warningAndErrors = data.slice(6,data.length);
            $("#body-content").append(warningAndErrors);
            createPublishButton();
        }else{
            $("#body-content").append(data);
        }
    }
}

/**
 * Creates the publish button in case there is no critical error.
 */
function createPublishButton()
{
    $('#btn-container').empty();
    var currentXMLFileToValidate= $('#xml-list').val();
    var btnHtml ='<button id="btnPublish" class="btn btn-primary" onclick="publishXML(\''+currentXMLFileToValidate+'\')">Publish</button>';
    $("#btn-container").append(btnHtml);
}

/**
 * Publishes (copy serverside from validate folder to xml folder) the xml file.
 * @param {string} xml 
 */
function publishXML(xml)
{
    if ($('#xml-list').val() == xml)
    {
        var params=[ 
            {name:"xml", value:xml},
        ];
        $.get("/php/publishxml.php", params, publishCallbackFunction);
    }else {
        alert("You have changed the XML file, please validate the new XML file first before trying to publish it.");
    }
}

/**
 * In case server has successfully copied the file, alert success message.
 */
function publishCallbackFunction(){
    alert("XML file has been published successfully.");
    location.reload(true);
}



