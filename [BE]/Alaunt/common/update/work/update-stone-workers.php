<?php
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json');
	include('../../../func.php');
	
	$workers = "";
	$username = "";
	$isValid = "";
	$message = "";
	
	if (isset($_GET['workers'])) {
		$workers = htmlspecialchars($_GET['workers']);
	}
	
	if (isset($_GET['username'])) {
		$username = htmlspecialchars($_GET['username']);
	}

	if((empty($workers))||(empty($username))){
		$message = "Empty fields not allowed";
		$isValid = false;
	}else{
		$con = mysqli_connect("localhost", "root", "", "alaunt");
		$USER = getUser($username);
		$userID = $USER[0];
		
		$workersAt = getWorkersAt($username);
		$stoneWorkers = $workersAt[4];
		$totalFreeWorkers = $USER[11];
		
		// First
		
		$tmpNavbarWorkers = $totalFreeWorkers + $stoneWorkers;
		$tmpstoneWorkers = $workers;
		
		$tmpNavbarWorkers = $tmpNavbarWorkers - $tmpstoneWorkers;
		
		if($tmpNavbarWorkers < 0 ){
			// ne ho messi più di quanti ne abbia
			$isValid = false;
			$message = "You don't have this much workers available";
		} else {
			$q1 = "UPDATE account SET worker = '$tmpNavbarWorkers' WHERE id='$userID'";
			$q2 = "UPDATE workers SET  b_stone = '$tmpstoneWorkers' WHERE userID='$userID'";
			
			if($con->query($q1)) {} else { echo $con->error; }
			if($con->query($q2)) {} else { echo $con->error; }
			
			$isValid = true;
			$message = "ok";
		}		
	}
	
	$res = Array(
		"message" => $message,
		"status" => $isValid
	);

	echo  json_encode($res);
?>