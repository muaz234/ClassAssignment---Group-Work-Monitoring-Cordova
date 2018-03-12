<?php
     $datalist = array();
  
$con = mysqli_connect ('localhost', 'root', '', 'gms');

   if(isset($_GET['login_username']) && isset($_GET['login_password']))
      {
          $uname = $_GET['login_username'];
          $pword = $_GET['login_password'];

           $connection = mysqli_connect('localhost', 'root', '', 'gms');

           $data = mysqli_query($connection, "SELECT * FROM registration where username = '$uname' AND password = '$pword'");
       
          $number = mysqli_num_rows($data);
  
           //while($row = mysqli_fetch_row($data)){

            $row_data = array(
              'valid' => (string)$number
            );
           

           array_push($datalist, $row_data);
      } 
   
   echo json_encode($datalist);

?>  