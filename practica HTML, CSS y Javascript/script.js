document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    document.getElementById('resultado').innerText = `Gracias por Registrarse :D`;
  });
  