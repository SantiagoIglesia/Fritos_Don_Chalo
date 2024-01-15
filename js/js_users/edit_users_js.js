function editForm(id){
  var nombre = document.getElementById('nombre_' + id).innerText;
  var apellido = document.getElementById('apellido_' + id).innerText;
  var correo = document.getElementById('correo_' + id).innerText;
  var telefono = document.getElementById('telefono_' + id).innerText;
  var rol = document.getElementById('rol_' + id).innerText;
  var usuario = document.getElementById('usuario_' + id).innerText;
  localStorage.setItem('edit_id', id);
  localStorage.setItem('edit_nombre', nombre);
  localStorage.setItem('edit_apellido', apellido);
  localStorage.setItem('edit_correo', correo);
  localStorage.setItem('edit_telefono', telefono);
  localStorage.setItem('edit_rol', rol);
  localStorage.setItem('edit_usuario', usuario);
  window.location.href = "edit_form_user.html?id=" + id;
};

function deleteUser(id){
  var usuario = document.getElementById('nombre_' + id).parentNode;
  var usuarios = document.querySelectorAll('.table tbody tr');
  if (confirm("¿Está seguro que desea borrar este usuario?") == true) {
    usuario.style.display = 'none';
    var ultimaVisible = Array.from(usuarios).every(function (des) {
      return des.style.display === 'none';
    });
    if (ultimaVisible) {
      window.location.href = "../views_errors/users/view_empty.html";
    }
    alert("Usuario borrado con éxito.");
  } else {
    alert("Borrado cancelado.");
  }
};

document.addEventListener("DOMContentLoaded", function() {
  var urlParams = new URLSearchParams(window.location.search);
  var id = urlParams.get('id');
  var nombre = localStorage.getItem('edit_nombre');
  var apellido = localStorage.getItem('edit_apellido');
  var correo = localStorage.getItem('edit_correo');
  var telefono = localStorage.getItem('edit_telefono');
  var rol = localStorage.getItem('edit_rol');
  var usuario = localStorage.getItem('edit_usuario');
  localStorage.removeItem('edit_nombre');
  localStorage.removeItem('edit_apellido');
  localStorage.removeItem('edit_correo');
  localStorage.removeItem('edit_telefono');
  localStorage.removeItem('edit_rol');
  localStorage.removeItem('edit_usuario');
  var idInput = document.getElementById('id_input');
  var nombreInput = document.getElementById('nombre_input');
  var apellidoInput = document.getElementById('apellido_input');
  var correoInput = document.getElementById('correo_input');
  var telefonoInput = document.getElementById('telefono_input');
  var rolSelect = document.getElementById('rol_select');
  var usuarioInput = document.getElementById('usuario_input');
  var editarUsuarioBoton = document.getElementById("editarUsuarioBoton");
  idInput.value = id;
  nombreInput.value = nombre;
  apellidoInput.value = apellido;
  correoInput.value = correo;
  telefonoInput.value = telefono;
  if (rol == "Administrador"){
    rolSelect.value = 1;
  } else {
    rolSelect.value = 2;
  };
  usuarioInput.value = usuario;
  editarUsuarioBoton.addEventListener('click', function(event){
    event.preventDefault();
    var idValue = idInput.value;
    var nombreValue = nombreInput.value;
    var apellidoValue = apellidoInput.value;
    var correoValue = correoInput.value;
    var telefonoValue = telefonoInput.value;
    var rolValue = rolSelect.value;
    var usuarioValue = usuarioInput.value;
    var validacionLetras = /^[a-zA-Z ]+$/;
    var validacionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var validacionTelefono = /^\d{10}$/;
    var validacionUsuario = /^[a-zA-Z1-9.-_ ]+$/;
    if(idValue.length == 0) {
      alert('Por favor, digite el id.');
      idInput.focus();
    } else if(idValue != id) {
      alert('Por favor, digite el id válido.');
      idInput.focus();
    } else if(nombreValue.length == 0) {
      alert('Por favor, digite el nombre.');
      nombreInput.focus();
    } else if(nombreValue.length > 500){
      alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el nombre');
      nombreInput.value = '';
      nombreInput.focus();
    } else if(!validacionLetras.test(nombreValue)){
      alert('Por favor, digite un nombre correcto.');
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
    } else if(rolValue == 0 || rolValue > 2){
      alert('Rol de usuario inválido.');
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
      alert('Usuario editado satisfactoriamente');
      window.location.href = "edit_users.html";
    }
  });
});