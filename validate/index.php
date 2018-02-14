<!DOCTYPE html>
<html lang="en">
  <head>

    <title>XML-Schema validation tool</title>
    <!-- Required meta tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<?php include("../includes/head.html");?>
    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
  </head>
  <body>
		<script>
			var xsdFile ="validator.xsd";
		</script>
		<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
		<script src="js/loadXmlServerFilesToValidate.js"></script>
		<script src="js/validateXml.js"></script>
		<section class="intro">
			<?php include("../includes/navigation.html");?>
		</section>

		<div id="mainDiv" class="container">
			<ul class="breadcrumb">    
				<li><a href="../index.php">Home</a></li>
				<li><a href="../developer.php">Entwickler</a></li>
				<li class="active">XML Validator</li>
			</ul>
			<!-- <h1>XML Validator</h1> -->

		<table class="col-lg-12">
			<tr>
				<th>
					Select XML-file:
				</th>
			</tr>
			<tr>
				<td>
					<select id="xml-list" name="xml-list"></select>
				</td>
			</tr>
			<tr>
				<td>
				<br/>	 
				</td>
			</tr>
			<tr>
				<td class="alert alert-info">
				XML files to validate are stored in: <b>WEBROOT/xmltovalidate/</b>
				</td>
			</tr>
			<tr>
				<td class="alert alert-info">
				Validated XML files are stored in: <b>WEBROOT/xml/</b>
				</td>
			</tr>
			<tr>
				<td>
				<br/>
					<button class='btn btn-primary' onclick="validateFile($('#xml-list').val(), xsdFile)">Validate XML</button>
				</td>
			</tr>
		</table>
		<br/>
		<pre id="body-content" style="word-wrap: break-word; white-space: normal;">
		</pre>
		<div id="btn-container">
		</div>	
	</div>
		<script type="text/javascript">
		    $('#entwickler').addClass("active");
		</script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
		<!-- Latest compiled and minified JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	</body>
</html>