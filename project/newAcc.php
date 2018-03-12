<?php


$con = mysqli_connect ('localhost', 'root', '', 'gms');

$name		= mysqli_real_escape_string($con, $_GET["new_name"]);
$username 	= mysqli_real_escape_string($con, $_GET["new_username"]);
$password 	= mysqli_real_escape_string($con, $_GET["new_password"]);

if(mysqli_connect_errno()){
	echo "Connection Error:".mysqli_connect_error();
}
else{
	$sql= "INSERT INTO registration (name, username, password) VALUES ('$name', '$username','$password')";

	if (!mysqli_query($con, $sql)) {
		die('Error: ' .mysqli_cerror($con));
	}
	else{
		echo "Student record added successfully!";
	}
}

mysqli_close($con);

?>