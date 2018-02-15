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
            <div class="">
                <div class="container-fluid contentcontainer">
              
                    <div>
                        <div class="tab-content">
                            <div id="languagetabs-one" role="tabpanel" class="tab-pane active" aria-expanded="true">
                                <!-- startnav -->
                                <div class="col-lg-2">
                                    <ul class="nav nav-pills nav-stacked">
                                        <li class="list-group-item title">
                                            Tutorial-Themen
                                        </li>
                                        <li class="list-group-item ">
                                            <a href="tutorials/create.php">
                                            Bibliotheksevent erstellen</a>
                                        </li>
                                        <li class="list-group-item active">
                                            <a href="#">Einbinden in meine Seite</a>
                                        </li>
                                    </ul>
                                </div>
                                <!-- endnav -->
                                <!-- START ERKLAERUNG DE -->
                                <div class="col-lg-10 headline">
                                    
                                    <h1 class="section-heading">Wie binde ich den JSON-LD Code in meine Seite ein?</h1>
                                    <hr>
                                </div>
                                <div class="col-lg-10 is-table-row">
                                    <div class="col-lg-3 col-md-6 text-center box">
                                        <i class="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
                                        <h3 class="mb-3">Schritt 1</h3>
                                    </div>
                                    <div class="col-lg-3 col-md-6 text-center box box">
                                        <i class="fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons"></i>
                                        <h3 class="mb-3">Schritt 2</h3>
                                    </div>
                                    <div class="col-lg-3 col-md-6 text-center box">
                                        <i class="fa fa-4x fa-code text-primary mb-3 sr-icons"></i>
                                        <h3 class="mb-3">Schritt 3</h3>
                                    </div>
                                    <div class="col-lg-3 col-md-6 text-center box">
                                        <i class="fa fa-4x fa-external-link text-primary mb-3 sr-icons"></i>
                                        <h3 class="mb-3">Schritt 4</h3>
                                    </div>
                                </div>
                                <!-- ENDE ERKLAERUNG DE -->
                            </div>
                            <div id="languagetabs-two" role="tabpanel" class="tab-pane" aria-expanded="false">
                                <div class="col-lg-2">
                                    <ul class="nav nav-pills nav-stacked">
                                        <li class="list-group-item title">
                                            Topics
                                        </li>
                                        <li class="list-group-item ">
                                            <a href="tutorials/create.php">Create an eventcode</a>
                                        </li>
                                        <li class="list-group-item active">
                                            <a href="#">How to embedd within my page</a>
                                        </li>
                                    </ul>
                                </div>
                                <!-- START ERKLAERUNG EN -->
                                <div class="col-lg-10 headline">
                                    <h1> How can I embedd the JSON-LD Code to my own website?</h1>
                                </div>
                                <div class="col-lg-10 is-table-row">
                                    <div class="col-lg-3 col-md-6 text-center box">
                                        <i class="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
                                        <h3 class="mb-3">Step 1</h3>
                                    </div>
                                    <div class="col-lg-3 col-md-6 text-center box">
                                        <i class="fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons"></i>
                                        <h3 class="mb-3">Step 2</h3>
                                    </div>
                                    <div class="col-lg-3 col-md-6 text-center box">
                                        <i class="fa fa-4x fa-heart text-primary mb-3 sr-icons"></i>
                                        <h3 class="mb-3">Step 3</h3>
                                    </div>
                                    <div class="col-lg-3 col-md-6 text-center box">
                                        <i class="fa fa-4x fa-heart text-primary mb-3 sr-icons"></i>
                                        <h3 class="mb-3">Step 4</h3>
                                    
                                    </div>
                                </div>
                                        <!-- ENDE ERKLAERUNG EN -->
                            </div>
                            <div id="languagetabs-three" role="tabpanel" class="tab-pane" aria-expanded="false">
                                <div class="col-lg-2">
                                    <ul class="nav nav-pills nav-stacked">
                                        <li class="list-group-item title">
                                            Topics
                                        </li>
                                        <li class="list-group-item active">
                                            <a href="tutorials/create.php">
                                            Créer un événement</a>
                                        </li>
                                        <li class="list-group-item active">
                                            <a href="#">Intégrer dans ma page</a>
                                        </li>
                                    </ul>
                                </div>
                                <!-- START ERKLAERUNG FR -->
                                <div class="col-lg-10 headline">
                                    <h1>Comment peux-je intégrer le code JSON-LD sur ma page? </h1>
                                </div>
                                <div class="col-lg-10 is-table-row">
                                    <div class="col-lg-3 col-md-6 text-center box">
                                        <i class="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
                                        <h3 class="mb-3">Étape 1</h3>
                                        
                                    </div>
                                    <div class="col-lg-3 col-md-6 text-center box">
                                        <i class="fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons"></i>
                                        <h3 class="mb-3">Étape 2</h3>
                                        
                                    </div>
                                    <div class="col-lg-3 col-md-6 text-center box">
                                        <i class="fa fa-4x fa-heart text-primary mb-3 sr-icons"></i>
                                        <h3 class="mb-3">Étape 3</h3>
                                        
                                    </div>
                                    <div class="col-lg-3 col-md-6 text-center box">
                                        <i class="fa fa-4x fa-heart text-primary mb-3 sr-icons"></i>
                                        <h3 class="mb-3">Étape 4</h3>
                                        
                                    </div>
                                </div>
                                            <!-- ENDE ERKLAERUNG FR -->
                            </div>
                            <div id="languagetabs-four" role="tabpanel" class="tab-pane" aria-expanded="false">
                                <div class="col-lg-2">
                                    <ul class="nav nav-pills nav-stacked">
                                        <li class="list-group-item title">
                                            Topics
                                        </li>
                                        <li class="list-group-item active">
                                            <a href="tutorials/create.php">
                                            Creare un testo evento JSON-LD</a>
                                        </li>
                                        <li class="list-group-item active">
                                            <a href="#">Come integrare nella mia pagina</a>
                                        </li>
                                    </ul>
                                </div>
                                <!-- START ERKLAERUNG IT -->
                                <div class="col-lg-10 headline">
                                    <h1>Come posso integrare il codice JSON-LD nella mia pagina</h1>
                                </div>
                                <div class="col-lg-10 is-table-row">
                                    <div class="col-lg-3 col-md-6 text-center box">
                                        <i class="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
                                        <h3 class="mb-3">1. passo</h3>
                                        
                                    </div>
                                    <div class="col-lg-3 col-md-6 text-center box">
                                        <i class="fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons"></i>
                                        <h3 class="mb-3">2. passo</h3>
                                    </div>
                                    <div class="col-lg-3 col-md-6 text-center box">
                                        <i class="fa fa-4x fa-heart text-primary mb-3 sr-icons"></i>
                                        <h3 class="mb-3">3. passo</h3>
                                    </div>
                                    <div class="col-lg-3 col-md-6 text-center box">
                                        <i class="fa fa-4x fa-heart text-primary mb-3 sr-icons"></i>
                                        <h3 class="mb-3">4. passo</h3>
                                        </div>
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