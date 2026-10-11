// Ejemplo de función: Mostrar fecha actual
window.addEventListener('load', function() {
    const fecha = new Date();
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    console.log("Hoja de vida cargada el:", fecha.toLocaleDateString('es-ES', opciones));
    
    // Puedes agregar más funciones aquí
    console.log(" Tatiana Alzate López — Hoja de vida lista");
});