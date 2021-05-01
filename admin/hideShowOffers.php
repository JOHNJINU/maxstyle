<?php 

include('config/auth.php');
include('config/db_connect.php');

$input = json_decode(file_get_contents('php://input'), true);
 // $input['key'] would equal "value"
 // only one echo from  a php file, else javascript cant read it, since it is 
 // looking for  a json object

$getOfferUsingIdQuery = "UPDATE offers SET visibility_status= '{$input['toggleValue']}' where id =". $input['offerCheckboxValue'];

$resultofQuery = mysqli_query($conn, $getOfferUsingIdQuery);
if ($resultofQuery) {
    
    echo $responseFromBackend = json_encode( array(
                    'magic' => "Updated Visibility"
                    ) );
  } else {
    echo $responseFromBackend = json_encode( array(
        'magic' => "error updating visibility"
        ) );
  }


?>