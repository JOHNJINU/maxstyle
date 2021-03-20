<?php 


include('config/db_connect.php');

session_start();

$userName = "";
$password = "";

$userNameError = false;
$userNameErrorMessage = "";

$passwordError = false;
$passwordErrorMessage = "";

if( isset($_POST['submit']) ){


    if( empty($_POST['username']) ){
        $userNameError = true;
        $usernameErrorMessage = "<p>Please enter user name</p>";
    }else{
        $userName = filter_var($_POST['username'], FILTER_SANITIZE_STRING);        
    }

    if( empty($_POST['password']) ){
        $passwordError = true;
        $passwordErrorMessage = "<p>Please enter password</p>";
    }else{
        $password = filter_var($_POST['password'], FILTER_SANITIZE_STRING);
    }

    // Check with db if values are correct

    if(!$userNameError && !$passwordError){

      echo "inside success field check ";

        $query = "select * from admin_login where user_name = '$userName' AND password = '$password' ";
        $resultLoginSql = mysqli_query($conn, $query);
        $count = mysqli_num_rows($resultLoginSql);

        if( $count == 1){
          echo "inside success row sql ";
            // user looged in flag
            $_SESSION['logged_in'] = true;

            // display name in dashboard
            $_SESSION['userName'] = $userName;

            echo $_SESSION['logged_in'];

            header("location:dashboard.php");

        }else{
            echo "login failure";
        }

    }

} // isset submit ends

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

    <link rel="stylesheet" href="css/style.css"/>
</head>
<body>

<div class="login-form-container bg-light p-3">

<h3 class="text-center w-50 mx-auto mt-5">Admin Login</h3>

<div class="booking-popup mx-auto mt-5">

    <form action="index.php" method="POST">
          <div class="input-field">
            <input
              id="admin_user_name"
              type="text"
              name="username"
              value="<?php echo htmlspecialchars($userName); ?>"
              placeholder="Enter username"
            />
          </div>
          <div id="user-name-error-container" class="red-text">
              <?php if($userNameError) {
                  echo $userNameErrorMessage;
               } ?>
          </div>
          <div class="input-field">
            <input
              id="admin_password"
              type="password"
              name="password"
              value="<?php echo htmlspecialchars($password); ?>"
              placeholder="Enter password"
            />
          </div>
          <div id="password-error-container"  class="red-text"> <?php if($passwordError) {
            echo $passwordErrorMessage;
            } ?></div>
          <input type="submit" name="submit" value="Login" class="book-button" />
          
        </form>

</div>

</div>

</body>
</html>

