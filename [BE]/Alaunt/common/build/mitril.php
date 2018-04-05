<?php
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json');
	
	include('../../func.php');
	
	$level= '';
	$status = false;
	
	$people = '';
	$username = "";
	$timeToUpdate = '';
	$woodCost = '';
	$stoneCost = '';
	$ironCost = '';
	$oreCost = '';
	$production = "";
	$foodUserAtWork = "";
	$cp = "";
	$points = '';
	
	if (isset($_GET['level'])) {
		$level = htmlspecialchars($_GET['level']);
	}
	
	if (isset($_GET['username'])) {
		$username = htmlspecialchars($_GET['username']);
	}
	
	if(($level < 0)||($username == "")){
		$status = false;
	} else {
		$con = mysqli_connect("localhost", "root", "", "alaunt");
		$level = $level + 1;
		$result = $con->query("SELECT * FROM b_mitril WHERE level = '$level'");
		$row = mysqli_fetch_array($result,MYSQLI_NUM);
		$lv = $row[0];
		
		if(is_numeric($lv)){
			$production = $row[1];
			$timeToUpdate  = $row[2];
			$woodCost  = $row[3];
			$stoneCost  = $row[4];
			$ironCost = $row[5];
			$oreCost = $row[6];
			$points  = $row[7];
			$wrk = getWorkersAt($username);
			$UserAtWork = $wrk[7];
			
			$cp = $row[8] * $UserAtWork; // current production
			$status = true;
		} else {
			$status = false;
		}
	}
	
	$res = Array(
	"status" => $status,
	"points" => $points,
	"production" => $production,
	"timeToUpdate" => $timeToUpdate,
	"woodCost" => $woodCost,
	"stoneCost" => $stoneCost,
	"ironCost" => $ironCost,
	"oreCost" => $oreCost,
	"currentProduction" => $cp,
	"atWork" => $UserAtWork
	);

echo  json_encode($res);
?>