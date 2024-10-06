// Función para mostrar los detalles del proyecto
function mostrarDetalles(idProyecto) {
    // Muestra el modal
    const modal = document.getElementById("modal");
    modal.style.display = "block";

    // Cambia el contenido del modal basado en el proyecto
    if (idProyecto === 'proyecto1') {
        document.getElementById("modal-titulo").innerText = "Detalles del Proyecto 1";
        document.getElementById("modal-imagen").src = "img/Imagen_proyecto1.jpg"; // Cambia la ruta a tu imagen
        document.getElementById("modal-descripcion").innerText = "Aquí puedes agregar una descripción más detallada del proyecto 1...";
    } else if (idProyecto === 'proyecto2') {
        document.getElementById("modal-titulo").innerText = "Detalles del Proyecto 2";
        document.getElementById("modal-imagen").src = "img/Imagen_proyecto2.jpg"; // Cambia la ruta a tu imagen
        document.getElementById("modal-descripcion").innerText = "Aquí puedes agregar una descripción más detallada del proyecto 2...";
    }
}

// Función para cerrar el modal
function cerrarModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Oculta el modal
}

// Cierra el modal si se hace clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
let currentSlide = 0; // Índice del slide actual
const slides = document.querySelectorAll('.carousel-slide'); // Selecciona todos los slides

function moveSlide(direction) {
    // Oculta todos los slides
    slides.forEach(slide => slide.style.display = 'none');
    
    // Calcula el nuevo índice
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    
    // Muestra el nuevo slide
    slides[currentSlide].style.display = 'block';
}

// Inicializa el carrusel mostrando el primer slide
slides.forEach(slide => slide.style.display = 'none'); // Oculta todos los slides al inicio
slides[0].style.display = 'block'; // Muestra el primer slide inicialmente

