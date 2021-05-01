<?php

include('config/auth.php');
include('config/db_connect.php');

if( isset($_POST['save']) ) {

    $offerTitle = $_POST['offerTitle'];
    $offerDescription = $_POST['offerDescription'];

    echo "entered value is ".$offerTitle.$offerDescription;

    //insert query
    $insertQuery = "insert into offers (title, description, visibility_status) values('$offerTitle','$offerDescription','hide')";


    echo "entered query is ".$insertQuery;

    if( mysqli_query($conn,$insertQuery) ){
        echo "Success db insert";
        header("Refresh:0");
    }else{
        echo "db insert failure";
    }

}

// get all offers from offers table

$getAllOffersQuery = "select * from offers order by id DESC";
$resultOfGetOffers = mysqli_query($conn, $getAllOffersQuery);

if( $resultOfGetOffers ){

    //echo 'success on getting';

    $offerList = mysqli_fetch_all($resultOfGetOffers, MYSQLI_ASSOC);

    //var_dump($offerList);

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
    <input type="text" name="offerTitle" placeholder="Enter title" required>
    <textarea class="descriptionBox" type="text" name="offerDescription" placeholder="Enter Description"></textarea>
    <input class="saveButton" type ="submit" name="save" value="Save">
</form>

<h3 class="headingOffers">Offers List</h3>

<div class="table-responsive fix-table-height">
<table id="mytable" class="table_offers table ">

    <col style="width:70%">
	<col style="width:15%">
	<col style="width:15%">

<thead class="thead-dark">
    <tr>
    <th> Title </th>
    <th> Status </th>
    <th> Actions </th>
    </tr>
</thead>

<tbody>

<?php foreach($offerList as $offer): ?>
<tr>
    <td> <div class="row_height_limiter"> <?php echo $offer['title']; ?> </div> </td>
    <!-- <td>  <div class="row_height_limiter"> <?php echo $offer['description']; ?> </div> </td> -->
    
    <td> 
    <!-- <?php echo $offer['visibility_status']; ?>  -->
    
    <div class="visibility_switch_container">
        <label class="publish_status"> hide </label>
        <input class="visibility-switch" type="checkbox"
        name="visibility-box" value=" <?php echo $offer['id']; ?> " 
        <?php if($offer['visibility_status'] == "hide"){
            echo "";
        }else{
            echo "checked";
        } ?>
        >
        <label class="publish_status"> show </label>
    </div>
   </td>

   <td>
   <div class="edit_delete_container">
        <a href="editOffers.php?id=<?php echo $offer['id']; ?>"><img src="img/edit.png"></a><img class="delete_icon" src="img/delete.png" id="<?php echo $offer['id']; ?>" >
    </div>
    </td>

</tr>
<?php endforeach; ?>

</tbody>

</table>
    </div>

<script src="js/main.js"></script>



</body>

</html>
