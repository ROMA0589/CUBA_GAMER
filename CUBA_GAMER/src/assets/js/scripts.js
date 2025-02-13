// Aquí puedes agregar cualquier funcionalidad JavaScript adicional que necesites

// Ejemplo: Mostrar un mensaje de bienvenida en la consola
console.log("Bienvenido a 24/7 CUBA_GAMER");

// Ejemplo: Cambiar el tema de la página
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Ejemplo: Mostrar una alerta cuando se hace clic en un botón
document.getElementById('alertButton').addEventListener('click', function() {
    alert('¡Botón clicado!');
});

// Ejemplo: Validar un formulario
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (name === '' || email === '') {
        alert('Por favor, completa todos los campos.');
        return false;
    }
    return true;
}

// Puedes agregar más funciones y eventos según sea necesario
