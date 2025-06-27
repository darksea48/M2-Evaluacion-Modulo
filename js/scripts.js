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

    // arrays de modal de lecciones
    var modalLesson = [
        {
            title: '<h5 class="modal-title"><i class="fas fa-key me-2"></i>Contraseñas fuertes</h5>',
            text: '<p>Una lección fundamental en seguridad digital es la importancia de crear contraseñas fuertes y únicas para cada cuenta. Una contraseña segura debe ser lo suficientemente compleja como para resistir ataques comunes, como el fuerza bruta o el phishing. Para lograrlo, se recomienda utilizar una combinación de letras mayúsculas y minúsculas, números y símbolos, así como evitar palabras comunes, fechas personales o secuencias predecibles. Además, una buena práctica es usar frases largas o generadores de contraseñas confiables.</p><p>Otra lección clave es no reutilizar contraseñas entre distintos servicios. Si una cuenta se ve comprometida, las credenciales repetidas pueden poner en riesgo todas las demás. Por ello, se aconseja complementar las contraseñas fuertes con el uso de gestores de contraseñas, que permiten almacenar de forma segura múltiples claves sin necesidad de memorizarlas.</p>',
        },
        {
            title: '<h5 class="modal-title"><i class="fas fa-shield-alt me-2"></i>Autenticación de Dos Factores (2FA)</h5>',
            text: '<p>El uso de la autenticación en dos factores (2FA) es una de las lecciones más importantes en ciberseguridad moderna. Consiste en añadir una segunda capa de verificación al proceso de inicio de sesión, además de la contraseña. Esto significa que, incluso si un atacante logra obtener la clave de acceso, no podrá ingresar sin el segundo factor, que suele ser un código temporal enviado al teléfono, un correo electrónico, una aplicación de autenticación o incluso una llave de seguridad física.</p><p>Una lección clave sobre el 2FA es que refuerza considerablemente la protección de cuentas personales y profesionales, especialmente en plataformas que manejan información sensible, como correos, redes sociales, bancos o servicios en la nube. También enseña a los usuarios a no depender únicamente de contraseñas y a diversificar sus métodos de verificación. Implementar el 2FA no solo es fácil, sino que representa una de las formas más efectivas y accesibles para prevenir accesos no autorizados y reducir el riesgo de suplantación de identidad.</p>',
        },
        {
            title: '<h5 class="modal-title"><i class="fas fa-database me-2"></i>Encriptación Básica</h5>',
            text: '<p>Una lección esencial sobre encriptación básica es entender que se trata de un proceso mediante el cual la información se convierte en un formato codificado que solo puede ser leído por quienes poseen la clave adecuada para descifrarla. Esta técnica protege los datos durante el almacenamiento o la transmisión, asegurando que, incluso si son interceptados, no puedan ser comprendidos ni utilizados por terceros no autorizados. Es una herramienta fundamental para mantener la confidencialidad y la integridad de la información en entornos digitales.</p><p>Otra enseñanza importante es que la encriptación no solo es utilizada por grandes empresas o expertos en seguridad, sino que está presente en herramientas cotidianas como aplicaciones de mensajería, correos electrónicos y servicios en la nube. Comprender conceptos básicos como la diferencia entre cifrado simétrico (una misma clave para cifrar y descifrar) y asimétrico (una clave pública y una privada) permite a los usuarios tomar decisiones más informadas sobre la protección de su información. En un mundo digital cada vez más interconectado, familiarizarse con la encriptación es una forma clave de ejercer una ciudadanía digital responsable y segura.</p>',
        },
        {
            title: '<h5 class="modal-title"><i class="fas fa-envelope-open-text me-2"></i>Phishing y Fraude</h5>',
            text: '<p>Una lección fundamental sobre phishing y fraude en línea es que los atacantes suelen aprovechar la confianza y el descuido de los usuarios para obtener información sensible, como contraseñas, números de tarjetas de crédito o datos personales. El phishing se presenta comúnmente a través de correos electrónicos, mensajes de texto o sitios web falsos que imitan servicios legítimos, invitando al usuario a hacer clic en enlaces maliciosos o proporcionar datos confidenciales. Reconocer señales de alerta, como errores ortográficos, mensajes alarmantes o solicitudes inusuales, es clave para prevenir caer en estas trampas.</p><p>Otra enseñanza clave es que la educación y la precaución constante son nuestras mejores defensas. Verificar siempre la dirección del remitente, evitar ingresar información sensible en sitios sin certificado de seguridad (https://) y desconfiar de mensajes que prometen premios, amenazan con consecuencias urgentes o piden confirmar credenciales son prácticas esenciales. Además, contar con herramientas de seguridad actualizadas y activar notificaciones de actividad sospechosa puede ayudar a detectar intentos de fraude antes de que causen daño. Aprender sobre phishing no solo protege nuestras cuentas, sino también nuestra identidad digital.</p>',
        },
        {
            title: '<h5 class="modal-title"><i class="fas fa-bug me-2"></i>Malware y Virus</h5>',
            text: '<p>Una lección clave sobre malware y virus es que estos programas maliciosos están diseñados para infiltrarse, dañar o tomar el control de dispositivos sin el consentimiento del usuario. Pueden llegar a través de archivos adjuntos en correos electrónicos, descargas de software no confiable, sitios web comprometidos o dispositivos externos infectados. Una vez dentro del sistema, pueden robar información, ralentizar el rendimiento del equipo, cifrar archivos para pedir un rescate (ransomware), o incluso abrir puertas traseras para futuros ataques.</p><p>Otra enseñanza importante es la necesidad de adoptar una actitud proactiva en cuanto a la seguridad digital. Mantener el sistema operativo y las aplicaciones actualizadas, contar con un buen software antivirus o antimalware, y evitar hacer clic en enlaces o descargar archivos de fuentes desconocidas, son prácticas esenciales. Además, realizar copias de seguridad periódicas y estar atentos a comportamientos inusuales en los dispositivos ayuda a detectar y mitigar posibles amenazas. Conocer cómo actúan el malware y los virus es el primer paso para prevenirlos y proteger nuestros datos personales y profesionales.</p>',
        },
        {
            title: '<h5 class="modal-title"><i class="fas fa-hand-holding-usd me-2"></i>Ransomware</h5>',
            text: '<p>Una lección fundamental sobre el ransomware es que se trata de un tipo de malware que cifra los archivos de un dispositivo o red, bloqueando el acceso a la información y exigiendo un rescate económico a cambio de la clave de descifrado. Este tipo de ataque puede afectar tanto a usuarios individuales como a organizaciones completas, y suele propagarse a través de correos electrónicos maliciosos, enlaces infectados o vulnerabilidades en sistemas desactualizados. Una vez activado, el ransomware puede paralizar completamente las operaciones digitales y poner en riesgo datos sensibles.</p><p>Otra enseñanza crucial es que la prevención es la mejor defensa contra este tipo de amenaza. Contar con copias de seguridad actualizadas, desconectadas de la red principal, es una medida vital para recuperar los datos sin ceder ante los atacantes. Además, es esencial mantener los sistemas y programas actualizados, utilizar software de seguridad confiable y capacitar a los usuarios para reconocer intentos de engaño, como archivos adjuntos sospechosos o mensajes urgentes que invitan a hacer clic. Entender cómo opera el ransomware permite actuar con rapidez y tomar decisiones informadas en caso de un incidente, minimizando el impacto y evitando caer en extorsiones.</p>',
        },
        {
            title: '<h5 class="modal-title""><i class="fas fa-wifi me-2"></i>Navegación Segura</h5>',
            text: '<p>Una lección esencial sobre la navegación segura es que, al estar conectados a internet, constantemente estamos expuestos a riesgos como robo de información, rastreo no autorizado o exposición a contenidos maliciosos. Por ello, es fundamental adoptar prácticas conscientes y responsables al navegar, como acceder solo a sitios web con certificados de seguridad (aquellos que comienzan con "https://"), evitar hacer clic en enlaces sospechosos o publicidades engañosas, y no proporcionar datos personales en páginas no verificadas o de dudosa procedencia.</p><p>Otra enseñanza importante es el valor de proteger la privacidad y mantener actualizado el navegador y las extensiones de seguridad. Utilizar bloqueadores de rastreadores y anuncios, activar funciones de navegación privada y revisar los permisos otorgados a sitios web contribuye a una experiencia más segura. Además, evitar redes Wi-Fi públicas no protegidas o usar una VPN en caso de necesitarlas, ayuda a proteger la información que se transmite. La navegación segura no solo previene fraudes y ataques, sino que también promueve una relación más consciente y controlada con la tecnología.</p>',
        },
        {
            title: '<h5 class="modal-title"><i class="fas fa-mobile-alt me-2"></i>Seguridad en Dispositivos Móviles</h5>',
            text: '<p>Nuestros dispositivos móviles se han convertido en una extensión de nuestra vida personal y profesional, por lo que protegerlos es tan importante como proteger una computadora. Dado que almacenan datos sensibles —como contactos, correos, contraseñas, fotos, aplicaciones bancarias y ubicación—, es esencial tomar medidas de seguridad básicas como establecer un código de bloqueo, activar la autenticación biométrica (huella o reconocimiento facial) y mantener el sistema operativo y las aplicaciones siempre actualizadas.</p><p>Otra enseñanza clave es evitar descargar aplicaciones fuera de las tiendas oficiales (como Google Play o App Store), ya que muchas amenazas ingresan a través de software malicioso disfrazado. También es importante revisar los permisos que cada aplicación solicita, desactivar conexiones como Bluetooth o Wi-Fi cuando no se usan, y habilitar funciones de rastreo o borrado remoto en caso de pérdida o robo. En un entorno donde los dispositivos móviles son constantemente blanco de ciberataques, adoptar estas prácticas permite mantener la privacidad, proteger la identidad digital y reducir significativamente los riesgos de intrusión o robo de información.</p>',
        },
        {
            title: '<h5 class="modal-title"><i class="fas fa-cloud-upload-alt me-2"></i>Copias de Seguridad</h5>',
            text: '<p>Una lección crucial en el ámbito de la seguridad digital es la importancia de realizar copias de seguridad de tus datos de forma regular. Las copias de seguridad —o <span class="fst-italic">backups</span>— permiten recuperar información en caso de pérdida, daño del dispositivo, ataques informáticos (como <span class="fst-italic">Ransomware</span>), errores humanos o fallos del sistema. Sin una copia de respaldo, cualquier incidente inesperado podría significar la pérdida irreversible de documentos importantes, fotos, archivos laborales o información personal.</p><p>Otra enseñanza valiosa es que una estrategia efectiva de respaldo no solo consiste en copiar los datos, sino en hacerlo de manera planificada y segura. Se recomienda aplicar la regla 3-2-1: mantener al menos tres copias de los datos, en dos tipos de almacenamiento diferentes (por ejemplo, disco duro externo y nube), y una copia fuera del entorno principal (fuera de línea o en la nube). Automatizar los respaldos, verificar que se completen correctamente y protegerlos con cifrado son prácticas que fortalecen la resiliencia digital. Hacer copias de seguridad no es solo una medida preventiva, sino una inversión en tranquilidad y continuidad.</p>',
        }
    ];

    // arrays de modals de amenazas
    var modalThreat = [
        {
            title: '<h5 class="modal-title">Malware (incluyendo <span class="fst-italic">ransomware</span>)</h5>',
            text: '<p>Software malicioso diseñado para dañar, infiltrarse o tomar el control de sistemas. El ransomware cifra archivos y exige un rescate para liberarlos, siendo uno de los tipos más devastadores. Otras variantes incluyen troyanos, spyware y adware, que roban información o espían al usuario.</p> <p><span class="fw-bold">Cómo mitigarlo:</span> <ul> <li>Mantener el sistema operativo y las aplicaciones siempre actualizadas.</li> <li>Usar software antivirus y antimalware de buena reputación.</li> <li>Evitar descargar archivos o programas de fuentes no confiables.</li> <li>Hacer copias de seguridad periódicas en ubicaciones seguras (offline o en la nube)</li> </ul></p>',
        },
        {
            title: '<h5 class="modal-title">Phishing</h5>',
            text: '<p>Técnica de engaño en la que atacantes se hacen pasar por entidades legítimas (bancos, servicios en línea) para obtener información sensible como contraseñas o datos bancarios. Generalmente se propaga a través de correos electrónicos, mensajes o sitios web falsificados.</p> <p><span class="fw-bold">Cómo mitigarlo:</span> <ul> <li>Verificar siempre el remitente y los enlaces antes de hacer clic.</li> <li>Desconfiar de mensajes alarmantes o urgentes que soliciten datos personales.</li> <li>Activar filtros antispam en el correo electrónico.</li> <li>Capacitarse y capacitar a los equipos en reconocer señales de phishing.</li> </ul></p>',
        },
        {
            title: '<h5 class="modal-title">Ataques de fuerza bruta y uso de credenciales filtradas</h5>',
            text: '<p>Consisten en probar combinaciones de contraseñas hasta adivinar la correcta, o en reutilizar credenciales robadas de otras filtraciones. Aprovechan contraseñas débiles o repetidas para acceder a cuentas personales y corporativas.</p> <p><span class="fw-bold">Cómo mitigarlo:</span> <ul> <li>Usar contraseñas largas, únicas y complejas para cada cuenta.</li> <li>Activar la autenticación en dos pasos (2FA) siempre que sea posible.</li> <li>Utilizar un gestor de contraseñas para almacenar y generar claves seguras.</li> <li>Cambiar contraseñas inmediatamente si se sospecha de un acceso no autorizado.</li> </ul></p>',
        },
        {
            title: '<h5 class="modal-title">Phishing</h5>',
            text: '<p>Ataques que se aprovechan de fallos de seguridad en software o sistemas operativos desactualizados. Los ciberdelincuentes utilizan estas debilidades para obtener acceso no autorizado o instalar malware en los dispositivos.</p> <p><span class="fw-bold">Cómo mitigarlo:</span> <ul> <li>Mantener todos los sistemas, aplicaciones y dispositivos actualizados con los parches de seguridad más recientes.</li> <li>Desinstalar programas innecesarios o que ya no se actualicen.</li> <li>Usar firewalls y herramientas de seguridad para monitorear el tráfico sospechoso.</li> <li>Limitar los permisos y el acceso solo a quienes realmente lo necesiten.</li> </ul></p>',
        }
    ];
    
    // funciones de modals de lecciones
    function modalLecciones(i) {
        bootbox.dialog({
            title: modalLesson[i].title,
            message: modalLesson[i].text,
            size: 'large',

    });
    };

    // funciones de modals de amenazas
    function modalAmenazas(i) {
        bootbox.dialog({
            title: modalThreat[i].title,
            message: modalThreat[i].text,
            size: 'large',

    });
    };

    // modals de lecciones
    $(".btn-lessons").click(function(event) {
        modalLecciones($(this).data('index'));
    });

    // modals de amenazas
    $(".btn-threats").click(function(event) {
        modalAmenazas($(this).data('index'));
    });
    
});
