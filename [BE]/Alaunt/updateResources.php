<?php
	include ('func.php');
	$username = "";
	
	if (isset($_GET['username'])) {
		$username = htmlspecialchars($_GET['username']);
	}
	
	if($username == ""){} else {updateResources($username);}
?>