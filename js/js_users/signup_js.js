function validarFormulario(){
  var nombre_value = document.getElementById('nombre').value;
  var nombre_input = document.getElementById('nombre');
  var apellido_value = document.getElementById('apellido').value;
  var apellido_input = document.getElementById('apellido');
  var correo_value = document.getElementById('correo').value;
  var correo_input = document.getElementById('correo');
  var telefono_value = document.getElementById('telefono').value;
  var telefono_input = document.getElementById('telefono');
  var rol_value = document.getElementById('rol').value;
  var usuario_value = document.getElementById('usuario').value;
  var usuario_input = document.getElementById('usuario');
  var contrasena_value = document.getElementById('contrasena').value;
  var contrasena_input = document.getElementById('contrasena');
  var confirmar_value = document.getElementById('confirmar').value;
  var confirmar_input = document.getElementById('confirmar');
  var validacion_letras = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/;
  var validacion_correo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var validacion_telefono = /^\d{10}$/;
  var validacion_usuario = /^[a-zA-Z1-9.-_ ]+$/;
  if(nombre_value.length == 0) {
    alert('Por favor, digite el nombre.');
    nombre_input.focus();
  } else if(nombre_value.length > 500){
    alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el nombre.');
    nombre_input.value = '';
    nombre_input.focus();
  } else if(!validacion_letras.test(nombre_value)){
    alert('Por favor, digite un nombre válido.');
    nombre_input.focus();
  } else if(apellido_value.length == 0) {
    alert('Por favor, digite el apellido.');
    apellido_input.focus();
  } else if(apellido_value.length > 500){
    alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el apellido.');
    apellido_input.value = '';
    apellido_input.focus();
  } else if(!validacion_letras.test(apellido_value)){
    alert('Por favor, digite un apellido válido.');
    apellido_input.focus();
  } else if(correo_value.length == 0) {
    alert('Por favor, digite el correo.');
    correo_input.focus();
  } else if(correo_value.length > 500){
    alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el correo.');
    correo_input.value = '';
    correo_input.focus();
  } else if(!validacion_correo.test(correo_value)){
    alert('Por favor, digite un correo válido.');
    correo_input.focus();
  } else if(telefono_value.length == 0) {
    alert('Por favor, digite el teléfono.');
    telefono_input.focus();
  } else if(telefono_value.length > 10){
    alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el teléfono.');
    telefono_input.value = '';
    telefono_input.focus();
  } else if(telefono_value.length < 10) {
    alert('El número de teléfono debe tener 10 caracteres. Por favor, ingréselo completo.');
    telefono_input.focus();
  } else if(!validacion_telefono.test(telefono_value) || telefono_value.charAt(0) !== '3'){
    alert('Por favor, digite un teléfono válido. El número debe empezar por "3" y debe ser solo caracteres numéricos.');
    telefono_input.focus();
  } else if(rol_value !== "Cliente"){
    alert('Rol de usuario inválido.');
  } else if(usuario_value.length == 0) {
    alert('Por favor, digite el usuario.');
    usuario_input.focus();
  } else if(usuario_value.length > 30){
    alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el usuario');
    usuario_input.value = '';
    usuario_input.focus();
  } else if(!validacion_usuario.test(usuario_value)){
    alert('Nombre de usuario inválido. por favor ingreselo nuevamente.')
  } else if(contrasena_value.length == 0){
    alert('Por favor, digite la contraseña.');
    contrasena_input.focus();
  } else if(contrasena_value.length > 16){
    alert('Ha superado el límite de caracteres. Por favor, digite nuevamente la contraseña');
    contrasena_input.value = '';
    contrasena_input.focus();
  } else if(contrasena_value.length < 5){
    alert('El mínimo de caracteres es de 5. Por favor, corrija la contraseña.');
    contrasena_input.focus();
  } else if(confirmar_value.length == 0){
    alert('Por favor, digite la contraseña.');
    confirmar_input.focus();
  } else if(confirmar_value !== contrasena_value){
    alert('Las contraseñas no coinciden. Por favor, ingrese nuevamente la contraseña.');
    confirmar_input.value = '';
    confirmar_input.focus();
  } else {
    alert('Ha sido registrado satisfactoriamente.');
    window.location.href = "login.html";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var contrasena_input = document.getElementById('contrasena');
  var mostrar_contrasena = document.getElementById('mostrar_contrasena');
  var confirmar_input = document.getElementById('confirmar');
  var mostrar_confirmar = document.getElementById('mostrar_confirmar');
  document.getElementById("signup_boton").addEventListener('click', function(event){
    event.preventDefault();
    validarFormulario();
  });

  document.addEventListener("keydown", function(event) {
    if (event.code === 'Enter') {
      event.preventDefault();
      validarFormulario();
    }
  });

  document.getElementById("mostrar_contrasena").addEventListener('change', function(event){
    event.preventDefault();
    if (mostrar_contrasena.checked == true){
      contrasena_input.type = "text";
    } else {
      contrasena_input.type = "password";
    }
  });

  document.getElementById("mostrar_confirmar").addEventListener('change', function(event){
    event.preventDefault();
    if (mostrar_confirmar.checked == true){
      confirmar_input.type = "text";
    } else {
      confirmar_input.type = "password";
    }
  });

  document.getElementById("contrasena").addEventListener("focus", function() {
    this.setAttribute("autocomplete", "off");
  });
  
  document.getElementById("confirmar").addEventListener("focus", function() {
    this.setAttribute("autocomplete", "off");
  });
});