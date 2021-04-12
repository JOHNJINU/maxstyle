<?php 

session_start();

if( !$_SESSION["logged_in"]) {
    header("Location: index.php");

    echo "not loged in from auth";
    exit();
}else{

}

?>