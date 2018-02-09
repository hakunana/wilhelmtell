<?php
    //Try this line in case of gzip comression on server
    //echo gzdecode(file_get_contents("https://www.currency-iso.org/dam/downloads/lists/list_one.xml"));
    $content = "";
    $result = "";

    //Try to load file remotely
    $content = @file_get_contents("https://www.currency-iso.org/dam/downloads/lists/list_one.xml");
    if ($content === FALSE) {
        //In case of any errors, fetch the local backup file
        $content = file_get_contents("./local-bak/ISO4217_Currencies.xml");
    }

    $xml = new DOMDocument();
    $xml->loadXML($content);
    $xpath = new DOMXPath($xml);

    //select distinct all currencies
    $isoCurrencies = $xpath->query("//CcyNtry[not(Ccy=preceding-sibling::CcyNtry/Ccy)]/Ccy");
    
    if($isoCurrencies->length>0)
    {
        foreach ($isoCurrencies as $isoCurrency)
        {
            //Populate each found currency into string divided by newline
            $result .= $isoCurrency->nodeValue;
            $result .="\n";
        }
    }

    //Trim away any unwanted newline/carriage return
    echo trim($result);
?>