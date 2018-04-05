<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
include('../func.php');

$username = "";
$bMain = '';
$bHome = '';
$bFood = '';
$bWood = '';
$bStone = '';
$bIron = '';
$bOre = '';
$bMitril = '';
$lvAccademy = '';

$isValid = '';
$message = '';

if (isset($_GET['username'])) {
    $username = htmlspecialchars($_GET['username']);
}


if(empty($username)){
	$message = "Empty username";
	$isValid = false;
}else{
	$id = getUserID($username);
	if(is_numeric($id)){
		$con = mysqli_connect("localhost", "root", "", "alaunt");
		$result = $con->query("SELECT * FROM buildlevel WHERE userID = '$id'");
		$row = mysqli_fetch_array($result,MYSQLI_NUM);
		
		$bMain   = $row[1];
		$bHome   = $row[2];
		$bFood   = $row[3];
		$bWood   = $row[4];
		$bStone  = $row[5];
		$bIron   = $row[6];
		$bOre    = $row[7];
		$bMitril = $row[8];
		$lvAccademy = $row[9];
		
		$isValid = true;
		$message = "ok";	
	} else {
		$isValid = false;
		$message = "No user found";
	}
}


$res = Array(
"lvMain" => $bMain,
"lvHome" => $bHome,
"lvFood" => $bFood,
"lvWood" => $bWood,
"lvStone" => $bStone,
"lvIron" => $bIron,
"lvOre" => $bOre,
"lvMitril" => $bMitril,
"lvAccademy" => $lvAccademy,
"message" => $message,
"status" => $isValid
);

echo  json_encode($res);
?>
