document.addEventListener("DOMContentLoaded", function () {
	// Obtener todos los elementos de imagen en la galería
	const images = document.querySelectorAll(".gallery img");
	const fullscreenContainer = document.getElementById(
		"fullscreenImageContainer"
	);
	const fullscreenImage = document.getElementById("fullscreenImage");
	const closeFullscreen = document.getElementById("closeFullscreen");

	// Añadir evento de clic a cada imagen
	// Añadir evento de clic a cada imagen (Galerías General y Wallpapers)
	// Se usa querySelectorAll para abarcar tanto .gallery img como .wallpaper-grid img
	const allImages = document.querySelectorAll(
		".gallery img, .wallpaper-grid img"
	);
	const downloadBtn = document.getElementById("downloadBtn");

	allImages.forEach((img) => {
		img.addEventListener("click", function () {
			fullscreenImage.src = this.src; // Establecer la imagen de pantalla completa

			// Actualizar botón de descarga
			if (downloadBtn) {
				downloadBtn.href = this.src;
			}

			fullscreenContainer.style.display = "flex"; // Mostrar el contenedor
			// Small delay to allow display:flex to apply before adding opacity class
			setTimeout(() => {
				fullscreenContainer.classList.add("visible");
			}, 10);
		});
	});

	// Función para cerrar el lightbox
	function closeLightbox() {
		fullscreenContainer.classList.remove("visible");
		setTimeout(() => {
			fullscreenContainer.style.display = "none";
		}, 300); // 300ms matches CSS transition
	}

	// Añadir evento de clic al botón de cerrar
	closeFullscreen.addEventListener("click", closeLightbox);

	// Cerrar la imagen de pantalla completa al hacer clic fuera de la imagen
	fullscreenContainer.addEventListener("click", function (e) {
		if (e.target === fullscreenContainer) {
			closeLightbox();
		}
	});
});
