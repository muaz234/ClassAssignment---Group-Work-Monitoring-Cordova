<?php
     $datalist = array();

     $con = mysqli_connect ('localhost', 'root', '', 'gms');

          $uname = mysqli_real_escape_string($con, $_GET['new_username']);

           $connection = mysqli_connect('localhost', 'root', '', 'gms');

           $data = mysqli_query($con, "SELECT * FROM registration where username = '$uname'");
       
          $number = mysqli_num_rows($data);
  
           //while($row = mysqli_fetch_row($data)){

            $row_data = array(
              'valid' => (string)$number
            );
           array_push($datalist, $row_data); 
   
   echo json_encode($datalist);
?>