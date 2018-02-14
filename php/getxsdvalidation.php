<?php
if ($_GET['xml']!="") {
    function libxml_display_error($error) 
    { 
        $return = "<br/>\n"; 
        switch ($error->level) 
        { 
            case LIBXML_ERR_WARNING: 
                $return .= "<br/><b>SCHEMA WARNING $error->code</b>: "; 
                break; 
            case LIBXML_ERR_ERROR: 
                $return .= "<br/><b>SCHEMA ERROR $error->code</b>: "; 
                break; 
            case LIBXML_ERR_FATAL: 
                $return .= "<br/><b>FATAL SCHEMA ERROR $error->code</b>: "; 
                break; 
        } 
        $return .= trim($error->message); 
        if ($error->file) 
        { 
            $return .= " in <b>$error->file</b>"; 
        } 
        $return .= " on line <b>$error->line</b>\n"; 
        
        return $return; 
    } 

    function libxml_display_errors() 
    { 
        $errors = libxml_get_errors(); 
        foreach ($errors as $error) 
        { 
            print libxml_display_error($error); 
        } 
        libxml_clear_errors(); 
    } 
    
    // Enable user error handling 
    libxml_use_internal_errors(true); 
    
    $xml = new DOMDocument(); 
    $xml->load('../xmltovalidate/'.$_GET['xml']); 
    
    if (!$xml->schemaValidate('../xsd/'.$_GET['xsd'])) 
    { 
        print '<b>Schema Errors Found:</b>'; 
        libxml_display_errors(); 
    } else {
        $errors = ""; 
        $xpath = new DOMXPath($xml);

        //Validate displayLabelButNoLabelValue
        $elementsNoLabelButDisplay = $xpath->query("//*[@displaylabel='true' and ((not(@labelde) or @labelde='') or (not(@labelfr) or @labelfr='') or (not(@labelen) or @labelen='') or (not(@labelit)or @labelit=''))]");
        
        if($elementsNoLabelButDisplay->length>0)
        {
            $errors .="<b>"."LOGIC ERROR [displayLabelButNoLabelValue]: </b><br/>Any element with attribute [displaylabel='true'] requires the attributes [labelde],[labelfr],[labelit],[labelen] to be defined too.";
            foreach ($elementsNoLabelButDisplay as $elementNoLabelButDisplay)
            {
                $errors .="<br/>&nbsp;<b>+</b>&ensp;";
                $errors .="See [".$elementNoLabelButDisplay->nodeName."] on line <b>".($elementNoLabelButDisplay->getLineNo()-1)."</b>.";
            }
            $errors .="<br/>";
            $errors .="<br/>";
        }

        //Validate requiredElementWithRequiredDescendants
        $elementsReqNoReqDesc = $xpath->query("//node[@required='true' and not (descendant::*[@required='true'])]");
        
        if($elementsReqNoReqDesc->length>0)
        {
            $errors .="<b>"."LOGIC ERROR [requiredElementWithNoRequiredDescendants]: </b><br/>Any [node] with attribute [required='true'] must have at least one descendant with attribute [required='true'] as well.";
            foreach ($elementsReqNoReqDesc as $elementReqNoReqDesc)
            {   
                $errors .="<br/>&nbsp;<b>+</b>&ensp;";
                $errors .="See [".$elementReqNoReqDesc->nodeName."] on line <b>".($elementReqNoReqDesc->getLineNo()-1)."</b>.";
            }
            $errors .="<br/>";
            $errors .="<br/>";
        }

        //Validate parentOfMultipleWithNoChild
        $elementsParentOfMultipleWithNoChild = $xpath->query("//node[@multiplechildren='true' and not(child::nodeelem)]");
        
        if($elementsParentOfMultipleWithNoChild->length>0)
        {
            $errors .="<b>"."LOGIC ERROR [parentOfMultipleWithNoChild]: </b><br/>Any [node] with attribute [multiplechildren='true'] must have at least one child of type [nodeelem].";
            foreach ($elementsParentOfMultipleWithNoChild as $elementParentOfMultipleWithNoChild)
            {   
                $errors .="<br/>&nbsp;<b>+</b>&ensp;";
                $errors .="See [".$elementParentOfMultipleWithNoChild->nodeName."] on line <b>".($elementParentOfMultipleWithNoChild->getLineNo()-1)."</b>.";
            }
            $errors .="<br/>";
            $errors .="<br/>";
        }

        //Validate childOfMultipleElementsWithNoParent
        $elementsChildOfMultipleElementsWithNoParent = $xpath->query("//nodeelem[not(parent::node[@multiplechildren='true'])]");
        
        if($elementsChildOfMultipleElementsWithNoParent->length>0)
        {
            $errors .="<b>"."LOGIC ERROR [childOfMultipleElementsWithNoParent]: </b><br/>Any [nodeelem] must belong to a parent [node] with attribute [multiplechildren='true']";
            foreach ($elementsChildOfMultipleElementsWithNoParent as $elementChildOfMultipleElementsWithNoParent)
            {   
                $errors .="<br/>&nbsp;<b>+</b>&ensp;";
                $errors .="See [".$elementChildOfMultipleElementsWithNoParent->nodeName."] on line <b>".($elementChildOfMultipleElementsWithNoParent->getLineNo()-1)."</b>.";
            }
            $errors .="<br/>";
            $errors .="<br/>";
        }

        //Validate multipleIdsPerElement
        $elementsMultipleIdsPerElement = $xpath->query("//*[count(child::input[@nodeid='@id'])>1]");
        
        if($elementsMultipleIdsPerElement->length>0)
        {
            $errors .="<b>"."LOGIC ERROR [multipleIdsPerElement]: </b><br/>The same [node] or [nodeelem] cannot have more than one child [input] with attribute [nodeid='@id'].";
            foreach ($elementsMultipleIdsPerElement as $elementMultipleIdsPerElement)
            {   
                $errors .="<br/>&nbsp;<b>+</b>&ensp;";
                $errors .="See [".$elementMultipleIdsPerElement->nodeName."] on line <b>".($elementMultipleIdsPerElement->getLineNo()-1)."</b>.";
            }
            $errors .="<br/>";
            $errors .="<br/>";
        }

        //Validate multipleTypesPerElement
        $elementsMultipleTypesPerElement = $xpath->query("//*[count(child::input[@nodeid='@type'])>1]");
        
        if($elementsMultipleTypesPerElement->length>0)
        {
            $errors .="<b>"."LOGIC ERROR [multipleTypesPerElement]: </b><br/>The same [node] or [nodeelem] cannot have more than one child [input] with attribute [nodeid='@type'].";
            foreach ($elementsMultipleTypesPerElement as $elementMultipleTypesPerElement)
            {   
                $errors .="<br/>&nbsp;<b>+</b>&ensp;";
                $errors .="See [".$elementMultipleTypesPerElement->nodeName."] on line <b>".($elementMultipleTypesPerElement->getLineNo()-1)."</b>.";
            }
            $errors .="<br/>";
            $errors .="<br/>";
        }

        // Validate elementsNotEditableWithNoValue
        $elementsNotEditableWithNoValue = $xpath->query("//input[((@edit='false') or (not(@edit))) and ((@value='') or (not(@value)))]");
        
        if($elementsNotEditableWithNoValue->length>0)
        {
            $errors .="<b>"."LOGIC ERROR [elementsNotEditableWithNoValue]: </b><br/>Any [input] element with attribute [edit='false'] requires the attribute [value] to be defined too.";
            foreach ($elementsNotEditableWithNoValue as $elementNotEditableWithNoValue)
            {   
                $errors .="<br/>&nbsp;<b>+</b>&ensp;";
                $errors .="See [".$elementNotEditableWithNoValue->nodeName."] on line <b>".($elementNotEditableWithNoValue->getLineNo()-1)."</b>.";
            }
            $errors .="<br/>";
            $errors .="<br/>";
        }

       if($errors !="")
       {
           print '<b>Logic Errors Found:</b><br/><br/>'; 
           echo $errors;
       } else 
       {
           $warningsAndInfos = "NOCRIT"; 
           $xpath = new DOMXPath($xml);

           //Validate nodeWithoutTypeAttribute
           $nodesWithoutTypeAttribute = $xpath->query("//node[not(child::input[@nodeid='@type'])]/input/..");
           
           if($nodesWithoutTypeAttribute->length>0)
           {
               $warningsAndInfos .="<b>Warning: </b>"."Usually each [node] should have a child [input] with attribute [nodeId='@type']. However, this is not mandatory.";
               foreach ($nodesWithoutTypeAttribute as $nodeWithoutTypeAttribute)
               {   
                   $warningsAndInfos .="<br/>&nbsp;<b>+</b>&ensp;";
                   $warningsAndInfos .="See [".$nodeWithoutTypeAttribute->nodeName."] on line <b>".($nodeWithoutTypeAttribute->getLineNo()-1)."</b>.";
               }
               $warningsAndInfos .="<br/>";
               $warningsAndInfos .="<br/>";
           }

            //Validate nodeElemWithoutTypeAttribute
            $nodeElemsWithoutTypeAttribute = $xpath->query("//nodeelem[not(child::input[@nodeid='@type'])]/input/..");
            
            if($nodeElemsWithoutTypeAttribute->length>0)
            {
                $warningsAndInfos .="<b>Warning: </b>"."Usually each [nodeelem] should have a child [input] with attribute [nodeId='@type']. However, this is not mandatory.";
                foreach ($nodeElemsWithoutTypeAttribute as $nodeElemWithoutTypeAttribute)
                {   
                    $warningsAndInfos .="<br/>&nbsp;<b>+</b>&ensp;";
                    $warningsAndInfos .="See [".$nodeElemWithoutTypeAttribute->nodeName."] on line <b>".($nodeElemWithoutTypeAttribute->getLineNo()-1)."</b>.";
                }
                $warningsAndInfos .="<br/>";
                $warningsAndInfos .="<br/>";
            }
 
            //Validate nodeWithoutTypeAttribute
            $nodesWithoutIdAttribute = $xpath->query("//node[not(child::input[@nodeid='@id'])]/input/..");
            
            if($nodesWithoutIdAttribute->length>0)
            {
                $warningsAndInfos .="<b>Info: </b>"."Following [node] elements have no child [input] with attribute [nodeId='@id']. Try to set URI whenever possible.";
                foreach ($nodesWithoutIdAttribute as $nodeWithoutIdAttribute)
                {   
                    $warningsAndInfos .="<br/>&nbsp;<b>+</b>&ensp;";
                    $warningsAndInfos .="See [".$nodeWithoutIdAttribute->nodeName."] on line <b>".($nodeWithoutIdAttribute->getLineNo()-1)."</b>.";
                }
                $warningsAndInfos .="<br/>";
                $warningsAndInfos .="<br/>";
            }

            if($warningsAndInfos != "NOCRIT"){
                $warningsAndInfos.="<br/>All messages above are <b>not critical</b>, you can publish the XML file by clicking on the button below.";
                echo $warningsAndInfos;
            } else {
                echo "OK";
            } 
       }
        
    }
} else {
    echo "NOFILE";
}
?>