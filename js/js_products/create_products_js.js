document.addEventListener("DOMContentLoaded", function() {
  const formatterPeso = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });
  var precio1Input = document.getElementById('precio_1');
  precio1Input.value = formatterPeso.format(0) + " COP";
  precio1Input.addEventListener('input', function(event){
    var precio1Value = event.target.value.replace(/[^\d.]/g, '');
    precio1Value = parseFloat(precio1Value)
    if (isNaN(precio1Value)) {
      precio1Value = 0;
    }
    event.target.value = formatterPeso.format(precio1Value) + " COP";
  });
  var precio2Input = document.getElementById('precio_2');
  precio2Input.value = formatterPeso.format(0) + " COP";
  precio2Input.addEventListener('input', function(event){
    var precio2Value = event.target.value.replace(/[^\d.]/g, '');
    precio2Value = parseFloat(precio2Value)
    if (isNaN(precio2Value)) {
      precio2Value = 0;
    }
    event.target.value = formatterPeso.format(precio2Value) + " COP";
  });
  precio1Input.addEventListener('keydown', function(event) {
    var cursorPosition = precio1Input.selectionStart;
    if (event.key === 'Backspace' && cursorPosition === 0) {
      event.preventDefault();
    }
    if (event.key === 'Backspace' && cursorPosition === precio1Input.value.length) {
      event.preventDefault();
      var precio1Value = precio1Input.value.replace(/[^\d.]/g, '');
      precio1Value = parseFloat(precio1Value.slice(0, -1));
      if (!isNaN(precio1Value)) {
        precio1Input.value = formatterPeso.format(precio1Value) + " COP";
      } else {
        precio1Input.value = formatterPeso.format(0) + " COP";
      }
    }
  });
  precio2Input.addEventListener('keydown', function(event) {
    var cursorPosition = precio2Input.selectionStart;
    if (event.key === 'Backspace' && cursorPosition === 0) {
      event.preventDefault();
    }
    if (event.key === 'Backspace' && cursorPosition === precio2Input.value.length) {
      event.preventDefault();
      var precio2Value = precio2Input.value.replace(/[^\d.]/g, '');
      precio2Value = parseFloat(precio2Value.slice(0, -1));
      if (!isNaN(precio2Value)) {
        precio2Input.value = formatterPeso.format(precio2Value) + " COP";
      } else {
        precio2Input.value = formatterPeso.format(0) + " COP";
      }
    }
  });
  document.getElementById("crearProductoBoton").addEventListener('click', function(event){
    event.preventDefault();
    var nombreValue = document.getElementById('nombre').value;
    var nombreInput = document.getElementById('nombre');
    var precio1Value = parseFloat(precio1Input.value.replace(/[^\d.]/g, ''));
    var precio2Value = parseFloat(precio2Input.value.replace(/[^\d.]/g, ''));
    var stockValue = document.getElementById('stock').value;
    var stockInput = document.getElementById('stock');
    var categoriaValue = document.getElementById('id_categoria').selectedIndex;
    var categoriaInput = document.getElementById('id_categoria');
    var destinoValue = document.getElementById('id_destino').selectedIndex;
    var destinoInput = document.getElementById('id_destino');
    var proveedorValue = document.getElementById('id_proveedor').selectedIndex;
    var proveedorInput = document.getElementById('id_proveedor');
    var descripcionValue = document.getElementById('descripcion').value;
    var descripcionInput = document.getElementById('descripcion');
    var imagenValue = document.getElementById('imagen').value;
    var imagenInput = document.getElementById('imagen');
    var validacionLetras = /^[a-zA-Z ]+$/;
    var validacionNumeros = /^[$0-9]+$/;
    var validacionPrecio = /^[$0-9,]+$/;
    var validacionImagenes = /(.jpg|.jpeg|.png|.gif)$/i;
    precio1Input.addEventListener("input", updateValue);
    function updateValue(e) {
      precio1Value.textContent = e.srcElement.value;
    }
    precio2Input.addEventListener("input", updateValue);
    function updateValue(e) {
      precio2Value.textContent = e.srcElement.value;
    }
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
    } else if(precio1Value.length == 0) {
      alert('Por favor, digite el precio.');
      precio1Input.focus();
    } else if(precio1Value > 9999999999){
      alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el precio');
      precio1Input.value = '$0 COP';
      precio1Input.focus();
    } else if(precio1Value <= 0 || precio1Value < 100) {
      alert('Precio invalido, por favor digite un precio superior.');
      precio1Input.focus();
    } else if(!validacionPrecio.test(precio1Value)){
      alert('Por favor, digite un precio correcto.');
      precio1Input.focus();
    } else if(precio2Value > 9999999999){
      alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el precio');
      precio2Input.value = '$0 COP';
      precio2Input.focus();
    } else if(!validacionPrecio.test(precio2Value)){
      alert('Por favor, digite un precio correcto.');
      precio2Input.focus();
    } else if(stockValue.length == 0) {
      alert('Por favor, digite el stock');
      stockInput.focus();
    } else if(stockValue.length > 11){
      alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el stock.');
      stockInput.value = '';
      stockInput.focus();
    } else if(!validacionNumeros.test(stockValue)){
      alert('Por favor, digite un stock correcto.');
      stockInput.focus();
    } else if(categoriaValue == 0) {
      alert('Categoría inválida, por favor seleccione otra.');
      categoriaInput.focus();
    } else if(destinoValue == 0) {
      alert('Destino inválido, por favor seleccione otro.');
      destinoInput.focus();
    } else if(proveedorValue == 0) {
      alert('Proveedor inválido, por favor seleccione otro.');
      proveedorInput.focus();
    } else if (descripcionValue.length == 0) {
      alert('Por favor, digite la descripción.');
      descripcionInput.focus();
    } else if(descripcionValue.length > 500){
      alert('Ha superado el límite de caracteres. Por favor, digite nuevamente la descripción.');
      descripcionInput.value = '';
      descripcionInput.focus();
    } else if(imagenValue.length == 0) {
      alert('Por favor, digite un archivo.');
      imagenInput.focus();
    } else if(!validacionImagenes.exec(imagenValue)) {
      alert('Por favor, digite un archivo de imágen válido.');
      imagenInput.value = '';
      imagenInput.focus();
    } else {
      alert('Producto creado satisfactoriamente.');
      window.location.href = "../../views/views_users/index_admin.html";
    }
  });
});

var descripcion = "";

function clearDescripcion(){
  descripcion = document.getElementById('descripcion').value;
  document.getElementById('descripcion').value = "";
  document.getElementById('descripcion').focus();
}

function defaultDescripcion(){
  document.getElementById('descripcion').value = descripcion;
}