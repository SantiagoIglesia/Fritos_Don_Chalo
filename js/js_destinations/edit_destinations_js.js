function editForm(id){
  var nombre = document.getElementById('nombre_' + id).innerText;
  localStorage.setItem('id', id);
  localStorage.setItem('nombre', nombre);
  window.location.href = "edit_form_destination.html?id=" + id;
};

function deleteDestination(id){
  var destino = document.getElementById('nombre_' + id).parentNode;
  var destinos = document.querySelectorAll('.table tbody tr');
  if (confirm("¿Está seguro que desea borrar este destino?") == true) {
    destino.style.display = 'none';
    var ultimo_visible = Array.from(destinos).every(function (des) {
      return des.style.display === 'none';
    });
    if (ultimo_visible) {
      window.location.href = "../views_errors/destinations/view_empty.html";
    }
    alert("Destino borrado con éxito.");
  } else {
    alert("Borrado cancelado.");
  }
};

function validarFormulario(id){
  var id_value = document.getElementById('id').value;
  var id_input = document.getElementById('id');
  var nombre_value = document.getElementById('nombre').value;
  var nombre_input = document.getElementById('nombre');
  var validacion_letras = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/;
        
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
    alert('Por favor, digite un nombre correcto.');
    nombre_input.focus();
  } else {
    alert('Destino editado satisfactoriamente');
    window.location.href = "edit_destinations.html";
  }
};

document.addEventListener("DOMContentLoaded", function() {
  var url_parametro = new URLSearchParams(window.location.search);
  var id = url_parametro.get('id');
  var nombre = localStorage.getItem('nombre');
  localStorage.removeItem('nombre');
  document.getElementById('id').value = id;
  document.getElementById('nombre').value = nombre;
  document.getElementById("editar_destino_boton").addEventListener('click', function(event){
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