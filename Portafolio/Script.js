function mostrarDetalles(proyectoId) {
    let detalleProyecto = document.getElementById('detalle-proyecto');
    
    if (proyectoId === 'proyecto1') {
        detalleProyecto.innerHTML = `
            <h2>Nombre del Proyecto 1</h2>
            <p>Descripción detallada del proyecto 1...</p>
                <video height="300" height="450" controls>
                <source src="VID/Animación de Personaje.mp4" type="Video Modelado 3D">
                </video>`;
    } else if (proyectoId === 'proyecto2') {
        detalleProyecto.innerHTML = `
            <h2>Nombre del Proyecto 2</h2>
            <p>Descripción detallada del proyecto 2...</p>
            <img src="imagen-proyecto2-detalle.jpg" alt="Proyecto 2">
        `;
    }

    document.getElementById('modal').style.display = 'flex';
}

function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}

let slideIndex = 0;
mostrarSlide(slideIndex);

// Automático: Cambiar imagen cada 3 segundos
setInterval(() => {
    moverSlide(1);
}, 3000); // Cambia el número de milisegundos si deseas un intervalo diferente

function moverSlide(n) {
    slideIndex += n;
    mostrarSlide(slideIndex);
}

function mostrarSlide(n) {
    let slides = document.getElementsByClassName('carousel-slide');
    if (n >= slides.length) {
        slideIndex = 0; // Volver al primer slide
    } else if (n < 0) {
        slideIndex = slides.length - 1; // Ir al último slide
    }

    // Muestra la diapositiva actual
    slides[slideIndex].style.display = "block";
}