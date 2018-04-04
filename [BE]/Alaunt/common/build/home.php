<?php
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json');
	
	$level= '';
	$status = false;
	
	$people = '';
	$timeToUpdate = '';
	$woodCost = '';
	$stoneCost = '';
	$points = '';
	
	if (isset($_GET['level'])) {
		$level = htmlspecialchars($_GET['level']);
	}
	
	if($level < 0){
		$status = false;
	} else {
		$con = mysqli_connect("localhost", "root", "", "alaunt");
		$level = $level + 1;
		$result = $con->query("SELECT * FROM b_home WHERE level = '$level'");
		$row = mysqli_fetch_array($result,MYSQLI_NUM);
		$lv = $row[0];
		
		if(is_numeric($lv)){
			$people = $row[1];
			$timeToUpdate  = $row[2];
			$woodCost  = $row[3];
			$stoneCost  = $row[4];
			$points  = $row[7];
			$status = true;
		} else {
			$status = false;
		}
	}
	
	$res = Array(
	"status" => $status,
	"points" => $points,
	"people" => $people,
	"timeToUpdate" => $timeToUpdate,
	"woodCost" => $woodCost,
	"stoneCost" => $stoneCost
	);

echo  json_encode($res);
?>