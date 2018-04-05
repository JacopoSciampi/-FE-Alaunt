<?php
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json');
	include('../../func.php');
	
	$username = "";
	$isValid = false;
	$message = "no init";
	$main = "";
	
	if (isset($_GET['username'])) {
		$username = htmlspecialchars($_GET['username']);
	}
	
	if($username == ""){
		$message = "Invalid input from http header";
	} else {
		$con = mysqli_connect("localhost", "root", "", "alaunt");
		$USER = getUser($username);
		$userID = $USER[0];
		
		$result3 = $con->query("SELECT * FROM buildlevel WHERE userID = '$userID'");
		$BUILDLEVEL = mysqli_fetch_array($result3,MYSQLI_NUM);
		
		$main = $BUILDLEVEL[1];
		$isValid = true;
		$message = "ok";
	}
	
	$res = Array(
		"level" => $main,
		"status" => $isValid,
		"message" => $message
	);

	echo  json_encode($res);

?>