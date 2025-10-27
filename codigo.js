document.addEventListener('DOMContentLoaded', (event) => {
    // 1. Obtiene el contenedor que se pausa (el slider completo)
    const slider = document.getElementById('logoSlider');
    // 2. Obtiene el elemento que se está animando (el track)
    const track = slider.querySelector('.logo-track');
    
    // Pausar y reanudar el scroll
    slider.addEventListener('mouseenter', () => {
        track.classList.add('paused');
    });
    
    slider.addEventListener('mouseleave', () => {
        track.classList.remove('paused');
    });

    // Opcional: Efecto visual al pasar el ratón sobre el icono
    track.querySelectorAll('.logo-item').forEach(logo => {
        logo.addEventListener('mouseenter', () => {
            // Cambia el color y agranda el icono al pasar el ratón
            logo.style.color = '#007bff'; 
            logo.style.transform = 'scale(1.2)'; 
        });
        logo.addEventListener('mouseleave', () => {
            // Regresa a los estilos originales
            logo.style.color = '#444';
            logo.style.transform = 'scale(1)';
        });
    });
});