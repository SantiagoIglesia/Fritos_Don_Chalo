function editForm(id){
  var nombre = document.getElementById('nombre_' + id).innerText;
  var descripcion = document.getElementById('descripcion_' + id).innerText;
  localStorage.setItem('edit_id', id);
  localStorage.setItem('edit_nombre', nombre);
  localStorage.setItem('edit_descripcion', descripcion);
  window.location.href = "edit_form_category.html?id=" + id;
};

function deleteCategory(id){
  var categoria = document.getElementById('nombre_' + id).parentNode;
  var categorias = document.querySelectorAll('.table tbody tr');
  if (confirm("¿Está seguro que desea borrar esta categoría?") == true) {
    categoria.style.display = 'none';
    var ultimaVisible = Array.from(categorias).every(function (cat) {
      return cat.style.display === 'none';
    });
    if (ultimaVisible) {
      window.location.href = "../views_errors/categories/view_empty.html";
    }
    alert("Categoría borrada con éxito.");
  } else {
    alert("Borrado cancelado.");
  }
};

document.addEventListener("DOMContentLoaded", function() {
  var urlParams = new URLSearchParams(window.location.search);
  var id = urlParams.get('id');
  var nombre = localStorage.getItem('edit_nombre');
  var descripcion = localStorage.getItem('edit_descripcion');
  localStorage.removeItem('edit_nombre');
  localStorage.removeItem('edit_descripcion');
  document.getElementById('id_input').value = id;
  document.getElementById('nombre_input').value = nombre;
  document.getElementById('descripcion_input').value = descripcion;
  document.getElementById("editarCategoriaBoton").addEventListener('click', function(event){
    event.preventDefault();
    alert('Categoría editada satisfactoriamente');
    window.location.href = "edit_categories.html";
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