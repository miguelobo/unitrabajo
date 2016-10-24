<?php

define('EMAIL_FOR_REPORTS', '');
define('RECAPTCHA_PRIVATE_KEY', '6Le1fQgUAAAAAA_4AT4XuoMCrprrd7aolQGRP7Qm');
define('FINISH_URI', 'http://');
define('FINISH_ACTION', 'message');
define('FINISH_MESSAGE', 'Registro exitoso!');
define('UPLOAD_ALLOWED_FILE_TYPES', 'doc, docx, xls, csv, txt, rtf, html, zip, jpg, jpeg, png, gif');

define('_DIR_', str_replace('\\', '/', dirname(__FILE__)) . '/');
require_once _DIR_ . '/handler.php';

?>

<?php if (frmd_message()): ?>
<link rel="stylesheet" href="<?php echo dirname($form_path); ?>/formoid-solid-light-green.css" type="text/css" />
<span class="alert alert-success"><?php echo FINISH_MESSAGE; ?></span>
<?php else: ?>
<!-- Start Formoid form-->
<link rel="stylesheet" href="<?php echo dirname($form_path); ?>/formoid-solid-light-green.css" type="text/css" />
<script type="text/javascript" src="<?php echo dirname($form_path); ?>/jquery.min.js"></script>
<form class="formoid-solid-light-green" style="background-color:#ffffff;font-size:13px;font-family:'Lato',sans-serif;color:#34495E;max-width:480px;min-width:150px" method="post"><div class="title"><h2>Registro De Usuario</h2></div>
	<div class="element-separator"><hr><h3 class="section-break-title">Datos Basico De Registro</h3></div>
	<div class="element-name<?php frmd_add_class("name"); ?>" title="Primer Nombre"><label class="title"></label><span class="nameFirst"><input placeholder="Nombre Primer" type="text" size="8" name="name[first]" /><span class="icon-place"></span></span><span class="nameLast"><input placeholder="Nombre Segundo" type="text" size="14" name="name[last]" /><span class="icon-place"></span></span></div>
	<div class="element-name<?php frmd_add_class("name1"); ?>"><label class="title"></label><span class="nameFirst"><input placeholder="Apellido Primer" type="text" size="8" name="name1[first]" /><span class="icon-place"></span></span><span class="nameLast"><input placeholder="Apellido Segundo" type="text" size="14" name="name1[last]" /><span class="icon-place"></span></span></div>
	<div class="element-select<?php frmd_add_class("select"); ?>"><label class="title"></label><div class="item-cont"><div class="medium"><span><select name="select" >

		<option value="Cedula De Ciudadania">Cedula De Ciudadania</option>
		<option value="Targeta De Identidad">Targeta De Identidad</option></select><i></i><span class="icon-place"></span></span></div></div></div>
	<div class="element-number<?php frmd_add_class("number"); ?>" title="Numero De Identificacion"><label class="title"></label><div class="item-cont"><input class="medium" type="text" min="0" max="20" name="number" placeholder="Identificacion" value=""/><span class="icon-place"></span></div></div>
	<div class="element-input<?php frmd_add_class("input1"); ?>"><label class="title"></label><div class="item-cont"><input class="large" type="text" name="input1" placeholder="Usuario"/><span class="icon-place"></span></div></div>
	<div class="element-password<?php frmd_add_class("password"); ?>"><label class="title"></label><div class="item-cont"><input class="large" type="password" name="password" value="" placeholder="Password"/><span class="icon-place"></span></div></div>
	<div class="element-email<?php frmd_add_class("email"); ?>"><label class="title"></label><div class="item-cont"><input class="large" type="email" name="email" value="" placeholder="Email"/><span class="icon-place"></span></div></div>
	<div class="element-date<?php frmd_add_class("date"); ?>"><label class="title"></label><div class="item-cont"><input class="large" data-format="yyyy-mm-dd" type="date" name="date" placeholder="Fecha De Nacimiento"/><span class="icon-place"></span></div></div>
	<div class="element-phone<?php frmd_add_class("phone"); ?>"><label class="title"></label><div class="item-cont"><input class="large" type="tel" pattern="[+]?[\.\s\-\(\)\*\#0-9]{3,}" maxlength="24" name="phone" placeholder="Telefono" value=""/><span class="icon-place"></span></div></div>
	<div class="element-recaptcha<?php frmd_add_class("captcha"); ?>"><label class="title"></label><script type="text/javascript">var RecaptchaOptions = {theme : "clean"};</script>
<script type="text/javascript" src="http://www.google.com/recaptcha/api/challenge?k=6Le1fQgUAAAAAAzIpo-BoyX02YFRXz9KBLkxFAkK&theme=clean"></script>
<noscript><iframe src="http://www.google.com/recaptcha/api/noscript?k=6Le1fQgUAAAAAAzIpo-BoyX02YFRXz9KBLkxFAkK&hl=en" height="300" width="500" frameborder="0"></iframe></br>
<textarea name="recaptcha_challenge_field" rows="3" cols="40"></textarea><input type="hidden" name="recaptcha_response_field" value="manual_challenge"></noscript>
<script type="text/javascript">if (/#invalidcaptcha$/.test(window.location)) (document.getElementById("recaptcha_widget_div")).className += " error"</script></div>
<div class="submit"><input type="submit" value="Registrar"/></div></form><script type="text/javascript" src="<?php echo dirname($form_path); ?>/formoid-solid-light-green.js"></script>

<!-- Stop Formoid form-->
<?php endif; ?>

<?php frmd_end_form(); ?>