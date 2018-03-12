<?php

require('credentials.php');
$conn = mysqli_connect('localhost','root','','gms') ;

$listofrate = array();
//$conn = mysqli_connect($server , $username, $password, $database);

if(mysqli_connect_errno() ) {
	echo "Connection Error:".mysqli_connect_error() ;
}
	else {
		$sql = "SELECT SubID, Subject, username, rating FROM rating, work where SubID = ID";


		if(!mysqli_query($conn, $sql))  {

			die('Error:' .mysqli_error($conn));
		} else {
			$result = mysqli_query($conn, $sql);

			while($row = mysqli_fetch_row($result)) {
				$row_data = array(
					'SubID' => $row[0],
					'Subject'=> $row[1],
					'username'=> $row[2],
					'rating' =>$row[3]
					/*'Mem2Name'=> $row[3],
					'Mem2Rate'=> $row[4],
					'Mem3Name'=> $row[5],
					'Mem3Rate'=> $row[6],
					'Mem4Name'=> $row[7],
					'Mem4Rate'=> $row[8]*/
										
				);
				array_push($listofrate, $row_data) ;
				
			}
		}
	}
mysqli_close($conn);
echo json_encode($listofrate);

?>

