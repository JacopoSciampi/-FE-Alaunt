<?php
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json');
	
	$level= '';
	$status = false;
	
	$timeToUpdate = '';
	$woodCost = '';
	$stoneCost = '';
	$ironCost = '';
	$oreCost = '';
	$points = '';
	
	if (isset($_GET['level'])) {
		$level = htmlspecialchars($_GET['level']);
	}
	
	if(empty($level)){
		$status = false;
	} else {
		$con = mysqli_connect("localhost", "root", "", "alaunt");
		$result = $con->query("SELECT * FROM b_main WHERE level = $level");
		$row = mysqli_fetch_array($result,MYSQLI_NUM);
		$lv = $row[0];
		
		if(is_numeric($lv)){
			$timeToUpdate  = $row[1];
			$woodCost  = $row[2];
			$stoneCost  = $row[3];
			$ironCost  = $row[4];
			$oreCost  = $row[5];
			$points  = $row[6];
			$status = true;
		} else {
			$status = false;
		}
	}
	
	$res = Array(
	"status" => $status,
	"points" => $points,
	"timeToUpdate" => $timeToUpdate,
	"woodCost" => $woodCost,
	"stoneCost" => $stoneCost,
	"ironCost" => $ironCost,
	"oreCost" => $oreCost
	);

echo  json_encode($res);
?>