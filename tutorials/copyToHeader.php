<!DOCTYPE html>
<html lang="en">
<?php include("../includes/head.html");?>
 <body>
  	<div id="full-content" class="container-fluid">
		<section class ="intro">
			<?php include("../includes/navigation.html");?>
		</section>
	</div>
	<div class="container-fluid">
		
		<!-- This should always position the first page of the tutorial section. Subsections and other added sections can be linked within /create.html or other subpages -->

		<div id="accordion-languagetabs" role="tablist" aria-multiselectable="true">
    <div class="">
        <div class="container contentcontainer">
            <div class="col-lg-12 langselect">

                <ul class="nav nav-tabs pull-left" role="tablist">
                        <li><p class="">Sprache | Langue | Lingua | Language:</p></li>
                        <!-- FIRST TAB -->
                        <li class="nav-item" aria-expanded="false">
                            <a class="nav-link " role="tab" href="#languagetabs-one" data-toggle="tab" aria-expanded="true">DE</a>
                        </li>

                        <!-- SECOND TAB -->
                        <li class="nav-item">
                            <a class="nav-link" role="tab" href="#languagetabs-two" data-toggle="tab" aria-expanded="false">EN</a>
                        </li>
                        <!-- THIRD TAB -->
                        <li class="nav-item">
                            <a class="nav-link" role="tab" href="#languagetabs-three" data-toggle="tab" aria-expanded="false">FR</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" role="tab" href="#languagetabs-four" data-toggle="tab" aria-expanded="false">IT</a>
                        </li>

                    </ul>
            </div>

            <div>
                <div class="tab-content">
                    <div id="languagetabs-one" role="tabpanel" class="tab-pane active" aria-expanded="true">

                        <!-- startnav -->
                        <div class="col-lg-2">
                            <ul class="nav nav-pills nav-stacked">
                                <li class="list-group-item ">
                                    <a href="../tutorial.php"> 
                              Bibliotheksevent erstellen</a>
                                </li>
                                <li class="list-group-item active">
                                    <a href="tutorials/copyToHeader.php">Einbinden in meine Seite</a>
                                </li>
                            </ul>
                        </div>
                        <!-- endnav -->

                        <!-- START ERKLAERUNG DE -->
                        <div class="col-lg-10 headline">
                            <h1> Einbinden auf der Seite</h1>
                            <h2 class="section-heading">Wie bette ich JSON-LD Code auf meiner Seite ein?</h2>
                        </div>

                        <div class="col-lg-10">
                            <p>some text</p>
                        </div>
                        <!-- ENDE ERKLAERUNG DE -->
                    </div>

                    <div id="languagetabs-two" role="tabpanel" class="tab-pane" aria-expanded="false">
                        <div class="col-lg-2">
                            <ul class="nav nav-pills nav-stacked">
                                <li class="list-group-item ">
                                    <a href="#">        
                              Create an eventcode</a>
                                </li>

                                <li class="list-group-item active">
                                    <a href="tutorials/copyToHeader.php">howto embedd within my page</a>
                                </li>
                            </ul>
                        </div>
                        <!-- START ERKLAERUNG EN -->
                        <div class="col-lg-10 headline">
                            <h1> Embedd to page</h1>
                            <h2 class="section-heading">How can I embedd the JSON-LD Code to my page?</h2>
                        </div>


                        <div class="col-lg-10">
                        	<p>some text</p>
                        </div>
                        <!-- ENDE ERKLAERUNG EN -->
                    </div>

                    <div id="languagetabs-three" role="tabpanel" class="tab-pane" aria-expanded="false">
                        <div class="col-lg-2">
                            <ul class="nav nav-pills nav-stacked">
                                <li class="list-group-item ">
                                    <a href="#">          
                              créer un événement</a>
                                </li>

                                <li class="list-group-item active ">
                                    <a href="tutorials/copyToHeader.php">intégrer dans ma page</a>
                                </li>
                            </ul>
                        </div>
                        <!-- START ERKLAERUNG FR -->
                        <div class="col-lg-10 headline">
                            <h1> title </h1>
                            <h2 class="section-heading">subtitle</h2>
                        </div>

                        <div class="col-lg-10">
                           <p>some text</p>
                        </div>
                        <!-- ENDE ERKLAERUNG FR -->
                    </div>

                    <div id="languagetabs-four" role="tabpanel" class="tab-pane" aria-expanded="false">
                        <div class="col-lg-2">
                            <ul class="nav nav-pills nav-stacked">
                                <li class="list-group-item active">
                                    <a href="#">
                              Crea codice evento</a>
                                </li>

                                <li class="list-group-item ">
                                    <a href="tutorials/copyToHeader.php">Incorpora la mia pagina</a>
                                </li>
                            </ul>
                        </div>
                        <!-- START ERKLAERUNG IT -->
                        <div class="col-lg-10 headline">
                            <h1> title</h1>
                            <h2 class="section-heading">subtitle</h2>
                        </div>

                        <div class="col-lg-10">
                            <p>some text</p>
                        </div>
                        <!-- ENDE ERKLAERUNG IT -->
                    </div>
                </div>
            </div>
        </div>
        <!-- card-block -->
    </div>
    <!-- tabpanel-->
</div>

	</div>
</body>
</html>