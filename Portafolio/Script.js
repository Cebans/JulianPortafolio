function mostrarDetalles(proyectoId) {
    let detalleProyecto = document.getElementById('detalle-proyecto');
    
    if (proyectoId === 'proyecto1') {
        detalleProyecto.innerHTML = `
            <h2>Nombre del Proyecto 1</h2>
            <p>Descripción detallada del proyecto 1...</p>
            <img src="imagen-proyecto1-detalle.jpg" alt="Proyecto 1">
        `;
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
