document.addEventListener("DOMContentLoaded", function() {
  const contrasenaAleatoria = longitud => {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let contrasenaAleatoria = "";
    for (let i = 0; i < longitud; i++) {
        contrasenaAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return contrasenaAleatoria;
  };
  var contrasena = contrasenaAleatoria(8);
  document.getElementById("crearProductoBoton").addEventListener('click', function(event){
    event.preventDefault();
    var nombreValue = document.getElementById('nombre').value;
    var nombreInput = document.getElementById('nombre');
    var apellidoValue = document.getElementById('apellido').value;
    var apellidoInput = document.getElementById('apellido');
    var correoValue = document.getElementById('correo').value;
    var correoInput = document.getElementById('correo');
    var telefonoValue = document.getElementById('telefono').value;
    var telefonoInput = document.getElementById('telefono');
    var rolValue = document.getElementById('rol').selectedIndex;
    var rolSelect = document.getElementById('rol');
    var usuarioValue = document.getElementById('usuario').value;
    var usuarioInput = document.getElementById('usuario');
    var validacionLetras = /^[a-zA-Z ]+$/;
    var validacionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var validacionTelefono = /^\d{10}$/;
    var validacionUsuario = /^[a-zA-Z1-9.-_ ]+$/;
    if(nombreValue.length == 0) {
      alert('Por favor, digite el nombre.');
      nombreInput.focus();
    } else if(nombreValue.length > 500){
      alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el nombre.');
      nombreInput.value = '';
      nombreInput.focus();
    } else if(!validacionLetras.test(nombreValue)){
      alert('Por favor, digite un nombre válido.');
      nombreInput.focus();
    } else if(apellidoValue.length == 0) {
      alert('Por favor, digite el apellido.');
      apellidoInput.focus();
    } else if(apellidoValue.length > 500){
      alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el apellido.');
      apellidoInput.value = '';
      apellidoInput.focus();
    } else if(!validacionLetras.test(apellidoValue)){
      alert('Por favor, digite un apellido válido.');
      apellidoInput.focus();
    } else if(correoValue.length == 0) {
      alert('Por favor, digite el correo.');
      correoInput.focus();
    } else if(correoValue.length > 500){
      alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el correo.');
      correoInput.value = '';
      correoInput.focus();
    } else if(!validacionCorreo.test(correoValue)){
      alert('Por favor, digite un correo válido.');
      correoInput.focus();
    } else if(telefonoValue.length == 0) {
      alert('Por favor, digite el teléfono.');
      telefonoInput.focus();
    } else if(telefonoValue.length > 10){
      alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el teléfono.');
      telefonoInput.value = '';
      telefonoInput.focus();
    } else if(telefonoValue.length < 10) {
      alert('El número de teléfono debe tener 10 caracteres. Por favor, ingréselo completo.');
      telefonoInput.focus();
    } else if(!validacionTelefono.test(telefonoValue) || telefonoValue.charAt(0) !== '3'){
      alert('Por favor, digite un teléfono válido. El número debe empezar por "3" y debe ser solo caracteres numéricos.');
      telefonoInput.focus();
    } else if(rolValue == 0) {
      alert('Rol inválido, por favor seleccione otro.');
      rolSelect.focus();
    } else if(rolValue > 2) {
      alert('Rol inválido, por favor seleccione otro.');
      rolSelect.focus();
    } else if(usuarioValue.length == 0) {
      alert('Por favor, digite el usuario.');
      usuarioInput.focus();
    } else if(usuarioValue.length > 30){
      alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el usuario');
      usuarioInput.value = '';
      usuarioInput.focus();
    } else if(!validacionUsuario.test(usuarioValue)){
      alert('Nombre de usuario inválido. por favor ingreselo nuevamente.')
    } else {
      alert('Ha sido registrado satisfactoriamente.\nContraseña: ' + contrasena);
      window.location.href = "../../views/views_users/index_admin.html";
    }
  });
});