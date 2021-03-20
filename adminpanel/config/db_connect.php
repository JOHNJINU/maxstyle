<?php 

    $conn = mysqli_connect('localhost','root','','maxstyledb');

    if(!$conn){
        echo 'connection error'.mysql_connect_error();
    }

?>