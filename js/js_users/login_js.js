var intentos = 0;
function validarFormulario(){
  var usuario_value = document.getElementById('usuario').value;
  var usuario_input = document.getElementById('usuario');
  var contrasena_value = document.getElementById('contrasena').value;
  var contrasena_input = document.getElementById('contrasena');
  if(usuario_value.length == 0) {
    alert('Por favor, digite el usuario.');
    usuario_input.focus();
  } else if(usuario_value.length > 500){
    alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el usuario');
    usuario_input.value = '';
    usuario_input.focus();
  } else if(contrasena_value.length == 0){
    alert('Por favor, digite la contraseña.');
    contrasena_input.focus();
  } else if(contrasena_value.length > 16){
    alert('Ha superado el límite de caracteres. Por favor, digite nuevamente la contraseña');
    contrasena_input.value = '';
    contrasena_input.focus();
  } else if(usuario_value !== "EngieUrda" || contrasena_value !== "12345"){
    alert("Usuario y/o contraseña incorrectos. Intentos restantes: " + (4 - intentos));
    usuario_input.focus();
    intentos++;
    if (intentos >= 5) {
      if (confirm('Ha superado el límite de intentos. ¿Desea reuperar su contraseña?.') == true){
        alert("Listo, redirigiendo a recuperar su contraseña...");
        window.location.href = "recover_password.html"
        intentos = 0;
      } else {
        alert("Listo, proceso cancelado. Redirigiendo a la página principal...");
        window.location.href = "../../index.html";
        intentos = 0;
      }
    }
  } else {
    alert('Ha ingresado satisfactoriamente.');
    window.location.href = "../../views/views_users/index_admin.html";
    intentos = 0;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var contrasena_input = document.getElementById('contrasena');
  var mostrar_contrasena = document.getElementById('mostrar_contrasena');
  document.getElementById("login_boton").addEventListener('click', function(event){
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

  document.getElementById("contrasena").addEventListener("focus", function() {
    this.setAttribute("autocomplete", "off");
 });
});