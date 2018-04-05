<?php
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json');
	include('../../func.php');

	$username  = "";
	$message   = "";
	$isValid   = "";
	$name      = "";
	$timeStart = "";
	$timeEnd   = "";
	$timeTotal = "";
	
	if (isset($_GET['username'])) {
		$username = htmlspecialchars($_GET['username']);
	}
	
	if(empty($username)){
		$message = "Empty fields not allowed";
		$isValid = false;
	}else{
		$con = mysqli_connect("localhost", "root", "", "alaunt");
		$USER = getUser($username);
		$userID = $USER[0];
		update($username);
		updateUserTime($username); // Lo fa dopo così prima aggiorna le risorse, poi setta il tempo a "new"
		
		$result = $con->query("SELECT * FROM updating WHERE userID = '$userID' AND tstart > 0");
		$row_cnt = $result->num_rows;
		
		if($row_cnt >= 1){
			$row = mysqli_fetch_array($result,MYSQLI_NUM);
			
			$timeStart = $row[2];
			$timeEnd = $row[3];
			$isValid = true;
			$message = "yes";
			$name = $row[1];
			$timeTotal = $row[7];
		} else {
			$isValid = true;
			$message = "no";
		}
	}
	
	$res = Array(
		"message" => $message,
		"isValid" => $isValid,
		"timeStart" => $timeStart,
		"timeEnd" => $timeEnd,
		"name" => $name, 
		"timeTotal" => $timeTotal
	);

	echo  json_encode($res);
?>