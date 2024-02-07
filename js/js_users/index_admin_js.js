function redirect(){
  alert('Ok, gracias por elegir ;).\nRedirigiendo...');
}

var previousScrollPosition = window.scrollY;
  function handleScroll() {
    var currentScrollPosition = window.scrollY;
    if (currentScrollPosition > previousScrollPosition) {
    }
    previousScrollPosition = currentScrollPosition;
  }
  window.addEventListener('scroll', handleScroll);

function stayHere(elemento_scroll){
  elemento_scroll.scrollIntoView({ behavior: 'smooth' });
  handleScroll();
  alert('Ok, gracias por elegir quedarte.');
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("boton_scroll_categoria").addEventListener('click', function(event){
    event.preventDefault();
    elemento_scroll = document.getElementById('categorias');
    stayHere(elemento_scroll);
  });
  document.getElementById("boton_scroll_producto").addEventListener('click', function(event){
    event.preventDefault();
    elemento_scroll = document.getElementById('productos');
    stayHere(elemento_scroll);
  });
});

function viewProduct(id){
  var imagen = document.getElementById('imagen_' + id);
  var imagen_src = imagen.getAttribute('src');
  var nombre = document.getElementById('nombre_' + id).innerText;
  var descripcion = document.getElementById('descripcion_' + id).innerText;
  var precio = document.getElementById('precio_' + id).innerText;
  localStorage.setItem('imagen', imagen_src);
  localStorage.setItem('nombre', nombre);
  localStorage.setItem('descripcion', descripcion);
  localStorage.setItem('precio', precio);
  window.location.href = "../views_products/view_product.html?id=" + id;
}