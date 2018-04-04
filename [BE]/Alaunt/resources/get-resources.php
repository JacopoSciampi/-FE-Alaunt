<?php
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json');
	include('../func.php');

	$username = "";
	$food = '';
	$wood = '';
	$stone = '';
	$iron = '';
	$ore = '';
	$please = '';
	$mitril = '';
	$worker = '';
	$navbarRefresh = '';
	
	if (isset($_GET['username'])) {
		$username = htmlspecialchars($_GET['username']);
	}
	
	if(empty($username)){
		$message = "Empty fields not allowed";
		$isValid = false;
	}else{
		$con = mysqli_connect("localhost", "root", "", "alaunt");
		
		// update before fetching
		updateUpdating($username);
		
		$result = $con->query("SELECT * FROM account WHERE username = '$username'");
		$row = mysqli_fetch_array($result,MYSQLI_NUM);
		$id = $row[0];
		
		$res = $con->query("SELECT * FROM const WHERE userID = '$id'");
		$row2 = mysqli_fetch_array($res,MYSQLI_NUM);
		
		$food   = $row[4];
		$wood   = $row[5];
		$stone  = $row[6];
		$iron   = $row[7];
		$ore    = $row[8];
		$mitril = $row[9];
		$please = $row[10];
		$workers = $row[11];
		$points = $row[12];
		
		$isValid = true;
		$message = "ok";
		
		$navbarRefresh = $row2[1];
	}



$res = Array(
	"message" => $message,
	"status" => $isValid,
	"food" => $food,
	"wood" => $wood,
	"stone" => $stone,
	"iron" => $iron,
	"ore" => $ore,
	"please" => $please,
	"mitril" => $mitril,
	"workers" => $workers,
	"points" => $points,
	"refresh" => $navbarRefresh
);

echo  json_encode($res);

?>