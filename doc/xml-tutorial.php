<!DOCTYPE html>
<html lang="en">
	<?php include("../includes/head.html");?>
	<body>
		<script src="../js/constantValues.js"></script>
		<script src="../js/util.js"></script>
		<script src="../js/formattingHelper.js"></script>
		<script src="../js/schemaorgRegex.js"></script>
		<script src="../js/validationMethods.js"></script>
		<script src="../js/xslTransformation.js"></script>
		<script src="../js/jsonTransformation.js"></script>
		
		<div id="full-content" class="container-fluid">
			<section class ="intro">
				
				<?php include("../includes/navigation.html");?>
			</section>
			<div class="container-fluid contentcontainer">
				<div class="container">
					<ul class="breadcrumb">    
						<li><a href="../index.php">Home</a></li>
						<li><a href="../developer.php">Entwickler</a></li>
						<li><a class="active">XML Template Anleitung</a></li>
					</ul>
					<section>
						<h2>Anleitung zur Erstellung eines XML-Templates</h2>
						<ul>
							<li>
								Erstellen Sie ein XML-File gemäss 1 Aufbau des XML-Files, berücksichtigen Sie dabei die Vorgaben der Elemente (Abschnitt 2) und nutzen Sie die Attribute gemäss Abschnitt 3
							</li>
							<li>
								Laden Sie das Dokument auf den Server, in den Ordner xmltovalidate
							</li>
							<li>Validieren Sie das XML-File via <a href="../validate/index.php">validate</a></li>
							<ul>
								
								<li>a.	Bei Ausgabe eines Errors: Überarbeiten Sie das XML-File gemäss Fehlermeldung und laden Sie es erneut auf den Server</li>
								<li>b.	Validierung erfolgreich ("XML file is valid."): Drücken Sie auf den Button "Publish", um das File freizugeben</li>
							</ul>
							<p>Wenn das XML-File freigegeben und auf dem Server in den Ordner xml verschoben wurde, erhalten Sie die Meldung "XML file has been published susccessfully." Es kann nun als Formular auf der<a href="../index.php"> Startseite </a> verwendet werden.</p>
						</ul>
					</section>
					<section>
						<h2>1 Aufbau des XML-Files</h2>
						<p>Das XML-File für die Generierung neuer Formulare besteht grundsätzlich aus den Elementen node, nodeelem und input. Diese können beliebig verschachtelt werden, wobei jedoch gewisse Regeln berücksichtigt werden müssen. Die Regeln je Element werden in Abschnitt 2 genauer definiert.</p>
						<b>Ein XML-File könnte zum Beispiel folgenden Aufbau haben:</b>
						            <pre><code>
&lt;node nodeid="root"&gt;							&lt;!-- Start of root node --&gt;
	&lt;input nodeid="@id"/&gt;
	&lt;input nodeid="@type"/&gt;						&lt;!-- Required input type --&gt;
	&lt;node nodeid="subNode"&gt; 					&lt;!-- Start of sub node --&gt;
		&lt;nodeelem&gt;						&lt;!-- Start of node element 1 --&gt;
			&lt;input nodeid="@type"/&gt;
			&lt;node nodeid="subSubNode"&gt;			&lt;!-- Start of sub sub node 1 --&gt;
				&lt;input nodeid="@type"/&gt;
			&lt;/node&gt; 					&lt;!-- End of sub sub node 1 --&gt;
			&lt;node nodeid="subSubNode"&gt;			&lt;!-- Start of sub sub node 2 --&gt;
				&lt;nodeelem&gt; 				&lt;!-- Start of node element 2 --&gt;
					&lt;input nodeid="@type"/&gt;
				&lt;/nodeelem&gt; 				&lt;!-- End of node element 2 --&gt;
				&lt;nodeelem&gt;				&lt;!-- Start of node element 3 --&gt;
					&lt;input nodeid="@type"/&gt;
				&lt;/nodeelem&gt; 				&lt;!-- End of node element 3 --&gt;
			&lt;/node&gt; 					&lt;!-- End of sub sub node 2--&gt;
		&lt;/nodeelem&gt; 						&lt;!-- End of node element 1 --&gt;
	&lt;/node&gt; 							&lt;!-- End of sub node --&gt;
&lt;/node&gt;									&lt;!-- End of root node --&gt;
							            <a class="pull-right btn btn-secondary" href="https://jsfiddle.net/smngj8w9/" target="_blank">Edit in JSFiddle</a>
						</code></pre>
						<sub>Table 1: Beispiel des Aufbaus eines XML-Files</sub>
					</section>
					<section>
						<h2>2 Elemente</h2>
						<p>Für die Erstellung eines XML-Files für das Projekt #wilhelmtell stehen folgende Elemente mit den definierten Regeln zur Verfügung:</p>
						<h3>&lt;node&gt;</h3>
						<table class="table">
							<thead>
								<tr>
									<th>#</th>
									<th>Attribute</th>
									<th>Bemerkung</th>
									
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>nodeid</td>
									<td>Dieses Attribut ist zwingend</td>
									
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>labelde, labelfr, labelen, labelit</td>
									<td>Attribut ist optional
										Wird ein label-Attribut gesetzt, müssen alle anderen label-Attribute ebenfalls gesetzt werden
									</td>
									
								</tr>
								<tr>
									<th scope="row">3</th>
									<td>displaylabel</td>
									<td>Attribut ist optional
										Wird das Attribut nicht gesetzt, ist der Standard displaylabel="false"
									</td>
									
								</tr>
								<tr>
									<th scope="row">4</th>
									<td>multiplechildren</td>
									<td>Attribut ist optional
										Wird das Attribut nicht gesetzt, ist der Standard multiplechildren="false"
									</td>
									
								</tr>
								<tr>
									<th scope="row">5</th>
									<td>required</td>
									<td>Attribut ist optional
										Wird das Attribut nicht gesetzt, ist der Standard required="false"
									</td>
									
								</tr>
							</tbody>
						</table>
						<div class="well">
							<h4>Regeln</h4>
							<ul>
								<li>	Die "root node" ist zwingend erforderlich und enthält alle anderen Elemente. Eingabe als &lt;node nodeid="root"&gt; mit optionalen label-Attributen</li>
								<li>	Jede &lt;node> muss mindestens ein &lt;input&gt;, &lt;nodeelem&gt; oder &lt;node&gt; beinhalten</li>
								<li>	Wenn &lt;node multiplechildren="true"&gt;, wird mind. ein &lt;nodeelem&gt; benötigt</li>
								<li>	Wenn &lt;node&gt; mind. ein direkt untergeordnetes Element vom Typ &lt;input&gt; hat, dann muss genau einem davon das Attribut nodeid="@type" zugewiesen werden</li>
								<li>	Wenn displaylabel="true", dann sind für das selbe Element die Attribute labelde, labelfr, labelen und labelit erforderlich</li>
								<li>	Wenn required="true", dann benötigt &lt;node&gt; mindestens ein untergeordnetes &lt;input required ="true"&gt;</li>
							</ul>
						</div>
						<h3>&lt;nodeelem&gt;</h3>
						<table class="table">
							<thead>
								<tr>
									<th>#</th>
									<th>Attribute</th>
									<th>Bemerkung</th>
									
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>labelde, labelfr, labelen, labelit </td>
									<td>Attribut ist optional. Wird ein label-Attribut gesetzt, müssen alle anderen label-Attribute ebenfalls gesetzt werden </td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>displaylabel</td>
									<td>Attribut ist optional. Wird das Attribut nicht gesetzt, ist der Standard displaylabel="false"
									</td>
								</tr>
								<tr>
							</tbody>
						</table>
						<div class="well">
							<h4>Regeln</h4>
							<ul>
								<li>	Jedes &lt;nodeelem> benötigt mindestens ein untergeordnetes Element  &lt;input> und/oder  &lt;node></li>
								<li>	Jedes <nodeelem> benötigt ein übergeordnetes Element <node> mit multiplechildren="true"</li>
								<li>	Wenn displaylabel="true", dann sind für das selbe Element die Attribute labelde, labelfr, labelen und labelit erforderlich</li>
								<li>	Jedes <nodeelem> repräsentiert eine Entity-Klasse (wie von schema.org definiert). Es kann keine alleinstehenden primitiven Datentypen enthalten.</li>
							</ul>
							<p>Dies bedeutet, dass die Abkürzung für Objekte, wie es nach Schema.org möglich ist, NICHT unterstützt wird. <br><br><b>Beispiel:</b></p>
							<pre><code>
Das folgende JSON-LD Element ist gemäss Schema.org-Regelsatz gültig. Es ist die Abkürzung für Objekte:
	'image': 
	[
	"http://myphoto.com/1",
	"http://myphoto.com/2"
	]

	Diese Variante wird jedoch nicht von #wilhelmtell unterstützt. Stattdessen müssen die Objekte vollständig beschrieben werden:

	'image': 
	[
	{'@type':'ImageObject', 'url':'http://myphoto.com/1'},
	{'@type':'ImageObject', 'url':'http://myphoto.com/2'}
	]							</code></pre>
						</div>

						<h3>&lt;input&gt;</h3>
						<table class="table">
							<thead>
								<tr>
									<th>#</th>
									<th>Attribute</th>
									<th>Bemerkung</th>
									
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>nodeid</td>
									<td>Dieses Attribut ist zwingend</td>
									
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>required</td>
									<td>Attribut ist optional. Wird das Attribut nicht gesetzt, ist der Standard required="false"

									</td>
									
								</tr>
								<tr>
									<th scope="row">3</th>
									<td>labelde, labelfr, labelen, labelit</td>
									<td>Attribut ist optional. Wird ein label-Attribut gesetzt, müssen alle anderen label-Attribute ebenfalls gesetzt werden.

									</td>
									
								</tr>
								<tr>
									<th scope="row">4</th>
									<td>displaylabel</td>
									<td>Attribut ist optional. Wird das Attribut nicht gesetzt, ist der Standard displaylabel="false"
									</td>
									
								</tr>
								<tr>
									<th scope="row">5</th>
									<td>edit</td>
									<td>Attribut ist optional. Wird das Attribut nicht gesetzt, ist der Standard edit="false"
									</td>
									
								</tr>
								<tr>
									<th scope="row">6</th>
									<td>value</td>
									<td>Attribut ist optional. Wird das Attribut nicht gesetzt, ist der Standard value=""
									</td>
								</tr>
								<tr>
									<th scope="row">7</th>
									<td>datatype</td>
									<td>Attribut ist optional. Wird das Attribut nicht gesetzt, ist der Standard datatype="http://schema.org/Text".

									</td>
								</tr>
							</tbody>
						</table>
						<div class="well">
							<h4>Regeln</h4>
							<ul>
								<li>	&lt;input> kann nicht über untergeordnete Elemente verfügen</li>
								<li>	Jeder &lt;input> benötigt ein übergeordnetes Element &lt;node> oder &lt;nodeelem> </li>
								<li>	displaylabel="true", dann sind für das selbe Element die Attribute labelde, labelfr, labelen und labelit erforderlich </li>
								<li>	Sind &lt;input required="true"> und übergeordnete &lt;node required="false", dann wird &lt;input> nur berücksichtigt, wenn übergeordnete &lt;node> gesetzt ist / existiert.</li>
							</ul>
						</div>
					</section>
					<section>
						<h2>3 Attribute</h2>
						<p>Folgende Liste definiert die erlaubten Werte je Attribut:</p>
						<table class="table">
							<thead>
								<tr>
									<th>#</th>
									<th>Attribute</th>
									<th>Bemerkung</th>
									
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>nodeid</td>
									<td>[freier Text]</td>
									
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>multiplechildren</td>
									<td>true<br>false<br> (Attribut ist optional, bei Nicht-Nutzung ist Standard "false")
									</td>
									
								</tr>
								<tr>
									<th scope="row">3</th>
									<td>required</td>
									<td>true<br>false<br> (Attribut ist optional, bei Nicht-Nutzung ist Standard "false")
									</td>
									
								</tr>
								<tr>
									<th scope="row">4</th>
									<td>label*</td>
									<td>[freier Text]<br><br>(Attribut ist optional, bei Nicht-Nutzung wird kein Label erstellt)
									</td>
									
								</tr>
								<tr>
									<th scope="row">5</th>
									<td>edit</td>
									<td>true<br>false<br> (Attribut ist optional, bei Nicht-Nutzung ist Standard "false")
									</td>
								</tr>
								<tr>
									<th scope="row">6</th>
									<td>value</td>
									<td>[freier Text]<br><br>(Attribut ist optional, bei Nicht-Nutzung wird value="" ausgegeben)
									</td>
								</tr>
								<tr>
									<th scope="row">7</th>
									<td>datatype</td>
									<td>http://schema.org/Boolean<br>
										http://schema.org/Date<br>
										http://schema.org/Time<br>
										http://schema.org/DateTime<br>
										http://schema.org/Number<br>
										http://schema.org/Float<br>
										http://schema.org/Integer<br>
										http://schema.org/URL<br>
										http://schema.org/Text<br>

										(Attribut ist optional, bei Nicht-Nutzung wird http://schema.org/Text verwendet)

									</td>
								</tr>
								
							</tbody>
						</table>
					</section>
				</div>
			</div>
			
		</div>
	</body>
</html>