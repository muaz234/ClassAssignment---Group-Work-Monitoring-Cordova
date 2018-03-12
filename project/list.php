<?php

$studentlist = array();

$connection = mysqli_connect('localhost', 'root', '', 'gms');
//$id = mysqli_real_escape_string($connection, $_GET[""]);

if(mysqli_connect_errno()){
	echo "Connection Error:".mysqli_connect_error();
}
else{
	$sql= "SELECT * FROM registration";

	if (!mysqli_query($connection, $sql)) {
		die('Error: ' .mysqli_error($connection));
	}
	else{
		$result = mysqli_query($connection, $sql);

		while($row = mysqli_fetch_row($result)){
			$row_data = array (
				'name' => $row[0],
				'user_name' => $row[1]
			);
			array_push($studentlist, $row_data);
		}
	}
}

mysqli_close($connection);

echo json_encode($studentlist);
?>