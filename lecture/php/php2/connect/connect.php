<?php
    $host = "localhost";
    $user = "byahram";
    $pw = "Dkfkarla2ek!";
    $dbName = "byahram";
    $connect = new mysqli($host, $user, $pw, $dbName);
    $connect -> set_charset("utf8");
    if(mysqli_connect_errno()){
        echo "database connect false";
    } else {
        // echo "database connect true";
    }
?>
