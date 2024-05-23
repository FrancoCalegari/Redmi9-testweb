document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los elementos de imagen en la galería
    const images = document.querySelectorAll('.gallery img');
    const fullscreenContainer = document.getElementById('fullscreenImageContainer');
    const fullscreenImage = document.getElementById('fullscreenImage');
    const closeFullscreen = document.getElementById('closeFullscreen');

    // Añadir evento de clic a cada imagen
    images.forEach(img => {
        img.addEventListener('click', function () {
            fullscreenImage.src = this.src; // Establecer la imagen de pantalla completa
            fullscreenContainer.style.display = 'flex'; // Mostrar el contenedor
        });
    });

    // Añadir evento de clic al botón de cerrar
    closeFullscreen.addEventListener('click', function () {
        fullscreenContainer.style.display = 'none'; // Ocultar el contenedor
    });

    // Cerrar la imagen de pantalla completa al hacer clic fuera de la imagen
    fullscreenContainer.addEventListener('click', function (e) {
        if (e.target === fullscreenContainer) {
            fullscreenContainer.style.display = 'none'; // Ocultar el contenedor
        }
    });
});