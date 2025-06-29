# Sitio Web Educativo sobre Ciberseguridad

![Captura de pantalla del sitio web (ejemplo)](https://i.postimg.cc/vHfhSzC4/screenshot-sitioweb.png)

## 📝 Descripción del Proyecto

Este proyecto es un sitio web educativo de varias páginas, diseñado para enseñar a los usuarios sobre los fundamentos de la ciberseguridad. A través de un diseño interactivo y contenido bien estructurado, el sitio aborda desde conceptos básicos hasta amenazas comunes, ofreciendo recomendaciones prácticas para proteger la información personal en el mundo digital.

El sitio está construido con un enfoque en la experiencia de usuario, incorporando animaciones, contenido dinámico en ventanas modales y un quiz interactivo para reforzar el aprendizaje.

## ✨ Características Principales

*   **Diseño Responsivo**: Totalmente adaptable a diferentes tamaños de pantalla (móvil, tablet, escritorio) gracias a Bootstrap 5.
*   **Navegación Multi-página**: Estructura clara con secciones para Inicio, Información Relevante, Lecciones y Noticias.
*   **Contenido Interactivo con Modales (Bootbox.js)**:
    *   **Lecciones de Ciberseguridad**: Tarjetas interactivas que abren ventanas modales con información detallada sobre temas clave (contraseñas, 2FA, phishing, etc.).
    *   **Amenazas Comunes**: Explicaciones sobre malware, phishing y otras amenazas, presentadas en modales para una fácil lectura.
    *   **Formulario de Contacto**: Un botón de contacto abre un modal con un formulario que incluye validación de campos en tiempo real.
*   **Quiz Interactivo**: Un botón "Quiz" lanza una pregunta aleatoria sobre ciberseguridad, proporcionando feedback instantáneo sobre la respuesta del usuario.
*   **Animaciones Dinámicas**:
    *   **Contadores Animados**: Estadísticas que se animan y cuentan hacia arriba cuando el usuario se desplaza y las visualiza, implementado con `IntersectionObserver`.
    *   **Efectos de Entrada**: Las secciones aparecen con una sutil animación de barrido al cargar la página.
*   **Contenido Organizado**: Uso de pestañas (tabs) en la página de lecciones para clasificar el contenido en Fundamentos, Amenazas y Mejores Prácticas.

## 🚀 Tecnologías Utilizadas

*   **Frontend**:
    *   HTML5
    *   CSS3
    *   Bootstrap 5
    *   JavaScript (ES6+)
*   **Librerías**:
    *   **jQuery**: Para la manipulación del DOM y la gestión de eventos.
    *   **Bootbox.js**: Para la creación de diálogos y modales programáticos (contacto, lecciones, quiz).
    *   **Font Awesome**: Para la iconografía.
    *   **Google Fonts (Roboto)**: Para la tipografía del sitio.

## 📂 Estructura del Proyecto

```
M2-EvaluacionModulo/
├── css/
│   └── styles.css          # Estilos CSS personalizados
├── js/
│   └── scripts.js          # Lógica JavaScript (jQuery)
├── index.html              # Página de inicio
├── maincontent.html        # Página con información relevante y estadísticas
├── lecciones.html          # Página con lecciones detalladas y modales de contenido
├── modal.html              # Contenido del formulario de contacto (cargado dinámicamente en los sitios como una ventana modal)
└── README.md               # Este archivo
```

## Cómo Ejecutar el Proyecto Localmente

1.  **Clonar el repositorio**:
    ```bash
    git clone https://github.com/darksea48/M2-Evaluacion-Modulo
    ```
2.  **Navegar al directorio del proyecto**:
    ```bash
    cd <carpeta_donde_clones>
    ```
3.  **Abrir los archivos HTML**: Simplemente abre `index.html`, `maincontent.html` o `lecciones.html` en tu navegador web preferido. No se requiere un servidor web para la funcionalidad básica.

## Autor

-   **Douglas Suárez Zamorano**

---
