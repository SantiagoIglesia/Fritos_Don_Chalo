function validarFormulario(){
  var nombre_value = document.getElementById('nombre').value;
  var nombre_input = document.getElementById('nombre');
  var validacion_letras = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/;
        
  if(nombre_value.length == 0) {
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
    alert('Destino creado satisfactoriamente.');
    window.location.href = "../../views/views_users/index_admin.html";
  }
};

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("crear_destino_boton").addEventListener('click', function(event){
    event.preventDefault();
  });

  document.addEventListener("keydown", function(event) {
    if (event.code === 'Enter') {
      event.preventDefault();
      validarFormulario();
    }
  });
});
