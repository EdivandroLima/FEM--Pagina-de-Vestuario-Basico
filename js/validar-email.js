function validarEmail(field) {
	// Email
	var e= field.value;
	// document
	var id_invalido= document.getElementById('email-invalid');
	var id_email= document.getElementById('email');
	var id_enviar= document.getElementById('enviar');
	// If e Else
	if (e != "") {
		if ((e.indexOf('@') == -1) ||
			(e.indexOf('.') == -1) ||
			(e.indexOf(' ') != -1) ||
			(e.split('@')[1].indexOf('.') == -1)) {
			id_invalido.innerHTML="Please provide a valid email";
			id_email.style.borderColor="hsl(0, 93%, 68%)";
			id_email.style.backgroundPosition="right 95px center";
			id_enviar.type="button";
		}
		else {
			id_invalido.innerHTML="";
			id_email.style.borderColor="#d6d6d6";
			id_enviar.type="submit";
			id_email.style.backgroundPosition="right 0px center";
		}
	}
	else {
		id_invalido.innerHTML="";
		id_email.style.borderColor="#d6d6d6";
		id_email.style.backgroundPosition="right 0px center";
	}
}
// Check form
function check_form(e) {
	if (e.value == "") {
		document.getElementById('email-invalid').innerHTML="Please provide a valid email";
		document.getElementById('email').style.borderColor="hsl(0, 93%, 68%)";
		document.getElementById('email').style.backgroundPosition="right 95px center";
		document.getElementById('enviar').type="button";
	}
}