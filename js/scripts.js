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

    // Cargar contenido para el modal
    $('#contactModal').on('show.bs.modal', function (event) {
        var modal = $(this);
        // Load the content of modal.html into the modal-body
        modal.find('.modal-body').load('modal.html', function(response, status, xhr) {
            if (status == "error") {
                modal.find('.modal-body').html("<p>Error al cargar el formulario de contacto. Por favor, inténtalo de nuevo más tarde.</p>");
                console.error("Error loading modal.html: " + xhr.status + " " + xhr.statusText);
            }
        });
    });

    // --- VALIDACIÓN DEL FORMULARIO DE CONTACTO ---
    // Usamos delegación de eventos porque el formulario se carga dinámicamente.
    // El evento 'submit' se escucha en el modal, que es un elemento estático.
    $('#contactModal').on('submit', '#contactForm', function(event) {
        event.preventDefault(); // Prevenir el envío real del formulario

        // Limpiar estados de validación anteriores
        $('.form-control').removeClass('is-invalid');
        $('#form-messages').empty();

        let isValid = true;

        // --- Obtener y validar valores ---
        const name = $('#name').val().trim();
        const email = $('#email').val().trim();

        // 1. Validar Nombre
        if (name === '') {
            $('#name').addClass('is-invalid');
            isValid = false;
        }

        // 2. Validar Email (formato básico)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '' || !emailRegex.test(email)) {
            $('#email').addClass('is-invalid');
            isValid = false;
        }

        // --- Mostrar resultado ---
        if (isValid) {
            // Si todo es válido, mostrar mensaje de éxito
            $('.modal-body').html('<div class="alert alert-success">¡Gracias por contactarnos! Te enviaremos más información a la brevedad.</div>');

            // Opcional: cerrar el modal después de un par de segundos
            setTimeout(function() {
                $('#contactModal').modal('hide');
            }, 3000);

        } else {
            // Si hay errores, mostrar un mensaje general de error
            $('#form-messages').html('<div class="alert alert-danger">Por favor, corrige los campos marcados en rojo.</div>');
        }
    });

});


