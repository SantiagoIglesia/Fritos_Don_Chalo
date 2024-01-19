// FUNCIÓN HABILITAR BOTÓN CREAR PRODUCTO CON PROVEEDOR

/*document.addEventListener("DOMContentLoaded", function(){
  var radioButtons = document.querySelectorAll('input[name="createProductRadio"]');
  var crearButton = document.getElementById('crearProductoBoton');
  if (document.getElementById('noRadio').checked) {
    crearButton.disabled = true;
  }
  radioButtons.forEach(function(radio) {
    radio.addEventListener('change', habilitarButton);
  });
  function habilitarButton() {
    var radioNo = document.getElementById('noRadio');
    var radioSi = document.getElementById('siRadio');
    if (radioNo.checked) {
      crearButton.disabled = true;
    } else if (radioSi.checked) {
      crearButton.disabled = false; 
    }
  }
});*/

function validarFormulario(){
  var id = 4;
  var nombre_value = document.getElementById('nombre').value;
  var nombre_input = document.getElementById('nombre');
  var radio_no = document.getElementById('no_radio');
  var validacion_letras = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/;
  if(nombre_value.length == 0) {
    alert('Por favor, digite el nombre.');
    nombre_input.focus();
  } else if(nombre_value.length > 500){
    alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el nombre');
    nombre_input.value = '';
    nombre_input.focus();
  } else if(!validacion_letras.test(nombre_value)){
    alert('Por favor, digite un nombre correcto.');
    nombre_input.focus();
  } else {
    if (radio_no.checked){
      alert('Proveedor creado satisfactoriamente.');
      window.location.href = "../views_users/index_admin.html";
    } else {
      alert('Proveedor creado satisfactoriamente. Redirigiendo a crear producto...');
      localStorage.setItem('id_proveedor', id);
      localStorage.setItem('nombre_proveedor', nombre_value);
      window.location.href = "../views_products/create_product_with_provider.html?id_provider=" + id;
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("crear_proveedor_boton").addEventListener('click', function(event){
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

// FUNCIÓN BOTÓN CREAR PRODUCTO CON PROVEEDOR

/*document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("crearProductoBoton").addEventListener('click', function(event){
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
      alert('Proveedor creado satisfactoriamente. Redirigiendo a crear producto de proveedor...');
      window.location.href = "../views_products/create_product_with_provider.html";
    }
  });
});*/