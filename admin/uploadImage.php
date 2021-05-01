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

    // here is the current date time timestamp
		$time = date("d-m-Y")."-".time();
        $ext = end((explode(".", $filename))); # extra () to prevent notice

    $tempname = $_FILES["uploadfile"]["tmp_name"];
    $folder = $_SERVER['DOCUMENT_ROOT']."/admin/gallery_images/".$time.".".$ext;

    

    echo "<br>";
    //echo "<br> document root ". $_SERVER['DOCUMENT_ROOT']; // like it will show till htdocs then we have to put the inner folder names to reach the file

    //insert query
    $insertImageQuery = "insert into gallery_images (filename) values('$time.$ext')";

    echo $insertImageQuery;
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

        header("Refresh:0");
    }else{
        
        echo $msg;
        
        echo "errorman";
    }
}

// get all images from offers table

$getAllOffersQuery = "select * from gallery_images order by id DESC";
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

<div class=container>

<form action="" method="POST" enctype="multipart/form-data"> 
    <input class="mt-3" type=file name="uploadfile">
    <div class="mt-3">
        <button type="submit" name="upload"> UPLOAD </button>
    </div>
</form>

</div>


<h3 class="headingOffers">Offers List</h3>

<div class="table-responsive fix-table-height">
<table id="mytable" class="table_offers table ">

    <col style="width:80%">
	<col style="width:20%">

<thead class="thead-dark">
    <tr>
    <th> Title </th>
    <th class="text-center"> Actions </th>
    </tr>
</thead>

<tbody>

<?php foreach($offerList as $offer): ?>
<tr>
    <td> 
        <img class="gallery_image_thumbnail" src="gallery_images/<?php echo $offer['filename']; ?>" >
    </td>
   <td>
   <div class="edit_delete_container text-center">
        <img class="delete_icon" src="img/delete.png" id="<?php echo $offer['id']; ?>" >
    </div>
    </td>

</tr>
<?php endforeach; ?>

</tbody>

</table>
    </div>


</body>

</html>
