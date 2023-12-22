document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("crearCategoriaBoton").addEventListener('click', function(event){
    event.preventDefault();
    var nombreValue = document.getElementById('nombre').value;
    var nombreInput = document.getElementById('nombre');
    var descripcionValue = document.getElementById('descripcion').value;
    var descripcionInput = document.getElementById('descripcion');
    var validacionLetras = /^[a-zA-Z]+$/;
        
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
    } else if (descripcionValue.length == 0) {
      alert('Por favor, digite la descripción.');
      descripcionInput.focus();
    } else if(descripcionValue.length > 500){
      alert('Ha superado el límite de caracteres. Por favor, digite nuevamente la descripción.');
      descripcionInput.value = '';
      descripcionInput.focus();
    } else {
      alert('Categoría creada satisfactoriamente');
      window.location.href = "../../views/views_users/index_admin.html";
    }
  });
});

function clearDescripcion(){
  document.getElementById('descripcion').value = "";
  document.getElementById('descripcion').focus();
}

function defaultDescripcion(){
  document.getElementById('descripcion').value = "Sin descripción.";
}