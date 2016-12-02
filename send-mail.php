<?php
/**
* Author: Luis Zuno
* Email: luis@luiszuno.com
* URL: http://www.luiszuno.com
* Version: 1.0.0 
**/

//vars
$subject = $_POST['subject'];
$to = explode(',', $_POST['to'] );

$from = $_POST['email'];

//dataa
$msg = "NNOMBRE: "  .$_POST['name']    ."<br>\n";
$msg .= "EMAIL: "  .$_POST['email']    ."<br>\n";
$msg .= "WEBSITE: "  .$_POST['web']    ."<br>\n";
$msg .= "COMENTARIO: "  .$_POST['comments']    ."<br>\n";

//Headers
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: <".$from. ">" ;

  mail("ediescorcia17@gmail.com", "asunto prueba", "mensaje cualquier" $headers);
//send for each mail
foreach($to as $mail){
   mail($mail, $subject, $msg, $headers);
   echo "envio";
}

?>
