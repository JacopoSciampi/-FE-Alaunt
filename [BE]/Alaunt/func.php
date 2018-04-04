<?php
function validate($data){
    stripslashes($data);
    htmlspecialchars($data);
    htmlentities($data);
    strip_tags($data);
    addslashes($data);
    return($data);
}

function updateUserTime($username){
	$timeNow = time();
	$con = mysqli_connect("localhost", "root", "", "alaunt");
	$userUP = "UPDATE account SET lastCheck='$timeNow' WHERE username='$username'";
	$con->query($userUP);
}

function getUserID($username){
	$con = mysqli_connect("localhost", "root", "", "alaunt");
	$result = $con->query("SELECT * FROM account WHERE username = '$username'");
	$row = mysqli_fetch_array($result,MYSQLI_NUM);
	
	return $row[0];
}

function getUser($username){
	$con = mysqli_connect("localhost", "root", "", "alaunt");
	$result = $con->query("SELECT * FROM account WHERE username = '$username'");
	$row = mysqli_fetch_array($result,MYSQLI_NUM);
	
	return $row;
}

function getHomeInfo($level){
	$con = mysqli_connect("localhost", "root", "", "alaunt");
	$result = $con->query("SELECT * FROM b_home WHERE level = '$level'");
	$row = mysqli_fetch_array($result,MYSQLI_NUM);
	
	return $row;
}
	
function getWorkersAt($username) {
	$con = mysqli_connect("localhost", "root", "", "alaunt");
	$userID = getUserID($username);
	
	$result = $con->query("SELECT * FROM workers WHERE userID = '$userID'");
	$row = mysqli_fetch_array($result,MYSQLI_NUM);
	
	return $row;
}

function updateUpdating($username) {
	$con = mysqli_connect("localhost", "root", "", "alaunt");
	$USER = getUser($username);
	$userID = $USER[0];
	$result = $con->query("SELECT * FROM updating WHERE userID = '$userID' AND tstart > 0");
	$row_cnt = $result->num_rows;
		
		if($row_cnt >= 1){
			$row = mysqli_fetch_array($result,MYSQLI_NUM);
			$timeStart = time();
			$timeEnd = $row[3];
			
			if($timeStart >= $timeEnd) {
				//update finished || QUALCOSA NON VA
				$name     = $row[1];
				$work     = $row[4];
				$points   = $row[5];
				$newLevel = $row[6];
				
				$timeNow = time();
				
				$newUserPoints = $USER[12] + $points;
				$newWorkers = $USER[11] + $work; // Quelli liberi + quelli che lavorano +  (SE CASA UPDATE -> CASA lv ORA - CASA lv prima
				
				if($name == "b_home"){
					$oldLevel = $newLevel - 1;
					$newHome = getHomeInfo($newLevel);
					$oldHome = getHomeInfo($oldLevel);
					
					$wUp = $newHome[1] - $oldHome[1];
					$newWorkers = $newWorkers + $wUp;
				}
				
				$zero = 0;
				
				$up = "UPDATE updating SET name='', tstart='$zero', tend='$zero', nworkers='$zero', points='$zero', newlevel='$zero', ttotal='$zero' WHERE userID='$userID'";
				
				$userUP = "UPDATE account SET worker='$newWorkers', points='$newUserPoints', lastCheck='$timeNow' WHERE id='$userID'";
				
				$buildUP = "";
				if($name == "b_home"){
					$buildUP = "UPDATE buildlevel SET bHome = '$newLevel' WHERE userID='$userID'";
				}
				if($name == "b_food"){
					$buildUP = "UPDATE buildlevel SET bFood = '$newLevel' WHERE userID='$userID'";
				}
				if($name == "b_wood"){
					$buildUP = "UPDATE buildlevel SET bWood = '$newLevel' WHERE userID='$userID'";
				}
				if($name == "b_stone"){
					$buildUP = "UPDATE buildlevel SET bStone = '$newLevel' WHERE userID='$userID'";
				}
				if($name == "b_ore"){
					$buildUP = "UPDATE buildlevel SET bOre = '$newLevel' WHERE userID='$userID'";
				}
				if($name == "b_iron"){
					$buildUP = "UPDATE buildlevel SET bIron = '$newLevel' WHERE userID='$userID'";
				}
				
				if($con->query($up)) {} else {echo $con->error;};
				if($con->query($userUP)){} else {echo $con->error;};
				if($con->query($buildUP)){} else {echo $con->error;};
				
			} else {
				$timeNow = time();
				$up = "UPDATE updating SET tstart='$timeNow' WHERE userID='$userID'";
				$con->query($up);
			}
		}
}

function update($username) {
	$con = mysqli_connect("localhost", "root", "", "alaunt");
	$result1 = $con->query("SELECT * FROM account WHERE username = '$username'");
	$ACCOUNT = mysqli_fetch_array($result1,MYSQLI_NUM);
	$userID = $ACCOUNT[0];
	
	if($ACCOUNT[4] > 0){ // No food == no work N3Gr0
	
		$result2 = $con->query("SELECT * FROM workers WHERE userID = '$userID'");
		$WORKERS = mysqli_fetch_array($result2,MYSQLI_NUM);
		$result3 = $con->query("SELECT * FROM buildlevel WHERE userID='$userID'");
		$BUILDLEVEL = mysqli_fetch_array($result3,MYSQLI_NUM);
		
		$lvFood  = $BUILDLEVEL[3];
		$lvWood  = $BUILDLEVEL[4];
		$lvStone = $BUILDLEVEL[5];
		$lvIron  = $BUILDLEVEL[6];
		$lvOre   = $BUILDLEVEL[7];
		
		// Single build
		
		$r1 = $con->query("SELECT * FROM b_food WHERE level = '$lvFood'");
		$FOOD = mysqli_fetch_array($r1,MYSQLI_NUM);
		$r2 = $con->query("SELECT * FROM b_wood WHERE level = '$lvWood'");
		$WOOD = mysqli_fetch_array($r2,MYSQLI_NUM);
		$r3 = $con->query("SELECT * FROM b_stone WHERE level = '$lvStone'");
		$STONE = mysqli_fetch_array($r3,MYSQLI_NUM);
		$r4 = $con->query("SELECT * FROM b_ore WHERE level = '$lvOre'");
		$ORE = mysqli_fetch_array($r4,MYSQLI_NUM);
		$r5 = $con->query("SELECT * FROM b_iron WHERE level = '$lvIron'");
		$IRON = mysqli_fetch_array($r5,MYSQLI_NUM);
		
		$foodPrMinute = $FOOD[1];
		$woodPrMinute = $WOOD[1];
		$stonePrMinute = $STONE[1];
		$orePrMinute = $ORE[1];
		$ironPrMinute = $IRON[1];
		
		$foodWorkers = $WORKERS[2];
		$woodWorkers = $WORKERS[3];
		$stoneWorkers = $WORKERS[4];
		$oreWorkers = $WORKERS[5];
		$ironWorkers = $WORKERS[6];
		
		$totalWorkers = $foodWorkers + $woodWorkers + $stoneWorkers + $oreWorkers + $ironWorkers;
		
		$foodPrSecond  = $foodPrMinute / 60;
		$woodPrSecond  = $woodPrMinute / 60;
		$stonePrSecond = $stonePrMinute / 60;
		$orePrSecond   = $orePrMinute / 60;
		$ironPrSecond   = $ironPrMinute / 60;
		
		$totProdSec   = $foodPrSecond * $foodWorkers;
		$woodProdSec  = $woodPrSecond * $woodWorkers;
		$stoneProdSec = $stonePrSecond * $stoneWorkers;
		$oreProdSec   = $orePrSecond * $oreWorkers;
		$ironProdSec  = $ironPrSecond * $ironWorkers;

		$secondsPassed = (time() - $ACCOUNT[14]);
		
		// ora calcolo quanto cibo consumano i miei lavoratorih
		$foodConsumatoPrSec = $totalWorkers * 0.1;		
		
		$foodToAdd  = $ACCOUNT[4] + ($totProdSec * $secondsPassed) - ($foodConsumatoPrSec * $secondsPassed);
		$woodToAdd  = $ACCOUNT[5] + ($woodPrSecond * $secondsPassed);
		$stoneToAdd = $ACCOUNT[6] + ($stonePrSecond * $secondsPassed);
		$oreToAdd   = $ACCOUNT[8] + ($orePrSecond * $secondsPassed);
		$ironToAdd   = $ACCOUNT[7] + ($ironPrSecond * $secondsPassed);
			
		$sql = "UPDATE account SET food='$foodToAdd', wood='$woodToAdd', stone='$stoneToAdd', iron='$ironToAdd', ore='$oreToAdd' WHERE id='$userID'";
		if($con->query($sql)){} else { echo $con->error;}
	}	
	updateUpdating($username);
}

?>