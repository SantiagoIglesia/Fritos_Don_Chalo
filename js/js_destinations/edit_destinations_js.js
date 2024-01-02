function editForm(id){
  var nombre = document.getElementById('nombre_' + id).innerText;
  localStorage.setItem('edit_id', id);
  localStorage.setItem('edit_nombre', nombre);
  window.location.href = "edit_form_destination.html?id=" + id;
};

function deleteDestination(id){
  var destino = document.getElementById('nombre_' + id).parentNode;
  var destinos = document.querySelectorAll('.table tbody tr');
  if (confirm("¿Está seguro que desea borrar este destino?") == true) {
    destino.style.display = 'none';
    var ultimaVisible = Array.from(destinos).every(function (des) {
      return des.style.display === 'none';
    });
    if (ultimaVisible) {
      window.location.href = "../views_errors/destinations/view_empty.html";
    }
    alert("Destino borrado con éxito.");
  } else {
    alert("Borrado cancelado.");
  }
};

document.addEventListener("DOMContentLoaded", function() {
  var urlParams = new URLSearchParams(window.location.search);
  var id = urlParams.get('id');
  var nombre = localStorage.getItem('edit_nombre');
  localStorage.removeItem('edit_nombre');
  var idInput = document.getElementById('id_input');
  var nombreInput = document.getElementById('nombre_input');
  var editarDestinoBoton = document.getElementById("editarDestinoBoton");
  idInput.value = id;
  nombreInput.value = nombre;
  editarDestinoBoton.addEventListener('click', function(event){
    event.preventDefault();
    alert('Destino editado satisfactoriamente');
    window.location.href = "edit_destinations.html";
  });
});