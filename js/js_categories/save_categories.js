document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("crearCategoriaBoton").addEventListener('click', function(event){
    event.preventDefault();
    var form = document.getElementById("crear_categoria_formulario");
    var formData = new FormData(form);
    var jsonData = {};
    for (var [campo, valor_campo] of formData) {
      jsonData[campo] = valor_campo;
    }
    console.log(jsonData);
    var existingData = localStorage.getItem('categorias');
    var categorias = existingData ? JSON.parse(existingData) : [];
    categorias.push(jsonData);
    localStorage.setItem('categorias', JSON.stringify(categorias));
    console.log('Categoria guardada en la "base de datos".');
    });
});