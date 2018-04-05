<?php
include('func.php');
function update2($username) {
	$con = mysqli_connect("localhost", "root", "", "alaunt");
	$result1 = $con->query("SELECT * FROM account WHERE username = '$username'");
	$ACCOUNT = mysqli_fetch_array($result1,MYSQLI_NUM);
	$userID = $ACCOUNT[0];
	$result2 = $con->query("SELECT * FROM workers WHERE userID = '$userID'");
	$WORKERS = mysqli_fetch_array($result2,MYSQLI_NUM);
	$result3 = $con->query("SELECT * FROM buildlevel WHERE userID='$userID'");
	$BUILDLEVEL = mysqli_fetch_array($result3,MYSQLI_NUM);
	
	$lvFood = $BUILDLEVEL[3];
	$lvWood = $BUILDLEVEL[4];

	
	// Single build
	
	$r1 = $con->query("SELECT * FROM b_food WHERE level = '$lvFood'");
		$FOOD = mysqli_fetch_array($r1,MYSQLI_NUM);
		$r2 = $con->query("SELECT * FROM b_wood WHERE level = '$lvWood'");
		$WOOD = mysqli_fetch_array($r2,MYSQLI_NUM);
		
		$foodPrMinute = $FOOD[1];
		$woodPrMinute = $WOOD[1];
		
		$foodWorkers = $WORKERS[2];
		$woodWorkers = $WORKERS[3];
		
		$totalWorkers = $foodWorkers + $woodWorkers;
		
		$foodPrSecond = $foodPrMinute / 60;
		$woodPrSecond = $woodPrMinute / 60;
		
		$totProdSec  = $foodPrSecond * $foodWorkers;
		$woodProdSec = $woodPrSecond * $woodWorkers;

		$secondsPassed = (time() - $ACCOUNT[14]);
		echo "<pre>time now : " . time() . "<br>time usr : " .$ACCOUNT[14]. "<br>SecondPassed : " .$secondsPassed ."</pre>";
		
		// ora calcolo quanto cibo consumano i miei lavoratorih
		$foodConsumatoPrSec = $totalWorkers * 0.1;		
		
		$foodToAdd = $ACCOUNT[4] + ($totProdSec * $secondsPassed) - ($foodConsumatoPrSec * $secondsPassed);
		$woodToAdd = $ACCOUNT[5] + ($woodPrSecond * $secondsPassed);
	
	echo "fw" .$foodWorkers."<br>";
	
	echo "foodPrSecond" .$foodPrSecond."<br>";
	echo "totProdSec" .$totProdSec."<br>";
	echo "foodConsumatoPrSec" .$foodConsumatoPrSec."<br>";
	echo "foodToAdd" .$foodToAdd."<br>";
	echo "woodProdSec" .$woodProdSec."<br>";
	echo "woodPrMinute" .$woodPrMinute."<br>";
	echo "woodWorkers" .$woodWorkers."<br>";
	echo "woodToAdd" .$woodToAdd."<br>";
	updateUpdating("jeko");
	updateUserTime("jeko");
}

update2("jeko");