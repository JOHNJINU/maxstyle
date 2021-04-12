<?php 

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");

$arrayOfImageNames = array();

$files = glob("gallery_images/*.*");

for ($i = 0; $i < count($files); $i++) {
    $image = $files[$i];
    array_push( $arrayOfImageNames, basename($image) );
}

echo $resultOfArrayImages = json_encode($arrayOfImageNames);

?>