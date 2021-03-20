<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");


// set via this way , ie in php or .htaccess or index.php,
// else time is stored differently in server 
date_default_timezone_set('Asia/Kolkata');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "maxstyledb";

$request = file_get_contents("php://input");

if($request){


    $data = json_decode($request);

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
    }

    $name = mysqli_escape_string($conn, $data->name);
    $contactNumber = mysqli_escape_string($conn, $data->contactNumber);
    $emailId = mysqli_escape_string($conn,  $data->emailId);
    $projectLocation = mysqli_escape_string($conn, $data->projectLocatio);
    $message = mysqli_escape_string($conn, $data->message);
    $date = date('Y-m-d H:i:s');
    $sql = "INSERT INTO get_estimate (name,contact_number,email_id,project_location,message, created_at)
    VALUES ('$name', '$contactNumber','$emailId', '$projectLocation', '$message', '$date' )";

    if (mysqli_query($conn, $sql)) {

    echo $responseFromBackend = json_encode( array(
        'isEstimateSaved' => true
        ) );

    } else {
        echo $responseFromBackend = json_encode( array(
            'isEstimateSaved' => false
            ) );
        
    }

    mysqli_close($conn);
}
?>