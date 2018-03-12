<?php

//require('credentials.php');
$conn = mysqli_connect('localhost','root','','gms') ;


$list = array();

if(mysqli_connect_errno() ) {
	echo "Connection Error:".mysqli_connect_error() ;
}
	else {
		$sql = "SELECT * FROM work" ;


		if(!mysqli_query($conn, $sql))  {

			die('Error:' .mysqli_error($conn));
		} else {
			$result = mysqli_query($conn, $sql);
		
			while($row = mysqli_fetch_row($result)) {
				$row_data = array(
					'ID' => $row[0],
					'Subject'=> $row[1],
					'GroupName'=> $row[2],			
					'LeaderMatric'=> $row[3],
					'LeaderYear'=> $row[4],					
					'Member1Matric'=> $row[5],
					'Member1Year'=> $row[6],					
					'Member2Matric'=> $row[7],
					'Member2Year'=> $row[8],
					'Member3Matric'=> $row[9],
					'Member3Year'=> $row[10],
					'Member4Matric'=> $row[11],
					'Member4Year' => $row[12],
					'Task' => $row[13]
			
				);
				array_push($list, $row_data) ;
				
			}
		}
	}
mysqli_close($conn);
echo json_encode($list);

?>

