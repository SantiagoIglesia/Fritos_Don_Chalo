var intentos = 0;
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("loginBoton").addEventListener('click', function(event){
    event.preventDefault();
    var usuarioValue = document.getElementById('usuario').value;
    var usuarioInput = document.getElementById('usuario');
    var contrasenaValue = document.getElementById('contrasena').value;
    var contrasenaInput = document.getElementById('contrasena');
    if(usuarioValue.length == 0) {
      alert('Por favor, digite el usuario.');
      usuarioInput.focus();
    } else if(usuarioValue.length > 500){
      alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el usuario');
      usuarioInput.value = '';
      usuarioInput.focus();
    } else if(contrasenaValue.length == 0){
      alert('Por favor, digite la contraseña.');
      contrasenaInput.focus();
    } else if(contrasenaValue.length > 16){
      alert('Ha superado el límite de caracteres. Por favor, digite nuevamente la contraseña');
      contrasenaInput.value = '';
      contrasenaInput.focus();
    } else if(usuarioValue !== "EngieUrda" || contrasenaValue !== "12345"){
      alert("Usuario y/o contraseña incorrectos. Intentos restantes: " + (4 - intentos));
      usuarioInput.focus();
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
  });
});