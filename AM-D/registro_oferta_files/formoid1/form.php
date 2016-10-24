<?php

define('EMAIL_FOR_REPORTS', '');
define('RECAPTCHA_PRIVATE_KEY', '@privatekey@');
define('FINISH_URI', 'http://');
define('FINISH_ACTION', 'message');
define('FINISH_MESSAGE', 'Thanks for filling out my form!');
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
<form class="formoid-solid-light-green" style="background-color:#FFFFFF;font-size:14px;font-family:'Roboto',Arial,Helvetica,sans-serif;color:#34495E;max-width:480px;min-width:150px" method="post"><div class="title"><h2>Registro De Oferta</h2></div>
	<div class="element-input<?php frmd_add_class("input"); ?>"><label class="title"></label><div class="item-cont"><input class="large" type="text" name="input" placeholder="Nombre Oferta"/><span class="icon-place"></span></div></div>
	<div class="element-date<?php frmd_add_class("date"); ?>"><label class="title"></label><div class="item-cont"><input class="large" data-format="yyyy-mm-dd" type="date" name="date" placeholder="Fecha De Apertura"/><span class="icon-place"></span></div></div>
	<div class="element-date<?php frmd_add_class("date1"); ?>"><label class="title"></label><div class="item-cont"><input class="large" data-format="yyyy-mm-dd" type="date" name="date1" placeholder="Fecha De Cierre"/><span class="icon-place"></span></div></div>
	<div class="element-checkbox<?php frmd_add_class("checkbox"); ?>"><label class="title">Perfiles :</label>		<div class="column column2"><label><input type="checkbox" name="checkbox[]" value="Desarrollo de software"/ ><span>Desarrollo de software</span></label><label><input type="checkbox" name="checkbox[]" value="Auditoria"/ ><span>Auditoria</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="checkbox" name="checkbox[]" value="Redes de computadores"/ ><span>Redes de computadores</span></label><label><input type="checkbox" name="checkbox[]" value="Seguridad de la información"/ ><span>Seguridad de la información</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-textarea<?php frmd_add_class("textarea"); ?>" title="Descripcion"><label class="title"></label><div class="item-cont"><textarea class="medium" name="textarea" cols="20" rows="5" placeholder="Descripcion"></textarea><span class="icon-place"></span></div></div>
	<div class="element-textarea<?php frmd_add_class("textarea1"); ?>"><label class="title"></label><div class="item-cont"><textarea class="medium" name="textarea1" cols="20" rows="5" placeholder="Necesidades De Contratacion"></textarea><span class="icon-place"></span></div></div>
	<div class="element-number<?php frmd_add_class("number"); ?>"><label class="title"></label><div class="item-cont"><input class="large" type="text" min="0" max="100" name="number" placeholder="Cantidad De Vacantes" value=""/><span class="icon-place"></span></div></div>
	<div class="element-number<?php frmd_add_class("number1"); ?>"><label class="title"></label><div class="item-cont"><input class="large" type="text" min="0" max="99999999" name="number1" placeholder="Salario" value=""/><span class="icon-place"></span></div></div>
	<div class="element-select<?php frmd_add_class("select"); ?>"><label class="title"></label><div class="item-cont"><div class="large"><span><select name="select" >

		<option value="option 1">option 1</option>
		<option value="option 2">option 2</option>
		<option value="option 3">option 3</option></select><i></i><span class="icon-place"></span></span></div></div></div>
	<div class="element-multiple<?php frmd_add_class("multiple"); ?>"><label class="title"></label><div class="item-cont"><div class="large"><select data-no-selected="Nothing selected" name="multiple[]" multiple="multiple" >

		<option value="Educación mínima">Educación mínima</option>
		<option value="Años de experiencia">Años de experiencia</option>
		<option value="Idiomas">Idiomas</option>
		<option value="Disponibilidad para viajar ">Disponibilidad para viajar </option>
		<option value="Cambiar de residencia">Cambiar de residencia</option></select><span class="icon-place"></span></div></div></div>
<div class="submit"><input type="submit" value="Registrar"/></div></form><script type="text/javascript" src="<?php echo dirname($form_path); ?>/formoid-solid-light-green.js"></script>

<!-- Stop Formoid form-->
<?php endif; ?>

<?php frmd_end_form(); ?>