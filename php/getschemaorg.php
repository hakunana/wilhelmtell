<?php
    //Try this line in case of gzip comression on server
    //echo gzdecode(file_get_contents("http://schema.org/version/latest/all-layers.rdf"));
   
    $content = "";
    $result = "{";

    //Try to load file remotely
    $content = @file_get_contents("http://schema.org/version/latest/all-layers.rdf");
    if ($content === FALSE) {
        //In case of any errors, fetch the local backup file
        $content = file_get_contents("./local-bak/schemaorg_all-layers.rdf");
    }

    $xml = new DOMDocument();
    $xml->loadXML($content);
    $xpath = new DOMXPath($xml);

    //get all schema.org nodes with a comment via xpath query
    $schemaorgClasses = $xpath->query("//*[@rdf:about[starts-with(., 'http://schema.org/')]]/rdfs:comment[text()]/..");

    //loop trough each node found
    foreach ($schemaorgClasses as $schemaorgClass)
    {
        //Format as JSON String:
        $result .= '"';
        //JSON key= label (equivalent to schemaorgid) with escaped " character and removed newline/carriage returns
        $result .= preg_replace( "/\r|\n/", "", str_replace('"','\"', $schemaorgClass->getElementsByTagName("label")->item(0)->nodeValue));
        $result .='" : "';
        //JSON value = comment with escaped " character and removed newline/carriage returns
        $result .= preg_replace( "/\r|\n/", "", str_replace('"','\"',$schemaorgClass->getElementsByTagName("comment")->item(0)->nodeValue));
        $result .='", ';
    }

    //Removing last comma
    $result = substr($result, 0, -2);

    $result .="}";

    //Trimming for safety reasons
    echo trim($result);
?>