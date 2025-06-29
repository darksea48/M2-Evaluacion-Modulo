# Sitio Web Educativo sobre Ciberseguridad

![Captura de pantalla del sitio web (ejemplo)](https://i.postimg.cc/gkqZC533/screenshot-sitio.png)

Un sitio web interactivo y de varias páginas diseñado para educar a los usuarios sobre conceptos fundamentales de ciberseguridad de una manera atractiva y fácil de entender.

## ✨ Características Principales

Este proyecto ha sido actualizado con varias funcionalidades interactivas para mejorar la experiencia del usuario:

*   **Diseño Responsivo:** Totalmente adaptable a diferentes tamaños de pantalla (móvil, tablet, escritorio) gracias a Bootstrap 5.
*   **Navegación Dinámica:** La barra de navegación se ajusta y se fija en la parte superior en pantallas pequeñas para una mejor usabilidad.
*   **Contenido Interactivo con Modales:**
    *   **Lecciones de Ciberseguridad:** Tarjetas interactivas que abren ventanas modales (usando Bootbox.js) con información detallada sobre temas clave como contraseñas seguras, 2FA, phishing, etc.
    *   **Amenazas Comunes:** Una sección dedicada a explicar las ciberamenazas más frecuentes y cómo mitigarlas, también presentada en modales.
    *   **Formulario de Contacto:** Un botón de contacto abre un modal con un formulario que incluye validación de campos antes de enviar.
*   **Quiz Interactivo:** Un botón "Pon a Prueba tu Conocimiento" lanza un quiz con preguntas aleatorias sobre ciberseguridad, proporcionando feedback instantáneo sobre las respuestas.
*   **Animaciones Dinámicas:**
    *   **Contadores Animados:** Estadísticas que se animan y cuentan hacia arriba cuando el usuario se desplaza y las visualiza, implementado con `IntersectionObserver`.
    *   **Efectos Hover:** Retroalimentación visual en las tarjetas de características al pasar el cursor.
*   **Contenido Actualizado Automáticamente:** El año en el pie de página se actualiza automáticamente a través de JavaScript.

## 🚀 Tecnologías Utilizadas

*   **Frontend:**
    *   HTML5
    *   CSS3
    *   Bootstrap 5
    *   JavaScript (ES6+)
*   **Librerías:**
    *   jQuery: Para la manipulación del DOM y la gestión de eventos.
    *   Bootbox.js: Para la creación de diálogos y modales programáticos basados en Bootstrap.
    *   Font Awesome: Para la iconografía.
    *   Swiper.js: Para carruseles interactivos.

## 🔧 Instalación y Uso

Como es un proyecto de frontend estático, no requiere un proceso de instalación complejo.

1.  Clona o descarga este repositorio.
2.  Abre el archivo `index.html` en tu navegador web preferido.

> **Nota:** Todas las dependencias se cargan a través de CDNs, por lo que se requiere una conexión a internet para que el sitio funcione correctamente.

## 📂 Estructura del Proyecto

La estructura de archivos del proyecto es la siguiente:

```
.
├── index.html         # Archivo principal de la página
├── README.md          # Documentación del proyecto
├── css/
│   └── styles.css     # Hoja de estilos personalizados
└── js/
    └── scripts.js     # Lógica de la aplicación, interacciones y modales
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
