<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");

include('config/auth.php');
include('config/db_connect.php');

$msg = "";


if( isset($_POST['upload']) ) {

    //var_dump($_FILES);

    $filename = $_FILES['uploadfile']['name'];
    $tempname = $_FILES["uploadfile"]["tmp_name"];
    $folder = $_SERVER['DOCUMENT_ROOT']."/admin/gallery_images/".$filename;


    //echo "<br> document root ". $_SERVER['DOCUMENT_ROOT']; // like it will show till htdocs then we have to put the inner folder names to reach the file

    //insert query
    $insertImageQuery = "insert into gallery_images (filename) values('$filename')";

    if( mysqli_query($conn,$insertImageQuery) ){
        echo "Success db insert";
    }else{
        echo "db insert failure";
    }

    // file upload
    // move_uploaded_file if there is any error at the time of picking the folder it will show error code
    // in array 'error' array inside 'filename' array (the name we gave to input button in html with type button ) array inside $_FILES glabal array variabe
    // if no error check whether read and write permission is there for local host htdocs -> folder name 
    // also note that using $_SERVER['DOCUMENT_ROOT'] will reach you till htdocs 
    // then we have to give corresponding folder names to reach the destination folder

    if( move_uploaded_file($tempname, $folder) ){
        $msg = "image uploaded successfully";

        echo $msg;

        header("Location: dashboard.php");
    }else{
        
        echo $msg;
        
        echo "errorman";
    }
}

?>

<!DOCTYPE html>
<html>
<head>
</head>

<body>

<form action="" method="POST" enctype="multipart/form-data"> 
    <input type=file name="uploadfile">
    <div>
        <button type="submit" name="upload"> UPLOAD </button>
    </div>
</form>

</body>

</html>
