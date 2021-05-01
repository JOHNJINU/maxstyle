<?php


header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");

include('auth.php');
include('config/db_connect.php');


$offerListSql = "SELECT * FROM offers where visibility_status ='show' ORDER BY id DESC"; 
$resultOfferListSql = mysqli_query($conn, $offerListSql);
$offer_list = mysqli_fetch_all($resultOfferListSql, MYSQLI_ASSOC);

mysqli_free_result($resultOfferListSql);
mysqli_close($conn);

echo json_encode($offer_list);

?>