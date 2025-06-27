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

    // Se recomienda definir las funciones principales fuera del $(document).ready para una mejor organización.
    function abrirFormModal() {
        console.log("Función abrirFormModal() llamada."); // 1. Verifica que la función se ejecuta

        bootbox.dialog({
            title: "Contáctanos",
            size: 'medium',
            message: `
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <p class="text-justify">Envíanos tus datos para poder enviarte más información y contactarte para futuros materiales que pueden ser de gran utlidad para tí.</p>
                    </div>                
                    <div id="form-messages"></div>
                    <form id="contactForm" novalidate>
                        <div class="mb-3">
                            <label for="name" class="form-label">Nombre completo</label>
                            <input type="text" class="form-control" id="name" placeholder="Ingresa tu nombre completo" required>
                            <div class="invalid-feedback">
                                Por favor, ingresa tu nombre completo.
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Correo electrónico</label>
                            <input type="email" class="form-control" id="email" placeholder="Ingresa tu correo electrónico" required>
                            <div class="invalid-feedback">
                                Por favor, ingresa un correo electrónico válido.
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            `,
            buttons: {
                        ok: {
                            label: "Enviar",
                            className: 'btn-primary', // Cambiado a primary para consistencia
                            callback: function(){
                                console.log("Callback del botón 'Enviar' ejecutado."); // 3. Verifica el callback
                                // Seleccionamos los elementos dentro del contexto del diálogo actual
                                const dialog = $('.bootbox-body');
                                const nameInput = dialog.find('#name');
                                const emailInput = dialog.find('#email');
                                const formMessages = dialog.find('#form-messages');

                                // Limpiar estados de validación anteriores
                                nameInput.removeClass('is-invalid');
                                emailInput.removeClass('is-invalid');
                                formMessages.empty();

                                let isValid = true;

                                // --- Obtener y validar valores ---
                                const name = nameInput.val().trim();
                                const email = emailInput.val().trim();
                                console.log("Datos del formulario:", { name, email }); // Log de los datos

                                // 1. Validar Nombre
                                if (name === '') {
                                    nameInput.addClass('is-invalid');
                                    isValid = false;
                                }

                                // 2. Validar Email (formato básico)
                                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                if (email === '' || !emailRegex.test(email)) {
                                    emailInput.addClass('is-invalid');
                                    isValid = false;
                                }

                                // --- Mostrar resultado ---
                                if (isValid) {
                                    console.log("Formulario válido. Mostrando alerta de éxito.");
                                    // Si es válido, el diálogo se cerrará automáticamente.
                                    // Mostramos una alerta de éxito después.
                                    bootbox.alert({
                                        title: "Envío exitoso",
                                        message: "¡Gracias por contactarnos! Te enviaremos más información al correo señalado a la brevedad."
                                    });
                                    return true; // Permite que el diálogo se cierre
                                } else {
                                    console.log("Formulario inválido.");
                                    // Si hay errores, mostrar un mensaje y prevenir el cierre.
                                    formMessages.html('<div class="alert alert-danger">Por favor, corrige los campos marcados en rojo.</div>');
                                    return false; // Previene que el diálogo se cierre
                                }
                            }
                        },
                        cancel: {
                            label: "Cancelar",
                            className: 'btn-danger',
                            callback: function(){
                                console.log('Diálogo cancelado por el usuario.');
                                // No es necesario retornar true, el diálogo se cierra por defecto.
                            }
                        }
                    }  
                });
            }
            
    
    $(".contact-form-button").click(function(event) {
        event.preventDefault(); // Buena práctica por si el botón es una etiqueta <a>
        console.log("Botón '.contact-form-button' clickeado."); // 2. Verifica que el clic funciona
        abrirFormModal();
    });

    // --- VALIDACIÓN DEL FORMULARIO DE CONTACTO ---
    // Usamos delegación de eventos porque el formulario se carga dinámicamente.
    // El evento 'submit' se escucha en el modal, que es un elemento estático.
    /* $('#contactModal').on('submit', '#contactForm', function(event) {
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
            $('#contactModalContent').html('<div class="alert alert-success">¡Gracias por contactarnos! Te enviaremos más información al correo señalado a la brevedad.</div>');

            // Opcional: cerrar el modal después de un par de segundos
            setTimeout(function() {
                $('#contactModal').modal('hide');
            }, 3000);

        } else {
            // Si hay errores, mostrar un mensaje general de error
            $('#form-messages').html('<div class="alert alert-danger">Por favor, corrige los campos marcados en rojo.</div>');
        }
    });*/

});
