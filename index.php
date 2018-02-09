<!DOCTYPE html>
<html lang="en">
<?php include("includes/head.html");?>
  <body>
  		<script src="js/constantValues.js"></script>
		<script src="js/util.js"></script>
		<script src="js/formattingHelper.js"></script>
		<script src="js/schemaorgRegex.js"></script>
		<script src="js/validationMethods.js"></script>
		<script src="js/xslTransformation.js"></script>
		<script src="js/jsonTransformation.js"></script>
		

		<div id="full-content" class="container-fluid">
			<section class ="intro">
					
				<?php include("includes/navigation.html");?>
				<div class="container">
							<div class="languageselect">

						<p class="">Sprache | Langue | Lingua | Language:</p>

						<select class="col-lg-2" id="label-language" onchange='transform(currentXml, getXmlToHtmlXslPath())'>
							<option selected="selected" value="labelde">DE</option>
							<option value="labelfr">FR</option>
							<option value="labelit">IT</option>
							<option value="labelen">EN</option>
						</select>
					</div>	
			
				</div>
				<div class="col-lg-12 text-center">
					
					<div class="row formselect">
							<div class="col-lg-3 col-xs-12">Formular auswählen:</div>
							<div class="col-lg-3 col-xs-12">
								<select  id="xml-list" name="xml-list" onchange='transform(this.value, getXmlToHtmlXslPath())'>
							</select>
							</div>
							<!-- <div class="col-lg-3 col-xs-12">veröffentlichen!</div> -->
					</div>
				</div>
			</section>

			
			<div id="body-contentform-container" >

				<div id="body-content" class="container formcontainer ">
					<i class="fa fa-fort-awesome center justify-content-center"></i>
				</div>
			</div>
			<br/>
			<div class="container">
					<pre id="json-content" class="copytoclipboard" name="json-content">
				
			</pre>
			<button id="copy-button" class ="btn btn-secondary "onclick="copyToClipboard()">copy to clipboard</button>
			</div>
			<script>
				$( document ).ready(function() 
				{
					//If client browser is not IE, then inject form. The form is necessary for HTML5 validation of required fields.
					if(!isMsIE())
						{
							$("#body-contentform-container").append("<form id='body-form'></form>");
							$("#body-form").append($("#"+getIdOfBodyContentDiv()));
						}

					//init all global variables
					$.get("/php/getschemaorg.php",{param:null},getschemaorgCallback);

					function getschemaorgCallback(data){
						schemaorgComments = JSON.parse(data);

            			console.log("Loaded: RDF Schemaorg");

						$.get("/php/getISOCurrencies.php",{param:null},getISOCurrenciesCallback);
					};
					
					function getISOCurrenciesCallback(data){
						 
						//Add empty field
						data+='\n';
						//push each string divided by newline as separate element into array
						isoCurrenciesArray = data.split('\n');
						//Sort array alphabetically
						isoCurrenciesArray.sort();

						console.log("Loaded: ISO Currencies");

						$.get("/php/getxmlfiles.php",{param:null},getxmlfilesCallback);
					};

					function getxmlfilesCallback(data){

						xml_filesArray = data.split('\n');

						console.log("Loaded: XML-templates");
						populateXMLTemplatesSelector(xml_filesArray);
					};
					
				});
				function copyToClipboard() {
					  /* Get the text field */
					  var copyText = document.getElementById("json-content");

					  /* Select the text field */
					  copyText.select();

					  /* Copy the text inside the text field */
					  document.execCommand("Copy");

					  /* Alert the copied text */
					  alert("Copied the text: " + copyText.value);
				};


				
			</script>  
		</div>
	</body>
</html>