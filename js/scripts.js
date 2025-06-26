// Scripts

$(document).ready(function() {
    // Actualizar el año en el pie de página
    $('#current-year').text(new Date().getFullYear());

    // Efecto hover para las tarjetas de características (Por qué Ciberseguridad)
    $('.feature-card').hover(
        function() {
            $(this).find('i').css('color', '#0056b3'); // Cambiar color del icono al pasar el ratón
        },
        function() {
            $(this).find('i').css('color', '#007bff'); // Restaurar color original del icono
        }
    );

    // Animación de contador para la sección de estadísticas
    const counters = $(".counter");
    const options = {
        root: null, // Observa el viewport
        rootMargin: "0px",
        threshold: 0.5 // Ejecuta cuando el 50% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = $(entry.target);
                const dataTarget = target.data('target');
                let start = 0;
                const duration = 2000; // milisegundos
                const startTime = performance.now();

                function updateCount(currentTime) {
                    const elapsedTime = currentTime - startTime;
                    const progress = Math.min(elapsedTime / duration, 1);
                    const count = Math.floor(progress * dataTarget);

                    target.text(count);

                    if (progress < 1) {
                        requestAnimationFrame(updateCount);
                    }
                }
                requestAnimationFrame(updateCount);
                observer.unobserve(entry.target); // Dejar de observar una vez que la animación ha comenzado
            }
        });
    }, options);

    counters.each(function() {
        observer.observe(this);
    });
});

