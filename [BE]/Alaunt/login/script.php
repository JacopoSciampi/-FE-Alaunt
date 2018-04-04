<?php
include('../func.php');
include('../validation.php');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$username = "";
$password = "";
$token = "";

$message = "Backend error";
$isValid = false;

$canGoOn = false;

if (isset($_GET['username'])) {
    $username = htmlspecialchars($_GET['username']);
}
if (isset($_GET['password'])) {
    $password = htmlspecialchars($_GET['password']);
}

if((empty($username))||(empty($password))){
	$message = "Empty fields not allowed";
	$isValid = false;
}else{
		$username = validate($username);
		$password = validate($password);
		$password = sha1($password);
		$con = mysqli_connect("localhost", "root", "", "alaunt");
		$result = $con->query("SELECT * FROM account WHERE username = '$username' AND password='$password'");
		$row_cnt_username = $result->num_rows;
		
		if($row_cnt_username == 1){
			$canGoOn = true;
		}
			
		if($canGoOn == true){
			//if query update else error be
			$message = 'OK';
			$isValid = true;
			$path = 'home'; // CHANGE THIS WHEN DEFAULT CONST IS UP
		}else{
			$message = 'Username/Password incorrect';
			$isValid = false;
			$username = '';
			$token = '';
			$path = '';
		}
}

$res = Array(
"message" => $message,
"status" => $isValid,
"username" => $username,
"path" => $path
);
echo  json_encode($res);

?>