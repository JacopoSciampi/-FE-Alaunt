<?php
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json');
	include('../../func.php');
	
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
		
		$result = $con->query("SELECT * FROM updating WHERE userID = '$userID' AND tstart > 0");
		$row_cnt = $result->num_rows;
		
		if($row_cnt >= 1){
			$message = "An update is already working";
			$isValid = false;
		}else {
			// Get next level
			$result3 = $con->query("SELECT * FROM buildlevel WHERE userID = '$userID'");
			$BUILDLEVEL = mysqli_fetch_array($result3,MYSQLI_NUM);
		
			$lvStone = $BUILDLEVEL[5];
			$lvStone = $lvStone + 1;
			
			// Get spec for next level
			$r1 = $con->query("SELECT * FROM b_stone WHERE level = '$lvStone'");
			$HOME = mysqli_fetch_array($r1,MYSQLI_NUM);
			
			$timeToUpdate = $HOME[2];
			$woodCost = $HOME[3];
			$stoneCost = $HOME[4];
			$points = $HOME[7];
			
			$mineWood  = $USER[5];
			$mineStone = $USER[6];
			$mineWorkers = $USER[11];
			
			if($workers <= 0) { 
				$workers = 1;
				$newWorkers = 1;
			}
			
			if($mineWorkers >= $workers){
				//Ne ho 10 e ne assegno 5 IE
				$newWorkers = $mineWorkers - $workers;
			} else {
				$newWorkers = 0;
				$workers = $mineWorkers;
			}
			
			if(($mineWood >= $woodCost) && ($mineStone >= $stoneCost)){
				//account update
				$newWood = $mineWood - $woodCost;
				$newStone = $mineStone - $stoneCost;
				
				//updating update
				$timeStart = time();
				$timeEnd = $timeStart + (($timeToUpdate / $workers) * 60 );
				$diffTime = $timeEnd - $timeStart;
				$name = "b_stone";
				
				$userUP = "UPDATE account SET wood='$newWood', stone='$newStone', worker='$newWorkers' WHERE id='$userID'";
				
				$updatingUP = "UPDATE updating SET name='$name', tstart='$timeStart', tend='$timeEnd', nworkers='$workers', points='$points', newlevel='$lvStone', ttotal = '$diffTime' WHERE userID='$userID'";
				
				if($con->query($userUP)){
					if($con->query($updatingUP)){
						$message = "ok";
						$isValid = true;
					} else {
						$message = "Update query error";
						$isValid = false;
					}
				} else {
					$message = "User query error";
					$isValid = false;
				}
				
			} else {
				$message = "Insufficient resources";
				$isValid = false;
			}
		}
	}
	
	$res = Array(
		"message" => $message,
		"status" => $isValid
	);

	echo  json_encode($res);
?>