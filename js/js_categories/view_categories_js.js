var categoriasGuardadas = localStorage.getItem('categorias');
if (categoriasGuardadas) {
  var categorias = JSON.parse(categoriasGuardadas);
  var categoriasContainer = document.getElementById('categorias_guardadas');
  categoriasContainer.innerHTML = '';
  categorias.forEach(function(categoria) {
    var listItem = document.createElement('table');
    listItem.innerHTML = '<thead><tr><th>Nombre</th><th>Descripción</th></tr></thead><tr><td>'+ categoria.nombre +'</td><td>'+ categoria.descripcion +'</td></tr>';
    categoriasContainer.appendChild(listItem);
  });
  console.log('Categorias almacenadas:', categorias);
} else {
  console.log('No hay categorias almacenadas en el localStorage.');
}