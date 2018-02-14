<?php 
$dirPath = dir('../xml');
$xmlArray = array();
while (($file = $dirPath->read()) !== false)
{
    if($file != "." and $file != "..")
    {
        $xmlArray[ ] = trim($file);
    }
}
$dirPath->close();
sort($xmlArray);
$c = count($xmlArray);
for($i=0; $i<$c; $i++)
{
    if($i==$c-1)
    {
        echo "/xml/" . $xmlArray[$i];
    }else
    {
        echo "/xml/" . $xmlArray[$i] . "\n";
    } 
}
?>