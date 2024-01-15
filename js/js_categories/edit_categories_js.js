function editForm(id){
  var nombre = document.getElementById('nombre_' + id).innerText;
  var descripcion = document.getElementById('descripcion_' + id).innerText;
  localStorage.setItem('id', id);
  localStorage.setItem('nombre', nombre);
  localStorage.setItem('descripcion', descripcion);
  window.location.href = "edit_form_category.html?id=" + id;
};

function deleteCategory(id){
  var categoria = document.getElementById('nombre_' + id).parentNode;
  var categorias = document.querySelectorAll('.table tbody tr');
  if (confirm("¿Está seguro que desea borrar esta categoría?") == true) {
    categoria.style.display = 'none';
    var ultima_visible = Array.from(categorias).every(function (cat) {
      return cat.style.display === 'none';
    });
    if (ultima_visible) {
      window.location.href = "../views_errors/categories/view_empty.html";
    }
    alert("Categoría borrada con éxito.");
  } else {
    alert("Borrado cancelado.");
  }
};

function validarFormulario(id){
  var id_value = document.getElementById('id').value;
  var id_input = document.getElementById('id');
  var nombre_value = document.getElementById('nombre').value;
  var nombre_input = document.getElementById('nombre');
  var descripcion_value = document.getElementById('descripcion').value;
  var descripcion_input = document.getElementById('descripcion');
  var validacion_letras = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/;

  if(id_value.length == 0 || id_value != id) {
    alert('ID inválido.');
    id_input.focus();
  } else if(nombre_value.length == 0) {
    alert('Por favor, digite el nombre.');
    nombre_input.focus();
  } else if(nombre_value.length > 500) {
    alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el nombre');
    nombre_input.value = '';
    nombre_input.focus();
  } else if(!validacion_letras.test(nombre_value)){
    alert('Por favor, digite un nombre correcto.');
    nombre_input.focus();
  } else if (descripcion_value.length == 0) {
    alert('Por favor, digite la descripción.');
    descripcion_input.focus();
  } else if(descripcion_value.length > 500){
    alert('Ha superado el límite de caracteres. Por favor, digite nuevamente la descripción.');
    descripcion_input.value = '';
    descripcion_input.focus();
  } else {
    alert('Categoría editada satisfactoriamente');
    window.location.href = "edit_categories.html";
  }
};

document.addEventListener("DOMContentLoaded", function() {
  var url_parametro = new URLSearchParams(window.location.search);
  var id = url_parametro.get('id');
  var nombre = localStorage.getItem('nombre');
  var descripcion = localStorage.getItem('descripcion');
  localStorage.removeItem('nombre');
  localStorage.removeItem('descripcion');
  document.getElementById('id').value = id;
  document.getElementById('nombre').value = nombre;
  document.getElementById('descripcion').value = descripcion;
  document.getElementById("editarCategoriaBoton").addEventListener('click', function(event){
    event.preventDefault();
    validarFormulario(id)
  });

  document.addEventListener("keydown", function(event) {
    if (event.code === 'Enter') {
      event.preventDefault();
      validarFormulario(id);
    }
  });
});

var descripcion = "";

function clearDescripcion(){
  descripcion = document.getElementById('descripcion_input').value;
  document.getElementById('descripcion_input').value = "";
  document.getElementById('descripcion_input').focus();
}

function defaultDescripcion(){
  document.getElementById('descripcion_input').value = descripcion;
}