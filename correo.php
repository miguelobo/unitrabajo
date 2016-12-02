<?php
$resultado = "";
if (isset($_POST["nombre"]))
{
$nombre = $_POST["nombre"];
$email = $_POST["email"];
$mensaje = $_POST["mensaje"];
$adjunto = $_FILES["adjunto"];

require("class.phpmailer.php");

$mail = new PHPMailer();

$mail->Host = "localhost"; #Servidor SMTP, si es un servidor externo pon el de tu proveedor

$mail->FromName = "Administrador"; //Nombre del remitente

$mail->Subject = "Buenos días"; //Asunto del email

$mail->AddAddress($email, $nombre); //Destinatario

$mail->MsgHTML($mensaje); //Mensaje en HTML

//Si el archivo es de tamaño mayor que 0
if ($adjunto["size"] > 0)
{
$mail->AddAttachment($adjunto["tmp_name"], $adjunto["name"]);//adjuntar un archivo al mensaje
}

if($mail->Send())
{
$resultado = "Enhorabuena el mensaje ha sido enviado con éxito a $email";
}

else
{
$resultado = "Lo siento ha habido un error al enviar el mensaje a $email";
}
}
?>

<h3>Enviar Email con phpmailer a través de Mercury Mail(XAMPP) o servidor externo con soporte</h3>

<form method="post" action="<?php $_SERVER["PHP_SELF"]; ?>" enctype="multipart/form-data">
<table border="0">
<tr>
<td>Archivo:</td>
<td><input type="file" name="adjunto"></td>
</tr>
<tr>
<td>Nombre del destinatario:</td>
<td><input type="text" name="nombre"></td>
</tr>
<tr>
<td>Email a:</td>
<td><input type="text" name="email"></td>
</tr>
<tr>
<td>Mensaje:</td>
<td><textarea cols="50" rows="15" name="mensaje"></textarea></td>
<tr>
<tr>
<td></td><td><input type="submit" value="Enviar"></td>
</tr>
</table>
<b><?php echo $resultado; ?></b>
</form>