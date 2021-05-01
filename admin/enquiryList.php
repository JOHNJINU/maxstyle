<?php
 include('config/auth.php');
include('config/db_connect.php');


$estimateListSql = "SELECT * FROM customer_enquiries ORDER BY created_at DESC"; 
$resultEstimateListSql = mysqli_query($conn, $estimateListSql);
$estimate_list = mysqli_fetch_all($resultEstimateListSql, MYSQLI_ASSOC);

mysqli_free_result($resultEstimateListSql);
mysqli_close($conn);

?>

<!DOCTYPE html>
<html lang="en">
<head> 

<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
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

 <div class="container">

    <h3 class="mt-3 mb-3"> Enquiry List ( time is in IST )  </h3>

    <?php if( empty($estimate_list) ): ?>
        <p class="mt-5">No estimate items</p>
    <?php endif; ?>

    <?php foreach ($estimate_list as $estList) : ?>
        <div class="team card bg-light mb-3">
            <div class="card-header">
                <p> <?php echo $estList['name']; ?> </p>
            </div>
            <div class="card-body p-sm-3">
                <p class="card-text text-left"><?php echo $estList['email_id']; ?><br><?php echo $estList['contact_number']; ?><br><?php echo $estList['project_location']; ?><br><?php echo $estList['message']; ?></p>
                <?php 
                    $unixTimestamp = strtotime( $estList['created_at'] );
                ?>
                <img src="img/ic_calendar.png" class="icon-booking-list" > <?php echo date("d-m-Y", $unixTimestamp);?>
                <img src="img/ic_clock.png" class="icon-booking-list ml-3"> <?php echo date("h:i:s A", $unixTimestamp);?>
            </div>  
        </div>
    <?php endforeach; ?>

 </div>

</body>
</html>