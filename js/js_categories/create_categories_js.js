function validarFormulario(){
  var nombre_value = document.getElementById('nombre').value;
  var nombre_input = document.getElementById('nombre');
  var descripcion_value = document.getElementById('descripcion').value;
  var descripcion_textarea = document.getElementById('descripcion');
  var validacion_letras = /^[a-zA-Z ]+$/;
        
  if(nombre_value.length == 0) {
    alert('Por favor, digite el nombre.');
    nombre_input.focus();
  } else if(nombre_value.length > 500) {
    alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el nombre.');
    nombre_input.value = '';
    nombre_input.focus();
  } else if(!validacion_letras.test(nombre_value)) {
    alert('Por favor, digite un nombre correcto.');
    nombre_input.focus();
  } else if (descripcion_value.length == 0) {
    alert('Por favor, digite la descripción.');
    descripcion_textarea.focus();
  } else if(descripcion_value.length > 500) {
    alert('Ha superado el límite de caracteres. Por favor, digite nuevamente la descripción.');
    descripcion_textarea.value = '';
    descripcion_textarea.focus();
  } else {
    alert('Categoría creada satisfactoriamente.');
    window.location.href = "../../views/views_users/index_admin.html";
  }
};

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("crear_categoria_boton").addEventListener('click', function(event){
    event.preventDefault();
    validarFormulario();
  });

  document.addEventListener("keydown", function(event) {
    if (event.code === 'Enter') {
      event.preventDefault();
      validarFormulario();
    }
  });
});

var descripcion = "";

function clearDescripcion(){
  descripcion = document.getElementById('descripcion').value;
  document.getElementById('descripcion').value = "";
  document.getElementById('descripcion').focus();
}

function defaultDescripcion(){
  document.getElementById('descripcion').value = descripcion;
}