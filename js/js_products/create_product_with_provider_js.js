function validarFormulario(id, nombre){
  var nombre_value = document.getElementById('nombre').value;
  var nombre_input = document.getElementById('nombre');
  var precio1_input = document.getElementById('precio1');
  var precio1_value = parseFloat(precio1_input.value.replace(/[^\d.]/g, ''));
  var precio2_input = document.getElementById('precio2');
  var precio2_value = parseFloat(precio2_input.value.replace(/[^\d.]/g, ''));
  var stock_value = document.getElementById('stock').value;
  var stock_input = document.getElementById('stock');
  var categoria_value = document.getElementById('categoria').selectedIndex;
  var categoria_select = document.getElementById('categoria');
  var destino_value = document.getElementById('destino').selectedIndex;
  var destino_select = document.getElementById('destino');
  var id_proveedor_value = document.getElementById('id_proveedor').value;
  var id_proveedor_input = document.getElementById('id_proveedor');
  var proveedor_value = document.getElementById('proveedor').value;
  var proveedor_input = document.getElementById('proveedor');
  var imagen_value = document.getElementById('imagen').value;
  var imagen_input = document.getElementById('imagen');
  var descripcion_value = document.getElementById('descripcion').value;
  var descripcion_textarea = document.getElementById('descripcion');
  var validacion_letras = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/;
  var validacion_numeros = /^[$0-9]+$/;
  var validacion_precio = /^[$0-9,]+$/;
  var validacion_imagenes = /(.jpg|.jpeg|.png|.gif)$/i;

  precio1_input.addEventListener("input", updateValue);
  function updateValue(e) {
    precio1_value.textContent = e.srcElement.value;
  }
  precio2_input.addEventListener("input", updateValue);
  function updateValue(e) {
    precio2_value.textContent = e.srcElement.value;
  }

  if (nombre_value.length == 0) {
    alert('Por favor, digite el nombre.');
    nombre_input.focus();
  } else if (nombre_value.length > 500){
    alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el nombre.');
    nombre_input.value = '';
    nombre_input.focus();
  } else if (!validacion_letras.test(nombre_value)){
    alert('Por favor, digite un nombre correcto.');
    nombre_input.focus();
  } else if (precio1_value.length == 0) {
    alert('Por favor, digite el precio.');
    precio1_input.focus();
  } else if (precio1_value > 9999999999){
    alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el precio.');
    precio1_input.value = '$0 COP';
    precio1_input.focus();
  } else if (precio1_value <= 0 || precio1_value < 100) {
    alert('Precio invalido, por favor digite un precio superior.');
    precio1_input.focus();
  } else if (!validacion_precio.test(precio1_value)){
    alert('Por favor, digite un precio correcto.');
    precio1_input.focus();
  } else if (precio2_value > 9999999999){
    alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el precio.');
    precio2_input.value = '$0 COP';
    precio2_input.focus();
  } else if (!validacion_precio.test(precio2_value)){
    alert('Por favor, digite un precio correcto.');
    precio2_input.focus();
  } else if (stock_value.length == 0) {
    alert('Por favor, digite el stock');
    stock_input.focus();
  } else if (stock_value.length > 11){
    alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el stock.');
    stock_input.value = '';
    stock_input.focus();
  } else if (!validacion_numeros.test(stock_value)){
    alert('Por favor, digite un stock correcto.');
    stock_input.focus();
  } else if (categoria_value == 0) {
    alert('Categoría inválida, por favor seleccione otra.');
    categoria_select.focus();
  } else if (categoria_value > 3) {
    alert('Categoría inválida.');
    categoria_select.focus();
  } else if (destino_value == 0) {
    alert('Destino inválido, por favor seleccione otro.');
    destino_select.focus();
  } else if (destino_value > 3) {
    alert('Destino inválido.');
    destino_select.focus();
  } else if (id_proveedor_value != id) {
    alert('ID de proveedor inválido.');
    id_proveedor_input.focus();
  } else if (proveedor_value != nombre) {
    alert('Nombre de proveedor inválido.');
    proveedor_input.focus();
  } else if(imagen_value.length == 0) {
    alert('Por favor, digite un archivo.');
    imagen_input.focus();
  } else if(!validacion_imagenes.exec(imagen_value)) {
    alert('Por favor, digite un archivo de imágen válido.');
    imagen_input.value = '';
    imagen_input.focus();
  } else if (descripcion_value.length == 0) {
    alert('Por favor, digite la descripción.');
    descripcion_textarea.focus();
  } else if(descripcion_value.length > 500){
    alert('Ha superado el límite de caracteres. Por favor, digite nuevamente la descripción.');
    descripcion_textarea.value = '';
    descripcion_textarea.focus();
  } else {
    alert('Producto creado y asociado a proveedor satisfactoriamente.');
    localStorage.removeItem('nombre_proveedor');
    window.location.href = "../../views/views_users/index_admin.html";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const formato_peso = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });

  var precio1_input = document.getElementById('precio1');
  precio1_input.value = formato_peso.format(0) + " COP";
  precio1_input.addEventListener('input', function(event){
    var precio1_value = event.target.value.replace(/[^\d.]/g, '');
    precio1_value = parseFloat(precio1_value)
    if (isNaN(precio1_value)) {
      precio1_value = 0;
    }
    event.target.value = formato_peso.format(precio1_value) + " COP";
  });

  var precio2_input = document.getElementById('precio2');
  precio2_input.value = formato_peso.format(0) + " COP";
  precio2_input.addEventListener('input', function(event){
    var precio2_value = event.target.value.replace(/[^\d.]/g, '');
    precio2_value = parseFloat(precio2_value)
    if (isNaN(precio2_value)) {
      precio2_value = 0;
    }
    event.target.value = formato_peso.format(precio2_value) + " COP";
  });

  precio1_input.addEventListener('keydown', function(event) {
    var cursor_posicion = precio1_input.selectionStart;
    if (event.key === 'Backspace' && cursor_posicion === 0) {
      event.preventDefault();
    }
    if (event.key === 'Backspace' && cursor_posicion === precio1_input.value.length) {
      event.preventDefault();
      var precio1_value = precio1_input.value.replace(/[^\d.]/g, '');
      precio1_value = parseFloat(precio1_value.slice(0, -1));
      if (!isNaN(precio1_value)) {
        precio1_input.value = formato_peso.format(precio1_value) + " COP";
      } else {
        precio1_input.value = formato_peso.format(0) + " COP";
      }
    }
  });

  precio2_input.addEventListener('keydown', function(event) {
    var cursor_posicion = precio2_input.selectionStart;
    if (event.key === 'Backspace' && cursor_posicion === 0) {
      event.preventDefault();
    }
    if (event.key === 'Backspace' && cursor_posicion === precio2_input.value.length) {
      event.preventDefault();
      var precio2_value = precio2_input.value.replace(/[^\d.]/g, '');
      precio2_value = parseFloat(precio2_value.slice(0, -1));
      if (!isNaN(precio2_value)) {
        precio2_input.value = formato_peso.format(precio2_value) + " COP";
      } else {
        precio2_input.value = formato_peso.format(0) + " COP";
      }
    }
  });

  var url_parametro = new URLSearchParams(window.location.search);
  var id = url_parametro.get('id_provider');
  var nombre = localStorage.getItem('nombre_proveedor');
  document.getElementById('id_proveedor').value = id;
  document.getElementById('proveedor').value = nombre;
  document.getElementById("crear_producto_proveedor_boton").addEventListener('click', function(event){
    event.preventDefault();
    validarFormulario(id, nombre);
  });

  document.addEventListener("keydown", function(event) {
    if (event.code === 'Enter') {
      event.preventDefault();
      validarFormulario(id, nombre);
    }
  });
});

var descripcion = "";

function clearDescripcion(){
  descripcion = document.getElementById('descripcion').value;
  document.getElementById('descripcion').value = "";
  document.getElementById('descripcion').focus();
}

function undoDescripcion(){
  document.getElementById('descripcion').value = descripcion;
}