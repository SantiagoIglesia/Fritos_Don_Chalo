function editForm(id){
  var nombre = document.getElementById('nombre_' + id).innerText;
  var apellido = document.getElementById('apellido_' + id).innerText;
  var correo = document.getElementById('correo_' + id).innerText;
  var telefono = document.getElementById('telefono_' + id).innerText;
  var rol = document.getElementById('rol_' + id).innerText;
  var usuario = document.getElementById('usuario_' + id).innerText;
  localStorage.setItem('id', id);
  localStorage.setItem('nombre', nombre);
  localStorage.setItem('apellido', apellido);
  localStorage.setItem('correo', correo);
  localStorage.setItem('telefono', telefono);
  localStorage.setItem('rol', rol);
  localStorage.setItem('usuario', usuario);
  window.location.href = "edit_form_user.html?id=" + id;
};

function deleteUser(id){
  var usuario = document.getElementById('nombre_' + id).parentNode;
  var usuarios = document.querySelectorAll('.table tbody tr');
  if (confirm("¿Está seguro que desea borrar este usuario?") == true) {
    usuario.style.display = 'none';
    var ultimo_visible = Array.from(usuarios).every(function (usu) {
      return usu.style.display === 'none';
    });
    if (ultimo_visible) {
      window.location.href = "../views_errors/users/view_empty.html";
    }
    alert("Usuario borrado con éxito.");
  } else {
    alert("Borrado cancelado.");
  }
};

function validarFormulario(id){
  var id_value = document.getElementById('id').value;
  var id_input = document.getElementById('id');
  var nombre_value = document.getElementById('nombre').value;
  var nombre_input = document.getElementById('nombre');
  var apellido_value = document.getElementById('apellido').value;
  var apellido_input = document.getElementById('apellido');
  var correo_value = document.getElementById('correo').value;
  var correo_input = document.getElementById('correo');
  var telefono_value = document.getElementById('telefono').value;
  var telefono_input = document.getElementById('telefono');
  var rol_value = document.getElementById('rol').selectedIndex;
  var rol_select = document.getElementById('rol');
  var usuario_value = document.getElementById('usuario').value;
  var usuario_input = document.getElementById('usuario');
  var validacion_letras = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/;
  var validacion_correo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var validacion_telefono = /^\d{10}$/;
  var validacion_usuario = /^[a-zA-Z1-9.-_ ]+$/;
  if(id_value.length == 0 || id_value != id) {
    alert('ID inválido.');
    id_input.focus();
  } else if(nombre_value.length == 0) {
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
  } else if(rol_value == 0) {
    alert('Rol inválido, por favor seleccione otro.');
    rol_select.focus();
  } else if(rol_value > 2) {
    alert('Rol inválido.');
    rol_select.focus();
  } else if(usuario_value.length == 0) {
    alert('Por favor, digite el usuario.');
    usuario_input.focus();
  } else if(usuario_value.length > 30){
    alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el usuario');
    usuario_input.value = '';
    usuario_input.focus();
  } else if(!validacion_usuario.test(usuario_value)){
    alert('Nombre de usuario inválido. por favor ingreselo nuevamente.');
  } else {
    alert('Usuario editado satisfactoriamente');
    window.location.href = "edit_users.html";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var url_parametro = new URLSearchParams(window.location.search);
  var id = url_parametro.get('id');
  var nombre = localStorage.getItem('nombre');
  var apellido = localStorage.getItem('apellido');
  var correo = localStorage.getItem('correo');
  var telefono = localStorage.getItem('telefono');
  var rol = localStorage.getItem('rol');
  var usuario = localStorage.getItem('usuario');
  localStorage.removeItem('nombre');
  localStorage.removeItem('apellido');
  localStorage.removeItem('correo');
  localStorage.removeItem('telefono');
  localStorage.removeItem('rol');
  localStorage.removeItem('usuario');
  document.getElementById('id').value = id;
  document.getElementById('nombre').value = nombre;
  document.getElementById('apellido').value = apellido;
  document.getElementById('correo').value = correo;
  document.getElementById('telefono').value = telefono;
  if (rol == "Administrador"){
    document.getElementById('rol').value = 1;
  } else {
    document.getElementById('rol').value = 2;
  };
  document.getElementById('usuario').value = usuario;
  document.getElementById("editar_usuario_boton").addEventListener('click', function(event){
    event.preventDefault();
    validarFormulario(id);
  });

  document.addEventListener("keydown", function(event) {
    if (event.code === 'Enter') {
      event.preventDefault();
      validarFormulario(id);
    }
  });
});