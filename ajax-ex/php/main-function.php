<?php

    header('Content-Type: text/xml');
    echo '<?xml version="1.0" encoding="UTF-8" standalone="yes"';
    
    
    echo '<response>';  // begining of response tag
    
    $inputText = $_GET['inputText'];
    $strlen = strlen($inputText);
    
    echo '<resultText>';
    echo ''.$strlen.'letters left.'; 
    echo '</resultText>';
    
    echo '<strlen>';
    echo $strlen;
    echo '</strlen>';
    
    
    echo '</response>';  // end of response tag
    
?>