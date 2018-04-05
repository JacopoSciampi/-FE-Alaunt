<?php
include('../func.php');

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$username = "";
$password = "";
$email = "";

$message = "Backend error";
$isValid = false;

$row_cnt_email = 0;
$row_cnt_username = 0;

$wood = 10000;
$food = 10000;
$stone = 10000;
$iron = 5000;
$ore = 5000;
$please = 0;
$mitril = 0;
$worker = 10;
$points = 0;
$guildID = '';

$canGoOn = true;

if (isset($_GET['username'])) {
    $username = htmlspecialchars($_GET['username']);
}
if (isset($_GET['email'])) {
    $email = htmlspecialchars($_GET['email']);
}
if (isset($_GET['password'])) {
    $password = htmlspecialchars($_GET['password']);
}

if((empty($username))||(empty($password))||(empty($email))){
	$message = "Empty fields not allowed";
	$isValid = false;
}else{
	if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
		$username = validate($username);
		$password = validate($password);
		$email = validate($email);
		$con = mysqli_connect("localhost", "root", "", "alaunt");
		$result = $con->query("SELECT * FROM account WHERE username = '$username'");
		$row_cnt_username = $result->num_rows;
		$result = $con->query("SELECT * FROM account WHERE email='$email'");
		$row_cnt_email = $result->num_rows;
		
			if($row_cnt_username >= 1){
				$message = "Username not available";
				$isValid = false;
				$canGoOn = false;
			}
			if($row_cnt_email >= 1){
				$message = "Email not available";
				$isValid = false;
				$canGoOn = false;
			}
			if(strlen($username) > 15) {
				$message = "Username too long";
				$isValid = false;
				$canGoOn = false;
			}
			
			if(strlen($username) < 3) {
				$message = "Username too short";
				$isValid = false;
				$canGoOn = false;
			}
			
			if($canGoOn == true){
				$password = sha1($password);
				$tm = time();
				if($con->query("INSERT INTO account (id, username, password, email, food, wood, stone, iron, ore, mitril, please, worker, points, guildID, lastCheck) VALUES (null,'$username','$password','$email','$food','$wood','$stone','$iron','$ore','$mitril', '$please', '$worker', '$points', '$guildID', '$tm')")){
					$message = "Internal error!";
					$isValid = false;
					
					$id = $con->insert_id;
					if($con->query("INSERT INTO const (userID, navbarRefresh, pageAfterLogin, theme) VALUES ($id,'30','home','default')")){
						if($con->query("INSERT INTO buildlevel (userID, bMain, bHome, bFood, bWood, bStone, bIron, bOre, bMitril) VALUES ($id,1,0,0,0,0,0,0,0)")){
							$message = "User created successfully!";
							$isValid = true;			
						}
					}
					
				}else{
					$message = "Internal error!";
					$isValid = false;
				}
			}
	}else{
		$message = "Please, provide a valid mail";
		$isValid = false;
	}
}

$res = Array(
"message" => $message,
"status" => $isValid,
);
echo  json_encode($res);

?>