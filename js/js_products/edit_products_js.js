function editForm(id){
  var nombre = document.getElementById('nombre_' + id).innerText;
  var precio1 = document.getElementById('precio1_' + id).innerText;
  var precio2 = document.getElementById('precio2_' + id).innerText;
  var stock = document.getElementById('stock_' + id).innerText;
  var categoria = document.getElementById('id_categoria_' + id).innerText;
  var destino = document.getElementById('id_destino_' + id).innerText;
  var proveedor = document.getElementById('id_proveedor_' + id).innerText;
  var imagen = document.getElementById('imagen_' + id).innerText;
  var descripcion = document.getElementById('descripcion_' + id).innerText;
  localStorage.setItem('id', id);
  localStorage.setItem('nombre', nombre);
  localStorage.setItem('precio1', precio1);
  localStorage.setItem('precio2', precio2);
  localStorage.setItem('stock', stock);
  localStorage.setItem('categoria', categoria);
  localStorage.setItem('destino', destino);
  localStorage.setItem('proveedor', proveedor);
  localStorage.setItem('descripcion', descripcion);
  localStorage.setItem('imagen', imagen);
  window.location.href = "edit_form_product.html?id=" + id;
};

function deleteProduct(id){
  var producto = document.getElementById('nombre_' + id).parentNode;
  var productos = document.querySelectorAll('.table tbody tr');
  if (confirm("¿Está seguro que desea borrar este producto?") == true) {
    producto.style.display = 'none';
    var ultimo_visible = Array.from(productos).every(function (pro) {
      return pro.style.display === 'none';
    });
    if (ultimo_visible) {
      window.location.href = "../views_errors/products/view_empty.html";
    }
    alert("Producto borrado con éxito.");
  } else {
    alert("Borrado cancelado.");
  }
};

function validarFormulario(id, imagen_predeterminada){
  var id_value = document.getElementById('id').value;
  var id_input = document.getElementById('id');
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
  var proveedor_value = document.getElementById('proveedor').selectedIndex;
  var proveedor_select = document.getElementById('proveedor');
  var descripcion_value = document.getElementById('descripcion').value;
  var descripcion_textarea = document.getElementById('descripcion');
  var imagen_input = document.getElementById('imagen');
  var imagen_value;
  if (imagen_input.disabled == true) {
    imagen_value = imagen_predeterminada;
  } else {
    imagen_value = document.getElementById('imagen').value;
  }
  var validacion_letras = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/;
  var validacion_numeros = /^[$0-9]+$/;
  var validacion_precio = /^[$0-9,]+$/;
  var validacion_imagenes = /(.jpg|.jpeg|.png|.gif)$/i;
  precio1_input.addEventListener("input", updateValuePrecio1);
  function updateValuePrecio1(e) {
    precio1_value.textContent = e.srcElement.value;
  }
  precio2_input.addEventListener("input", updateValuePrecio2);
  function updateValuePrecio2(e) {
    precio2_value.textContent = e.srcElement.value;
  }
  if(id_value.length == 0 || id_value != id) {
    alert('ID inválido.');
    id_input.focus();
  } else if(nombre_value.length == 0) {
    alert('Por favor, digite el nombre.');
    nombre_input.focus();
  } else if(nombre_value.length > 500){
    alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el nombre');
    nombre_input.value = '';
    nombre_input.focus();
  } else if(!validacion_letras.test(nombre_value)){
    alert('Por favor, digite un nombre correcto.');
    nombre_input.focus();
  } else if(precio1_value.length == 0) {
    alert('Por favor, digite el precio.');
    precio1_input.focus();
  } else if(precio1_value > 9999999999){
    alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el precio');
    precio1_input.value = '$0 COP';
    precio1_input.focus();
  } else if(precio1_value <= 0 || precio1_value < 100) {
    alert('Precio invalido, por favor digite un precio superior.');
    precio1_input.focus();
  } else if(!validacion_precio.test(precio1_value)){
    alert('Por favor, digite un precio correcto.');
    precio1_input.focus();
  } else if(precio2_value > 9999999999){
    alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el precio');
    precio2_input.value = '$0 COP';
    precio2_input.focus();
  } else if(!validacion_precio.test(precio2_value)){
    alert('Por favor, digite un precio correcto.');
    precio2_input.focus();
  } else if(stock_value.length == 0) {
    alert('Por favor, digite el stock');
    stock_input.focus();
  } else if(stock_value.length > 11){
    alert('Ha superado el límite de caracteres. Por favor, digite nuevamente el stock.');
    stock_input.value = '';
    stock_input.focus();
  } else if(!validacion_numeros.test(stock_value)){
    alert('Por favor, digite un stock correcto.');
    stock_input.focus();
  } else if(categoria_value == 0) {
    alert('Categoría inválida, por favor seleccione otra.');
    categoria_select.focus();
  } else if (categoria_value > 3) {
    alert('Categoría inválida.');
    categoria_select.focus();
  } else if(destino_value == 0) {
    alert('Destino inválido, por favor seleccione otro.');
    destino_select.focus();
  } else if (destino_value > 3) {
    alert('Destino inválido.');
    destino_select.focus();
  } else if(proveedor_value == 0) {
    alert('Proveedor inválido, por favor seleccione otro.');
    proveedor_select.focus();
  } else if (proveedor_value > 3) {
    alert('Proveedor inválido.');
    proveedor_select.focus();
  } else if(imagen_input.length == 0) {
    alert('Por favor, digite un archivo.');
    imagen_input.focus();
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
    if (imagen_input.disabled = true) {
      imagen_value = obtenerNombreArchivo(imagen_value);
    } else {
      imagen_value = obtenerNombreArchivo(document.getElementById('imagen').value);
    }
    var nombre_imagen = imagen_value.split('\\').pop().split('/').pop();
    var nombre_imagen_predeterminada = imagen_predeterminada.split('\\').pop().split('/').pop();
    if (nombre_imagen == nombre_imagen_predeterminada) {
      alert('Producto editado satisfactoriamente.' + nombre_imagen + '\nSu imágen es la misma.');
      window.location.href = "edit_products.html";
    } else {
      alert('Producto editado satisfactoriamente.\n' + nombre_imagen + '\nSu imágen cambió.');
      window.location.href = "edit_products.html";
    }
  }
}

function obtenerNombreArchivo(ruta) {
  var segmentos = ruta.split('/');
  return segmentos.pop();
}

function obtenerNombreArchivoDesdeInput(input) {
  var fullPath = input.value;
  var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
  var filename = fullPath.substring(startIndex);
  if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
    filename = filename.substring(1);
  }
  return filename;
}

document.addEventListener("DOMContentLoaded", function() {
  const formato_peso = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });
  var url_parametro = new URLSearchParams(window.location.search);
  var id = url_parametro.get('id');
  var nombre = localStorage.getItem('nombre');
  var precio1 = localStorage.getItem('precio1');
  precio1 = parseFloat(precio1.replace(/[^\d.]/g, ''));
  precio1 = formato_peso.format(precio1) + " COP";
  var precio2 = localStorage.getItem('precio2');
  precio2 = parseFloat(precio2.replace(/[^\d.]/g, ''));
  precio2 = formato_peso.format(precio2) + " COP";
  var stock_local = localStorage.getItem('stock');
  var stock = parseInt(stock_local);
  var categoria = localStorage.getItem('categoria');
  var destino = localStorage.getItem('destino');
  var proveedor = localStorage.getItem('proveedor');
  var imagen = localStorage.getItem('imagen');
  var ruta_imagen = "../../img/productos/" + imagen;
  var desactivar_imagen = document.getElementById('desactivar_imagen');
  var checkbox_input = document.querySelectorAll('input[name="imagen"]');
  var imagen_input = document.getElementById('imagen');
  var imagen_predeterminada;
  function deshabilitarInput() {
    if (desactivar_imagen.checked) {
      imagen_input.disabled = true;
      imagen_predeterminada = ruta_imagen;
    } else {
      imagen_input.disabled = false;
      imagen_predeterminada = "";
    }
  }
  desactivar_imagen.addEventListener('change', deshabilitarInput);
  deshabilitarInput();
  checkbox_input.forEach(function (checkbox) {
    checkbox.addEventListener('change', deshabilitarInput);
  });
  var descripcion = localStorage.getItem('descripcion');
  localStorage.removeItem('nombre');
  localStorage.removeItem('precio1');
  localStorage.removeItem('precio2');
  localStorage.removeItem('stock');
  localStorage.removeItem('categoria');
  localStorage.removeItem('destino');
  localStorage.removeItem('proveedor');
  localStorage.removeItem('imagen');
  localStorage.removeItem('descripcion');
  document.getElementById('id').value = id;
  document.getElementById('nombre').value = nombre;
  document.getElementById('descripcion').value = descripcion;
  document.getElementById('precio1').value = precio1
  document.getElementById('precio2').value = precio2
  document.getElementById('stock').value = stock;
  document.getElementById('categoria').selectedIndex = categoria;
  document.getElementById('destino').selectedIndex = destino;
  document.getElementById('proveedor').selectedIndex = proveedor;
  var precio1_input = document.getElementById('precio1');
  precio1 = parseFloat(precio1.replace(/[^\d.]/g, ''));
  precio1_input.value = formato_peso.format(precio1) + " COP";
  precio1_input.addEventListener('input', function(event){
    var precio1_value = event.target.value.replace(/[^\d.]/g, '');
    precio1_value = parseFloat(precio1_value)
    if (isNaN(precio1_value)) {
      precio1_value = 0;
    }
    event.target.value = formato_peso.format(precio1_value) + " COP";
  });

  var precio2_input = document.getElementById('precio2');
  precio2 = parseFloat(precio2.replace(/[^\d.]/g, ''));
  precio2_input.value = formato_peso.format(precio2) + " COP";
  precio2_input.addEventListener('input', function(event){
    var precio2_value = event.target.value.replace(/[^\d.]/g, '');
    precio2_value = parseFloat(precio2_value)
    if (isNaN(precio2_value)) {
      precio2_value = 0;
    }
    event.target.value = formato_peso.format(precio2_value) + " COP";
  });

  precio1_input.addEventListener('keydown', function(event) {
    var cursorPosition = precio1_input.selectionStart;
    if (event.key === 'Backspace' && cursorPosition === 0) {
      event.preventDefault();
    }
    if (event.key === 'Backspace' && cursorPosition === precio1_input.value.length) {
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
    var cursorPosition = precio2_input.selectionStart;
    if (event.key === 'Backspace' && cursorPosition === 0) {
      event.preventDefault();
    }
    if (event.key === 'Backspace' && cursorPosition === precio2_input.value.length) {
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
  
  document.getElementById("editar_categoria_boton").addEventListener('click', function(event){
    event.preventDefault();
    validarFormulario(id, imagen_predeterminada);
  });

  document.addEventListener("keydown", function(event) {
    if (event.code === 'Enter') {
      event.preventDefault();
      validarFormulario(id, imagen_predeterminada);
    }
  });
});

var descripcion = "";

function clearDescripcion(){
  descripcion = document.getElementById('descripcion_input').value;
  document.getElementById('descripcion_input').value = "";
  document.getElementById('descripcion_input').focus();
}

function undoDescripcion(){
  document.getElementById('descripcion_input').value = descripcion;
}