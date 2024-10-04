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