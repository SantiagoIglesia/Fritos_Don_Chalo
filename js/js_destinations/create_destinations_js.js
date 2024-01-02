document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("crearDestinoBoton").addEventListener('click', function(event){
    event.preventDefault();
    var nombreValue = document.getElementById('nombre').value;
    var nombreInput = document.getElementById('nombre');
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
      alert('Destino creada satisfactoriamente');
      window.location.href = "../../views/views_users/index_admin.html";
    }
  });
});
