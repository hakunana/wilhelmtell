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
           <!-- <ul class="breadcrumb">    
                <li><a href="../index.php">Home</a></li>
                <li class="active">Tutorial</li>
                
            </ul> -->
            <div>
                <div class="tab-content">
                    <div id="languagetabs-one" role="tabpanel" class="tab-pane active" aria-expanded="true">
                        <!-- startnav can be reactivated if more tutorials are implemented -->
                        <!-- div class="col-lg-2">
                            <ul class="nav nav-pills nav-stacked">
                                <li class="list-group-item title">
                                    Tutorial-Themen
                                </li>
                                <li class="list-group-item active">
                                    <a href="#">
                                    Bibliotheksevent erstellen</a>
                                </li>
                                <li class="list-group-item ">
                                    <a href="tutorials/copyToHeader.php">Einbinden in meine Seite</a>
                                </li>
                            </ul>
                        </div> -->
                        <!-- endnav -->
                        <!-- START ERKLAERUNG DE -->
                        <div class="col-lg-12 headline">
                            
                            <h1 class="section-heading">Wie erstelle ich den JSON-LD Code für meine Veranstaltungen?</h1>
                            <hr>
                        </div>
                        <div class="col-lg-12 is-table-row">
                            <div class="col-lg-3 col-md-6 text-center box">
                                <i class="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
                                <h3 class="mb-3">Schritt 1</h3>
                                <p class="text-  mb-0">Wählen Sie im Bereich <br> <a href="index.php" class="btn btn-primary"> «Formulare» </a> <br> aus der Liste das benötigte Formular aus</p>
                                                <?php include("tutorials/images/tut_img1.php");?>
                            </div>
                            <div class="col-lg-3 col-md-6 text-center box box">
                                <i class="fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons"></i>
                                <h3 class="mb-3">Schritt 2</h3>
                                <p class="text-  mb-0">Füllen Sie die Felder des Formulars aus</p>
                                <ul class="text-left">
                                      <li> Felder mit * sind Pflichtfelder und müssen ausgefüllt werden, andernfalls kann kein JSON-LD-Datensatz generiert werden</li> 
                                     <li>Begriffe, die unterstrichen sind, beinhalte eine Beschreibung. Per Mausklick wird ein Pop-up mit der Definition geladen. Bei Verwendung der Sprachen Deutsch, Französisch und Italienisch wird eine maschinelle Übersetzung ausgegeben. (Bitte mit Vorsicht geniessen)</li> 
                                </ul>
                                <?php include("tutorials/images/tut_img2.php");?>
                            </div>
                            <div class="col-lg-3 col-md-6 text-center box">
                                <i class="fa fa-4x fa-code text-primary mb-3 sr-icons"></i>
                                <h3 class="mb-3">Schritt 3</h3>
                                <p class="text-  mb-0">Drücken Sie den Button «JSON-LD erzeugen», wenn Sie alle erforderlichen Daten eingegeben haben</p>
                                <?php include("tutorials/images/tut_img3.php");?>
                            </div>
                            <div class="col-lg-3 col-md-6 text-center box">
                                <i class="fa fa-4x fa-external-link text-primary mb-3 sr-icons"></i>
                                <h3 class="mb-3">Schritt 4</h3>
                                <p class="text-  mb-0">Kopieren sie das JSON-LD-Script und fügen Sie es in den Header Ihrer Website ein.</p>
                                <?php include("tutorials/images/tut_img4.php");?>
                            </div>
                        </div>
                        <!-- ENDE ERKLAERUNG DE -->
                    </div>
                    <div id="languagetabs-two" role="tabpanel" class="tab-pane" aria-expanded="false">

                        <!-- startnav can be reactivated if more tutorials are implemented -->

                        <!-- <div class="col-lg-2">
                            <ul class="nav nav-pills nav-stacked">
                                <li class="list-group-item title">
                                                Subjects
                                </li>
                                <li class="list-group-item active">
                                    <a href="#">
                                    Create an eventcode</a>
                                </li>
                                <li class="list-group-item ">
                                    <a href="#">How to embedd within my page</a>
                                </li>
                            </ul>
                        </div> -->
                        <!-- end startnav -->
                        <!-- START ERKLAERUNG EN -->
                        <div class="col-lg-12 headline">
                            
                            <h1>How do I create the JSON-LD Code for my Events?</h1>
                            <hr>

                        </div>
                        <div class="col-lg-12 is-table-row">
                            <div class="col-lg-3 col-md-6 text-center box">
                                <i class="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
                                <h3 class="mb-3">Step 1</h3>
                                <p class="text-  mb-0">Choose within the selector<br> <a href="index.php" class="btn btn-primary"> Forms </a> <br> the right form you need</p>
                                <?php include("tutorials/images/tut_img1.php");?>
                            </div>
                            <div class="col-lg-3 col-md-6 text-center box">
                                <i class="fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons"></i>
                                <h3 class="mb-3">Step 2</h3>
                                <p class="text-  mb-0">Fill in the fields of the form</p>
                                <ul class="text-left">
                                    <li>Fields that are marked with * are mandatory fields and have to be filled in, otherwise the dataset can't be generated. </li> 
                                    <li>Terms which are underlined contain a description. Please click on the terms and a popup window with an explanation will appear. Using German, English or French lanugage, the translation will be done automatically through google translate and thus can contain some errors. </li></p>
                                </ul>
                                <?php include("tutorials/images/tut_img2.php");?>
                            </div>
                            <div class="col-lg-3 col-md-6 text-center box">
                                <i class="fa fa-4x fa-code text-primary mb-3 sr-icons"></i>
                                <h3 class="mb-3">Step 3</h3>
                                <p class="text-  mb-0">
                                    Press the "Create JSON-LD Button" when you're done and entered all necessary data into the form.</p>
                                    <?php include("tutorials/images/tut_img3.php");?>
                                </div>
                                <div class="col-lg-3 col-md-6 text-center box">
                                <i class="fa fa-4x fa-external-link text-primary mb-3 sr-icons"></i>
                                    <h3 class="mb-3">Step 4</h3>
                                    <p class="text-  mb-0">
                                        Copy the JSON-LD script to your clipboard and place the code within your header of your website. </p><br>
                                        <?php include("tutorials/images/tut_img4.php");?>
                                    </div>
                                </div>
                                <!-- ENDE ERKLAERUNG EN -->
                            </div>
                            <div id="languagetabs-three" role="tabpanel" class="tab-pane" aria-expanded="false">
                             <!-- startnav can be reactivated if more tutorials are implemented -->
                                <!-- <div class="col-lg-2">
                                    <ul class="nav nav-pills nav-stacked">
                                       <li class="list-group-item title">
                                            Sujets
                                        </li>
                                        <li class="list-group-item active">
                                            <a href="#">
                                            Créer un événement</a>
                                        </li>
                                        <li class="list-group-item ">
                                            <a href="#">Intégrer dans ma page</a>
                                        </li>
                                    </ul>
                                </div> -->
                                <!-- START ERKLAERUNG FR -->
                                <div class="col-lg-12 headline">
                                    <h1>Comment créer le code JSON pour votre événements?</h1>
                                    <hr>
                                </div>
                                <div class="col-lg-12 is-table-row">
                                    <div class="col-lg-3 col-md-6 text-center box">
                                        <i class="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
                                        <h3 class="mb-3">Étape 1</h3>
                                        <p class="text-  mb-0">Choisissez dans le sélecteur<br> <a href="index.php" class="btn btn-primary"> Formes </a> <br> le formulaire dont vous avez besoin.</p>
                                        <?php include("tutorials/images/tut_img1.php");?>
                                    </div>
                                    <div class="col-lg-3 col-md-6 text-center box">
                                        <i class="fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons"></i>
                                        <h3 class="mb-3">Étape 2</h3>
                                        <p class="text-  mb-0">Remplissez les espaces du formulaire</p>
                                        <ul class="text-left">
                                            <p> <li> Les espaces marqués d'un * sont des espaces obligatoires et doivent être remplis, sinon le JSON-code avec les dates ne peut pas être généré. </li>

                                            <li>Les termes soulignés contiennent une description. Cliquez sur les termes S'il
                                            vous plaît et une fenêtre contextuelle avec une explication apparaîtra .En utilisant le lanugage allemand, anglais ou français, la traduction se fera automatiquement via google translate et peut donc contenir quelques erreurs. </li></p>
                                        </ul>
                                        <?php include("tutorials/images/tut_img2.php");?>
                                    </div>
                                    <div class="col-lg-3 col-md-6 text-center box">
                                <i class="fa fa-4x fa-code text-primary mb-3 sr-icons"></i>
                                        <h3 class="mb-3">Étape 3</h3>
                                        <p class="text-  mb-0">Appuyez sur le bouton "Créer un bouton JSON" lorsque vous avez terminé et entré toutes les données nécessaires dans le formulaire.</p>
                                        <?php include("tutorials/images/tut_img3.php");?>
                                    </div>
                                    <div class="col-lg-3 col-md-6 text-center box">
                                <i class="fa fa-4x fa-external-link text-primary mb-3 sr-icons"></i>
                                        <h3 class="mb-3">Étape 4</h3>
                                        <p class="text-  mb-0">
                                            Copiez le script JSON-LD dans votre bloc-notes (clipboard) et placez le code dans le "header" de votre site Web.</p><br>
                                            <?php include("tutorials/images/tut_img4.php");?>
                                        </div>
                                    </div>
                                    <!-- ENDE ERKLAERUNG FR -->
                                </div>
                                <div id="languagetabs-four" role="tabpanel" class="tab-pane" aria-expanded="false">
                                    <!-- startnav can be reactivated if more tutorials are implemented -->

                                    <!-- <div class="col-lg-2">
                                        <ul class="nav nav-pills nav-stacked">
                                           <li class="list-group-item title">
                                                Temi
                                            </li>
                                            <li class="list-group-item active">
                                                <a href="#">
                                                Creare un testo evento JSON-LD</a>
                                            </li>
                                            <li class="list-group-item ">
                                                <a href="#">Come integrare nella mia pagina</a>
                                            </li>
                                        </ul>
                                    </div> -->
                                    <!-- START ERKLAERUNG IT -->
                                    <div class="col-lg-12 headline">
<!--                                         <h1>Creare un testo evento JSON-LD</h1>
 -->                                        <!-- <h4 class="section-heading">Come posso creare il codice JSON-LD per i miei eventi?</h4>    --> 
                                    <h1>Come posso creare il codice JSON-LD per i miei eventi?</h1>
                                    <hr>
                                    </div>
                                    <div class="col-lg-12 is-table-row">
                                        <div class="col-lg-3 col-md-6 text-center box">
                                            <i class="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
                                            <h3 class="mb-3">1. passo</h3>
                                            <p class="text-  mb-0">Scegliere all' ambito del selettore<br> <a href="index.php" class="btn btn-primary"> "Forms" </a> <br> la forma giusta di cui si ha bisogno </p>
                                            <?php include("tutorials/images/tut_img1.php");?>
                                        </div>
                                        <div class="col-lg-3 col-md-6 text-center box">
                                            <i class="fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons"></i>
                                            <h3 class="mb-3">2. passo</h3>
                                            <p class="text-  mb-0">Compilare i campi del modulo</p>
                                            <ul class="text-left">
                                                <p> <li> I campi contrassegnati con * sono campi obbligatori e devono essere compilati, altrimenti il set di dati non può essere generato. </li> <li>I termini sottolineati contengono una descrizione. Fare clic sui termini e apparirà una finestra popup con una spiegazione.    Utilizzando il linguaggio tedesco, inglese o francese, la traduzione sarà fatta automaticamente attraverso google translate e quindi può contenere alcuni errori. </li> </p>
                                            </ul>
                                            <?php include("tutorials/images/tut_img2.php");?>
                                        </div>
                                        <div class="col-lg-3 col-md-6 text-center box">
                                            <i class="fa fa-4x fa-code text-primary mb-3 sr-icons"></i>
                                            <h3 class="mb-3">3. passo</h3>
                                            <p class="text-  mb-0">Premere il pulsante "Crea JSON" al termine dell' operazione e inserire tutti i dati necessari nel modulo.</p>
                                            <?php include("tutorials/images/tut_img3.php");?>
                                        </div>
                                        <div class="col-lg-3 col-md-6 text-center box">
                                            <i class="fa fa-4x fa-external-link text-primary mb-3 sr-icons"></i>
                                            <h3 class="mb-3">Passaggio 4</h3>
                                            <p class="text-  mb-0">
                                                Opiare lo script JSON-LD negli appunti e inserire il codice all' interno dell' intestazione del sito Web.</p><br>
                                                <?php include("tutorials/images/tut_img4.php");?>
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
