<?php
    $languagefrom = "auto";

    $content = @file_get_contents("https://translate.googleapis.com/translate_a/single?client=gtx&sl=".$languagefrom."&tl=".$_GET["lang"]."&dt=t&q=".rawurlencode($_GET["text"]));
    if ($content === FALSE) {
        $content = $_GET["text"];
    }

    echo trim($content);
?>