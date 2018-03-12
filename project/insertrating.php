<?php

require('credentials.php');
  //$conn = mysqli_connect($server , $username , $password , $database);
$conn = mysqli_connect('localhost','root','','gms') ;

$rate_sub_id = mysqli_real_escape_string($conn, $_GET["rate_sub_id"]);
$mem_1name = mysqli_real_escape_string($conn, $_GET["mem_1"]);
$rating1 = mysqli_real_escape_string($conn, $_GET["rate_1"]);
/*$mem_2name = mysqli_real_escape_string($conn, $_GET["mem_2"]);
$rating2 = mysqli_real_escape_string($conn, $_GET["rate_2"]);
$mem_3name = mysqli_real_escape_string($conn, $_GET["mem_3"]);
$rating3 = mysqli_real_escape_string($conn, $_GET["rate_3"]);
$mem_4name = mysqli_real_escape_string($conn, $_GET["mem_4"]);
$rating4 = mysqli_real_escape_string($conn, $_GET["rate_4"]);
*/

if(mysqli_connect_errno() ) {
	echo " Connection Error: ".mysqli_connect_error();

}
else{
	$sql= "INSERT INTO  rating (SubID, username,rating/*,M2Name,M2Rate,M3Name,M3Rate,M4Name,M4Rate*/) VALUES ('$rate_sub_id','$mem_1name' , '$rating1'/* '$mem_2name' , '$rating2' , '$mem_3name' , '$rating3' , '$mem_4name' , '$rating4' */)" ;
		if(!mysqli_query($conn, $sql)) {
				die('Error:'.mysqli_error($conn));
		} else {
			echo "Student record added successfully!";
		}
}

mysqli_close($conn);

?>

