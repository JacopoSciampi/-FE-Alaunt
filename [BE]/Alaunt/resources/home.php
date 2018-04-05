<?php
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json');
	include('../func.php');
	
	$username = "";
	
	$totFood = "";
    $foodPrMinute = "";
    $foodPrActual = "";
    $foodWorkers = "";
    $foodConsumato = "";
    $totWood = "";
    $woodPrMinute = "";
    $woodPrActual = "";
    $woodWorkers = "";
    $totStone = "";
    $stonePrMinute = "";
    $stonePrActual = "";
    $stoneWorkers = "";
    $totIron = "";
    $ironPrMinute = "";
    $ironPrActual = "";
    $ironWorkers = "";
    $totOre = "";
    $orePrMinute = "";
    $orePrActual = "";
    $oreWorkers = "";
	$totMitril = "";
	$mitrilPrActual = "";
	
	$status = false;
	$message = "Internal error";
	
	if (isset($_GET['username'])) {
		$username = htmlspecialchars($_GET['username']);
	}
	
	if($username == ""){} else {
		$con = mysqli_connect("localhost", "root", "", "alaunt");
		$result1 = $con->query("SELECT * FROM account WHERE username = '$username'");
		$ACCOUNT = mysqli_fetch_array($result1,MYSQLI_NUM);
		$userID = $ACCOUNT[0];
		
		$result2 = $con->query("SELECT * FROM workers WHERE userID = '$userID'");
		$WORKERS = mysqli_fetch_array($result2,MYSQLI_NUM);
		$result3 = $con->query("SELECT * FROM buildlevel WHERE userID='$userID'");
		$BUILDLEVEL = mysqli_fetch_array($result3,MYSQLI_NUM);
		
		$lvFood  = $BUILDLEVEL[3];
		$lvWood  = $BUILDLEVEL[4];
		$lvStone = $BUILDLEVEL[5];
		$lvIron  = $BUILDLEVEL[6];
		$lvOre   = $BUILDLEVEL[7];
		$lvMitril = $BUILDLEVEL[8];
		
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
		$r6 = $con->query("SELECT * FROM b_mitril WHERE level = '$lvMitril'");
		$MITRIL = mysqli_fetch_array($r6,MYSQLI_NUM);
		
		$foodPrMinute = $FOOD[1];
		$woodPrMinute = $WOOD[1];
		$stonePrMinute = $STONE[1];
		$orePrMinute = $ORE[1];
		$ironPrMinute = $IRON[1];
		$mitrilPrMinute = $MITRIL[1];
		
		$foodWorkers = $WORKERS[2];
		$woodWorkers = $WORKERS[3];
		$stoneWorkers = $WORKERS[4];
		$oreWorkers = $WORKERS[5];
		$ironWorkers = $WORKERS[6];
		$mitrilWorkers = $WORKERS[7];
		
		$totalWorkers = ($foodWorkers / 3)  + $woodWorkers + $stoneWorkers + $oreWorkers + $ironWorkers + ($mitrilWorkers * 2);
		
		$totFood = $ACCOUNT[4];
		$foodPrActual = $foodPrMinute * $foodWorkers;
		$foodConsumato = $totalWorkers * 0.15 * 60;
		
		$totWood = $ACCOUNT[5];
		$woodPrActual = $woodPrMinute * $woodWorkers;
		
		$totStone = $ACCOUNT[6];
		$stonePrActual = $stonePrMinute * $stoneWorkers;
		
		$totIron = $ACCOUNT[7];
		$ironPrActual = $ironPrMinute * $ironWorkers;
		
		$totOre = $ACCOUNT[8];
		$orePrActual = $orePrMinute * $oreWorkers;
		
		$totMitril = $ACCOUNT[9];
		$mitrilPrActual = $mitrilPrMinute * $mitrilWorkers;
		
		$status = true;
		$mssages = "ok";
	}
	

$res = Array(
	"totFood" => $totFood ,
	"foodPrMinute" => $foodPrMinute ,
	"foodPrActual" => $foodPrActual ,
	"foodWorkers" => $foodWorkers ,
	"foodConsumato" => $foodConsumato ,
	"totWood" => $totWood ,
	"woodPrMinute" => $woodPrMinute ,
	"woodPrActual" => $woodPrActual ,
	"woodWorkers" => $woodWorkers ,
	"totStone" => $totStone ,
	"stonePrMinute" => $stonePrMinute ,
	"stonePrActual" => $stonePrActual ,
	"stoneWorkers" => $stoneWorkers ,
	"totIron" => $totIron ,
	"ironPrMinute" => $ironPrMinute ,
	"ironPrActual" => $ironPrActual ,
	"ironWorkers" => $ironWorkers ,
	"totOre" => $totOre ,
	"orePrMinute" => $orePrMinute ,
	"orePrActual" => $orePrActual ,
	"oreWorkers" => $oreWorkers ,
	"status" => $status ,
	"message" => $message,
	"totMitril" => $totMitril,
	"mitrilPrMinute" => $mitrilPrMinute,
	"mitrilPrActual" => $mitrilPrActual,
	"mitrilWorkers" => $mitrilWorkers
);

echo  json_encode($res);
?>