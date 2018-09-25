<?php
include "db.php";
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();

if($data['action'] == "insert"){
 $title = $data['title'];
 $description = $data['description'];
 $price = $data['price'];
 $pic = $data['pic'];
 
 $q = mysqli_query($con,"INSERT INTO categorias (title, descripcion, precio, pic) VALUES ('$title','$description','$price','$pic')");
 if($q){
 $message['status'] = "Ingresado";
 }
 else{
 $message['status'] = "error";
 }
 echo json_encode($message);
}
echo mysqli_error($con);
?>