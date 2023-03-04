<?php
   $host = "localhost";
   $user = "byahram";
   $pass = "Dkfkarla2ek!";
   $db = "byahram";
   $connect = new mysqli($host,$user,$pass,$db);
   $connect -> set_charset("utf8");

   if(mysqli_connect_errno()){
      echo "DATABASE Connect False";
   }else{
   // echo "DATABASE Connect True";
   }
?>

<script>
    location.href = "../comment/comment.php";
</script>