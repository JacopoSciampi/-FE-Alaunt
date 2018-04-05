<?php
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json');
	include('../../func.php');
	
	$username = "";
	$level = "";
	$isValid = false;
	$message = "";
	
	$timeToUpdate ="";
	$woodCost = "";
	$stoneCost = "";
	$ironCost = "";
	$oreCost = "";
	$points = "";
	$armyLimit = "";
	$cArmyLimit = "";
	$mainLevelToUpdate = "";
	
	if (isset($_GET['username'])) {
		$username = htmlspecialchars($_GET['username']);
	}
	
	
	if (isset($_GET['level'])) {
		$level = htmlspecialchars($_GET['level']);
	}
	
	if(($level < 0) || ($username == "")){
		$message = "Invalid input from http header";
	} else {
		$con = mysqli_connect("localhost", "root", "", "alaunt");
		$USER = getUser($username);
		$userID = $USER[0];
		$nextLevel  = $level + 1;
		
		$result3 = $con->query("SELECT * FROM buildlevel WHERE userID = '$userID'");
		$BUILDLEVEL = mysqli_fetch_array($result3,MYSQLI_NUM);
		
		$currentAccademyLevel = $BUILDLEVEL[9];
		
		$result3 = $con->query("SELECT * FROM accademy WHERE level = '$nextLevel'");
		$nextAccademyInfo = mysqli_fetch_array($result3,MYSQLI_NUM);
		
		$timeToUpdate = $nextAccademyInfo[1];
		$woodCost =  $nextAccademyInfo[2];
		$stoneCost =  $nextAccademyInfo[3];
		$ironCost =  $nextAccademyInfo[4];
		$oreCost =  $nextAccademyInfo[5];
		$points =  $nextAccademyInfo[6];
		$armyLimit =  $nextAccademyInfo[7];
		$cArmyLimit =  $nextAccademyInfo[8];
		$mainLevelToUpdate =  $nextAccademyInfo[9];
		
		$isValid = true;
		$message = "ok";
	}
	
	$res = Array(
		"level" => $level,
		"timeToUpdate" => $timeToUpdate ,
		"woodCost" => $woodCost,
		"stoneCost" => $stoneCost,
		"ironCost" => $ironCost,
		"oreCost" => $oreCost ,
		"points" => $points ,
		"armyLimit" => $armyLimit,
		"status" => $isValid,
		"message" => $message,
		"currentArmyLimit" => $cArmyLimit,
		"mainLevelToUpdate" => $mainLevelToUpdate
	);

	echo  json_encode($res);
?>