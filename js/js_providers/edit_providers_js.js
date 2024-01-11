function editForm(id){
  var nombre = document.getElementById('nombre_' + id).innerText;
  localStorage.setItem('edit_id', id);
  localStorage.setItem('edit_nombre', nombre);
  window.location.href = "edit_form_provider.html?id=" + id;
};

function deleteProvider(id){
  var proveedor = document.getElementById('nombre_' + id).parentNode;
  var proveedores = document.querySelectorAll('.table tbody tr');
  if (confirm("¿Está seguro que desea borrar este proveedor?") == true) {
    proveedor.style.display = 'none';
    var ultimaVisible = Array.from(proveedores).every(function (des) {
      return des.style.display === 'none';
    });
    if (ultimaVisible) {
      window.location.href = "../views_errors/providers/view_empty.html";
    }
    alert("Proveedor borrado con éxito.");
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
  var editarProveedorBoton = document.getElementById("editarProveedorBoton");
  idInput.value = id;
  nombreInput.value = nombre;
  editarProveedorBoton.addEventListener('click', function(event){
    event.preventDefault();
    var nombreValue = document.getElementById('nombre_input').value;
    var nombreInput = document.getElementById('nombre_input');
    var validacionLetras = /^[a-zA-Z ]+$/;
    if(nombreValue.length == 0) {
      alert('Por favor, digite el nombre.');
      nombreInput.focus();
    } else if(nombreValue.length > 500){
      alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el nombre');
      nombreInput.value = '';
      nombreInput.focus();
    } else if(!validacionLetras.test(nombreValue)){
      alert('Por favor, digite un nombre correcto.');
      nombreInput.focus();
    } else {
      alert('Proveedor editado satisfactoriamente');
      window.location.href = "edit_providers.html";
    }
  });
});

function createProductWithProviderForm(id){
  var nombre = document.getElementById('nombre_' + id).innerText;
  localStorage.setItem('id_proveedor', id);
  localStorage.setItem('nombre_proveedor', nombre);
  window.location.href = "../views_products/create_product_with_provider.html?id_provider=" + id;
}