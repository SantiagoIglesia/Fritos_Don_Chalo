function capturarDatos(id, nombre_min, categoria){
  var nombre = nombre_min;
  var descripcion = document.getElementById('descripcion').innerText;
  var precio1 = document.getElementById('precio').innerText;
  var stock = document.getElementById('stock').innerText;
  var imagen = document.getElementById('imagen').innerText;
  var destino = document.getElementById('destino').innerText;
  var proveedor = document.getElementById('proveedor').innerText;
  var precio2 = 0;
  localStorage.setItem('id', id);
  localStorage.setItem('nombre', nombre);
  localStorage.setItem('descripcion', descripcion);
  localStorage.setItem('precio1', precio1);
  localStorage.setItem('stock', stock);
  localStorage.setItem('imagen', imagen);
  localStorage.setItem('categoria', categoria);
  localStorage.setItem('destino', destino);
  localStorage.setItem('proveedor', proveedor);
  localStorage.setItem('precio2', precio2);
}

function detectarCategoria(){
  var cat = document.getElementById('categoria').innerText;
  if (cat == "Fritos"){
    categoria = 1;
  } else if (cat == "Jugos"){
    categoria = 2;
  } else {
    categoria = 3;
  }
  return categoria;
}

document.addEventListener("DOMContentLoaded", function() {
  var url_parametro = new URLSearchParams(window.location.search);
  var id = url_parametro.get('id');
  const imagen = localStorage.getItem('imagen');
  var nombre_min = localStorage.getItem('nombre');
  var descripcion = localStorage.getItem('descripcion');
  var precio = localStorage.getItem('precio');
  const separador_precio = precio.split(" ");
  var ruta_imagen = imagen.replace(/\.\.\//g, "");
  nombre = nombre_min.toUpperCase();
  localStorage.removeItem('imagen');
  localStorage.removeItem('nombre');
  localStorage.removeItem('descripcion');
  localStorage.removeItem('precio');
  var img = document.getElementById('img');
  var div_nombre = document.getElementById('nombre');
  var div_id = document.getElementById('id');
  var div_descripcion = document.getElementById('descripcion');
  var div_precio = document.getElementById('precio');
  var div_imagen = document.getElementById('imagen');
  var editar_src = document.getElementById('editar_producto_link')
  var views = "../views_";
  var edit_form = "/edit_form_";
  var html_id = ".html?id=";
  var volver_src;
  img.src = imagen;
  div_nombre.innerHTML = nombre;
  div_id.innerHTML = id;
  div_descripcion.innerHTML = descripcion;
  div_precio.innerHTML = separador_precio[0] + " " + separador_precio[1];
  div_imagen.innerHTML = "Fritos_Don_Chalo/" + ruta_imagen;
  if (id == 1){
    document.getElementById('stock').innerHTML = 10;
    document.getElementById('categoria').innerHTML = "Fritos";
    document.getElementById('destino').innerHTML = "Venta";
    document.getElementById('proveedor').innerHTML = "Sin proveedor";
    editar_src.src = views + "products" + edit_form + "product" + html_id + id;
    editar_src.addEventListener('click', function(event){
      event.preventDefault();
      alert('Redirigiendo a editar el producto ' + nombre + " con el ID de producto " + id + ".\nEspere un momento...");
      categoria = detectarCategoria();
      console.log(categoria);
      capturarDatos(id, nombre_min, categoria);
      window.location.href = editar_src.src;
    });
  } else if (id == 2) {
    document.getElementById('stock').innerHTML = 12;
    //document.getElementById('categoria').innerHTML = "Fritos";
    document.getElementById('categoria').innerHTML = "Jugos";
    document.getElementById('destino').innerHTML = "Venta";
    document.getElementById('proveedor').innerHTML = "Sin proveedor";
    editar_src.src = views + "products" + edit_form + "product" + html_id + id;
    editar_src.addEventListener('click', function(event){
      event.preventDefault();
      alert('Redirigiendo a editar el producto ' + nombre + " con el ID de producto " + id + ".\nEspere un momento...");
      categoria = detectarCategoria();
      console.log(categoria);
      capturarDatos(id, nombre_min, categoria);
      window.location.href = editar_src.src;
    });
  }
});