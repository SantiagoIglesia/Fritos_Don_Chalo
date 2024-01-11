function editForm(id){
  var nombre = document.getElementById('nombre_' + id).innerText;
  var descripcion = document.getElementById('descripcion_' + id).innerText;
  var precio1 = document.getElementById('precio_1_' + id).innerText;
  var precio2 = document.getElementById('precio_2_' + id).innerText;
  var imagen = document.getElementById('imagen_' + id).innerText;
  var stock = document.getElementById('stock_' + id).innerText;
  var id_categoria = document.getElementById('id_categoria_' + id).innerText;
  var categoria = document.getElementById('categoria_' + id).innerText;
  var id_destino = document.getElementById('id_destino_' + id).innerText;
  var destino = document.getElementById('destino_' + id).innerText;
  var id_proveedor = document.getElementById('id_proveedor_' + id).innerText;
  var proveedor = document.getElementById('proveedor_' + id).innerText;
  localStorage.setItem('edit_id', id);
  localStorage.setItem('edit_nombre', nombre);
  localStorage.setItem('edit_descripcion', descripcion);
  localStorage.setItem('edit_precio_1', precio1);
  localStorage.setItem('edit_precio_2', precio2);
  localStorage.setItem('edit_imagen', imagen);
  localStorage.setItem('edit_stock', stock);
  localStorage.setItem('edit_id_categoria', id_categoria);
  localStorage.setItem('edit_categoria', categoria);
  localStorage.setItem('edit_id_destino', id_destino);
  localStorage.setItem('edit_destino', destino);
  localStorage.setItem('edit_id_proveedor', id_proveedor);
  localStorage.setItem('edit_proveedor', proveedor);
  window.location.href = "edit_form_product.html?id=" + id;
};

function deleteProduct(id){
  var producto = document.getElementById('nombre_' + id).parentNode;
  var productos = document.querySelectorAll('.table tbody tr');
  if (confirm("¿Está seguro que desea borrar este producto?") == true) {
    producto.style.display = 'none';
    var ultimaVisible = Array.from(productos).every(function (cat) {
      return cat.style.display === 'none';
    });
    if (ultimaVisible) {
      window.location.href = "../views_errors/products/view_empty.html";
    }
    alert("Producto borrado con éxito.");
  } else {
    alert("Borrado cancelado.");
  }
};

document.addEventListener("DOMContentLoaded", function() {
  const formatterPeso = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });
  var urlParams = new URLSearchParams(window.location.search);
  var id = urlParams.get('id');
  var nombre = localStorage.getItem('edit_nombre');
  var descripcion = localStorage.getItem('edit_descripcion');
  var precio1 = localStorage.getItem('edit_precio_1');
  var precio2 = localStorage.getItem('edit_precio_2');
  var stock_local = localStorage.getItem('edit_stock');
  var stock = parseInt(stock_local);
  var id_categoria = localStorage.getItem('edit_id_categoria');
  var id_destino = localStorage.getItem('edit_id_destino');
  var id_proveedor = localStorage.getItem('edit_id_proveedor');
  precio1 = parseFloat(precio1.replace(/[^\d.]/g, ''));
  precio1 = formatterPeso.format(precio1) + " COP";
  precio2 = parseFloat(precio2.replace(/[^\d.]/g, ''));
  precio2 = formatterPeso.format(precio2) + " COP";
  localStorage.removeItem('edit_nombre');
  localStorage.removeItem('edit_descripcion');
  localStorage.removeItem('edit_precio_1');
  localStorage.removeItem('edit_precio_2');
  localStorage.removeItem('edit_stock');
  localStorage.removeItem('edit_id_categoria');
  localStorage.removeItem('edit_id_destino');
  localStorage.removeItem('edit_id_proveedor');
  document.getElementById('id_input').value = id;
  document.getElementById('nombre_input').value = nombre;
  document.getElementById('descripcion_input').value = descripcion;
  document.getElementById('precio_input_1').value = precio1
  document.getElementById('precio_input_2').value = precio2
  document.getElementById('stock_input').value = stock;
  document.getElementById('id_categoria_select').selectedIndex = id_categoria;
  document.getElementById('id_destino_select').selectedIndex = id_destino;
  document.getElementById('id_proveedor_select').selectedIndex = id_proveedor;
  var precio1Input = document.getElementById('precio_input_1');
  precio1 = parseFloat(precio1.replace(/[^\d.]/g, ''));
  precio1Input.value = formatterPeso.format(precio1) + " COP";
  precio1Input.addEventListener('input', function(event){
    var precio1Value = event.target.value.replace(/[^\d.]/g, '');
    precio1Value = parseFloat(precio1Value)
    if (isNaN(precio1Value)) {
      precio1Value = 0;
    }
    event.target.value = formatterPeso.format(precio1Value) + " COP";
  });
  var precio2Input = document.getElementById('precio_input_2');
  precio2 = parseFloat(precio2.replace(/[^\d.]/g, ''));
  precio2Input.value = formatterPeso.format(precio2) + " COP";
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
  document.getElementById("editarCategoriaBoton").addEventListener('click', function(event){
    event.preventDefault();
    var nombreValue = document.getElementById('nombre_input').value;
    var nombreInput = document.getElementById('nombre_input');
    var precio1Value = parseFloat(precio1Input.value.replace(/[^\d.]/g, ''));
    var precio2Value = parseFloat(precio2Input.value.replace(/[^\d.]/g, ''));
    var stockValue = document.getElementById('stock_input').value;
    var stockInput = document.getElementById('stock_input');
    var categoriaValue = document.getElementById('id_categoria_select').selectedIndex;
    var categoriaInput = document.getElementById('id_categoria_select');
    var destinoValue = document.getElementById('id_destino_select').selectedIndex;
    var destinoInput = document.getElementById('id_destino_select');
    var proveedorValue = document.getElementById('id_proveedor_select').selectedIndex;
    var proveedorInput = document.getElementById('id_proveedor_select');
    var descripcionValue = document.getElementById('descripcion_input').value;
    var descripcionInput = document.getElementById('descripcion_input');
    var imagenValue = document.getElementById('imagen_input').value;
    var imagenInput = document.getElementById('imagen_input');
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
      alert('Producto editado satisfactoriamente');
      window.location.href = "edit_products.html";
    }
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