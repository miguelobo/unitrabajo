<?php
// Configura los datos de tu cuenta
session_start();
//puedes cambiar las frases sin quitar las comillas ""
include("conexion.php");

if ($_GET['user'] ) {
//Comprobacion del envio del nombre de usuario y password
$username=$_GET['user'];
$password=$_GET['password'];
if ($password==NULL) {
echo "Debes Escribir el Password";
}else{
//$query = mysql_query("SELECT usuario,contra FROM login WHERE usuario = '$username'" ) or die(mysql_error());

$sql="SELECT * FROM login_user WHERE usuario = '$username'";

$query =mysqli_query($con,$sql)or die("Error el select");
$data = mysqli_fetch_array($query);


if($data['contra'] != $password) {
echo "Usuario o Contrase&ntilde;a Incorrecto, sino eres Usuario Puedes Registrarte <a href='../REGISTRO_USUARIO.html'>Aqu&iacute;</a>";
}else{
$query = mysqli_query($con,$sql ) or die(mysql_error());
$row = mysqli_fetch_array($query);
$_SESSION['s_username'] = $row['usuario'];
$_SESSION['s_id'] = $row['id_usuario'];
$_SESSION['s_email']=$row['email'];

if ($_SESSION["s_id"]!='admin' && $row["contra"]!='admin' ) {
	echo "<html><head></head><meta HTTP-EQUIV='Refresh' CONTENT='3; URL=session.php '><body>Hola ".$_SESSION['s_username']." Te Vamos a Redireccionar a Tu Cuenta</body></html>";

	}else{
echo "<html><head></head><meta HTTP-EQUIV='Refresh' CONTENT='3; URL=admin.php'><body>Hola ".$_SESSION['s_username']." Te Vamos a Redireccionar a Tu Cuenta</body></html>";

}
}
}
}
mysqli_close($con);	
?>