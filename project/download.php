<?php

header('Access-Control-Allow-Origin: *');

$conn=mysqli_connect('localhost','root','','upload');

$data=array();
$q=mysqli_query($con,"select * from `image`");
while ($row=mysqli_fetch_object($q)){
 $data[]=$row;
}
echo json_encode($data);
?>
