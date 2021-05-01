<?php

include('config/auth.php');
include('config/db_connect.php');

$estimateListSql = "SELECT * FROM get_estimate"; 
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
          <img src="img/ic_company_logo.png" alt="logo" class="logo" />
        </div>

        <a href="logout.php" class="admin-logout"
              ><img class="power_button" src="img/ic_log_out.png" alt="" />
              <span class="cta-number admin-logout-span mt-2">Logout</span>
        </a>
 </header>

 <div class="container">

    <h3 class="mt-3 mb-3"> Dashboard </h3>
    <div class="dashboard_items">
        <a href="estimateList.php" class="cta admin-cta mx-auto mt-4 text-left"
                ><img src="img/ic_estimate.png" alt="" />
                <span class="cta-number">Estimate List </span>
        </a>

        <a href="enquiryList.php" class="cta admin-cta mx-auto mt-4 text-left"
                ><img src="img/ic_enquiry.png" alt="" />
                <span class="cta-number">Enquiry works</span>
        </a>

        <a href="uploadImage.php" class="cta admin-cta mx-auto mt-4 text-left"
                ><img src="img/ic_upload.png" alt="" />
                <span class="cta-number">Upload Images </span>
        </a>

        <a href="addLatestOffers.php" class="cta admin-cta mx-auto mt-4 text-left"
                ><img src="img/ic_upload.png" alt="" />
                <span class="cta-number">Add Latest Offers </span>
        </a>
    </div>

 </div>

</body>
</html>