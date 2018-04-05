<?php
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json');
	include('func.php');
	$username = "";
	$status = false;
	$message = "nop";
	
	if (isset($_GET['username'])) {
		$username = htmlspecialchars($_GET['username']);
	}
	
	if($username == ""){} else {
		$con = mysqli_connect("localhost", "root", "", "alaunt");
		$USER = getUser($username);
		$userID = $USER[0];
		$w = getWorkersAt($username);
		
		$totWorkersToAdd = $w[2] + $w[3] + $w[4] + $w[5] + $w[6] + $USER[11];
		$z = 0;
		
		$up1 = "UPDATE workers SET b_food = '$z', b_wood = '$z', b_stone = '$z', b_iron = '$z', b_ore = '$z' WHERE userID='$userID'";
		$up2 = "UPDATE account SET worker = '$totWorkersToAdd' WHERE id='$userID'";
		
		if($con->query($up1)){} else { echo $con->error; $status = false; }
		if($con->query($up2)){} else { echo $con->error; $status = false;}
		
		$status = true;
		$message = "ok";
	}
	
$res = Array(
	"message" => $message,
	"status" => $status,
);

echo  json_encode($res);
?>