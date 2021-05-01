<?php

include('config/auth.php');
include('config/db_connect.php');

// on coming from another page id is taken from url

$offerId = $_GET['id'];

// if form is submitted then update values and refresh page 

if( isset($_POST['save']) ) {

    $offerTitle = $_POST['offerTitle'];
    $offerDescription = $_POST['offerDescription'];

    //insert query
    $updateQuery = "UPDATE offers SET title='$offerTitle', description='$offerDescription' where id = ".$offerId;

    if( mysqli_query($conn,$updateQuery) ){
        echo "Success db insert";
        header("Refresh:0");
    }else{
        echo "db insert failure";
    }

}


// get value from db and show 

$getOfferQuery = "select * from offers where id =". $offerId;
$resultOfGetOffers = mysqli_query($conn, $getOfferQuery);

if( $resultOfGetOffers ){

    //echo 'success on getting';

    $offerList = mysqli_fetch_all($resultOfGetOffers, MYSQLI_ASSOC);

    mysqli_free_result($resultOfGetOffers);

    mysqli_close($conn);

}else{
    echo "failure on getting";
}

?>

<!DOCTYPE html>
<html>
<head>
<link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossorigin="anonymous"
    />

<link rel="stylesheet" href="css/style.css" />
</head>

<body>

<header>
        <div class="logo-container admin-logo">
        <a href="dashboard.php"><img src="img/ic_company_logo.png" alt="logo" class="logo" /></a>
        </div>

        <a href="logout.php" class="admin-logout"
              ><img class="power_button" src="img/ic_log_out.png" alt="" />
              <span class="cta-number admin-logout-span mt-2">Logout</span>
        </a>
 </header>

<h3 class="headingOffers"> Add Offers </h3>
<!-- todo form validation, check empty and msqli injection -->
<form class="addOfferForm" action="" method="POST" > 
    <input type="text" name="offerTitle" value="<?php echo $offerList[0]['title']; ?>" placeholder="Enter title" required>
    <textarea class="descriptionBox" type="text" name="offerDescription" placeholder="Enter Description"> <?php echo $offerList[0]['description']; ?> </textarea>
    <input class="saveButton" type ="submit" name="save" value="Save">
</form>

</body>

</html>