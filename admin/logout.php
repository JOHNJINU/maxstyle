<?php

session_start();
session_destroy();


//redirect user to home page
header('Location: index.php');
?>