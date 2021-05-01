<?php 

include('config/auth.php');
include('config/db_connect.php');

$input = json_decode(file_get_contents('php://input'), true);
 // $input['key'] would equal "value"
 // only one echo from  a php file, else javascript cant read it, since it is 
 // looking for  a json object

 

 $deleteOfferUsingIdQuery = "DELETE FROM offers where id =". $input['deleteOfferId'];

$resultofQuery = mysqli_query($conn, $deleteOfferUsingIdQuery);
if ($resultofQuery) {
    
    echo $responseFromBackend = json_encode( array(
                    'magic' => "deleted succesfully"
                    ) );
  } else {
    echo $responseFromBackend = json_encode( array(
        'magic' => "error deleting"
        ) );
  }



?>