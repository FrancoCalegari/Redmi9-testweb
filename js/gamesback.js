document.addEventListener('DOMContentLoaded', function () {
    const section = document.getElementById('dynamicBackgroundSection');
    const images = [
        '/img/gamesbackground/BloodStrikeBack1.jpg',
        '/img/gamesbackground/call-of-duty-mobileimg1.jpg',
        '/img/gamesbackground/MinecraftBack1.jpg',
        '/img/gamesbackground/call-of-duty-mobileimg2.jpg',
        '/img/gamesbackground/MinecraftBack2.jpg',
        // Añade más rutas de imágenes según sea necesario
    ];
    let currentIndex = 0;

    function changeBackgroundImage() {
        section.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeBackgroundImage, 5000); // Cambia la imagen cada 4 segundos

    // Inicializa el fondo con la primera imagen
    changeBackgroundImage();
});