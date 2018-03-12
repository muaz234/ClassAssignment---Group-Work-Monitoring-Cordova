<?php

require('credentials.php');
  //$conn = mysqli_connect($server , $username , $password , $database);
$conn = mysqli_connect('localhost','root','','gms') ;

$id =mysqli_real_escape_string($conn, $_GET["id"]);
$subjek = mysqli_real_escape_string($conn, $_GET["subjek"]);
$gname = mysqli_real_escape_string($conn, $_GET["name"]);
//$gleader = mysqli_real_escape_string($conn, $_GET["leader"]);
$gleadermatric = mysqli_real_escape_string($conn, $_GET["matric1"]);
$gleaderyear = mysqli_real_escape_string($conn, $_GET["year"]);
//$member1name = mysqli_real_escape_string($conn, $_GET["member1"]);
$member1matric =  mysqli_real_escape_string($conn, $_GET["matric2"]);
$member1year = mysqli_real_escape_string($conn, $_GET["year2"]);
//$member2name = mysqli_real_escape_string($conn, $_GET["member2"]);
$member2matric = mysqli_real_escape_string($conn, $_GET["matric3"]);
$member2year = mysqli_real_escape_string($conn, $_GET["year3"]);
//$member3name = mysqli_real_escape_string($conn, $_GET["member3"]);
$member3matric = mysqli_real_escape_string($conn, $_GET["matric4"]);
$member3year = mysqli_real_escape_string($conn, $_GET["year4"]);
//$member4name = mysqli_real_escape_string($conn, $_GET["member4"]);
$member4matric = mysqli_real_escape_string($conn, $_GET["matric5"]);
$member4year = mysqli_real_escape_string($conn, $_GET["year5"]);
$task= mysqli_real_escape_string($conn, $_GET["task"]);

if(mysqli_connect_errno() ) {
	echo " Connection Error: ".mysqli_connect_error();

}
else{
	$sql= "INSERT INTO  work (ID,Subject,GroupName,LeaderMatric,LeaderYear,Member1Matric,Member1Year,Member2Matric,Member2Year,Member3Matric,Member3Year,Member4Matric,Member4Year,task) VALUES ('$id' , '$subjek' , '$gname' , '$gleadermatric' , '$gleaderyear' ,  '$member1matric' , '$member1year' ,  '$member2matric' , '$member2year' ,  '$member3matric' , '$member3year' ,  '$member4matric' , '$member4year','$task' )" ;
		if(!mysqli_query($conn, $sql)) {
				die('Error:'.mysqli_error($conn));
		} else {
			echo "Student record added successfully!";
		}
}

mysqli_close($conn);

?>

