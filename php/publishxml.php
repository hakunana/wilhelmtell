<?php
//Moves the specified file to other location. Overrides in case file does already exist
if ($_GET['xml']!="") {
    rename('../xmltovalidate/'.$_GET['xml'], '../xml/'.$_GET['xml']);
}
?>