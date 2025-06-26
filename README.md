# Protege tu Mundo Digital

![Captura de pantalla del sitio web (ejemplo)](https://i.postimg.cc/gkqZC533/screenshot-sitio.png)

## Descripción del Proyecto

Este proyecto es un sitio web educativo diseñado para concienciar y enseñar a los usuarios sobre los fundamentos de la ciberseguridad y las mejores prácticas para proteger su información personal en el mundo digital. Ofrece información relevante, cifras impactantes y lecciones interactivas sobre temas como contraseñas seguras, autenticación de dos factores, phishing, malware y navegación segura.

El sitio está construido con un enfoque en la experiencia de usuario, incorporando animaciones sutiles y modales dinámicos para presentar el contenido de manera atractiva y accesible.

## Características Principales

-   **Diseño Responsivo**: Adaptado para verse bien en dispositivos de todos los tamaños (móviles, tablets, escritorio).
-   **Secciones Educativas**: Contenido organizado en pestañas sobre fundamentos, amenazas comunes y mejores prácticas de ciberseguridad.
-   **Modales Interactivos**: Cada lección se abre en un modal para una experiencia de lectura enfocada.
-   **Formulario de Contacto Dinámico**: Un modal de contacto que se carga dinámicamente y cuenta con validación de datos.
-   **Animaciones al Scroll**: Efectos de "barrido desde arriba" para las secciones principales y contadores animados que se activan al hacer scroll.
-   **Carrusel de Imágenes**: Un carrusel de imágenes en la página de inicio para una presentación visual atractiva.
-   **Navegación Intuitiva**: Menú de navegación claro y fácil de usar.

## Tecnologías Utilizadas

-   **HTML5**: Estructura del contenido.
-   **CSS3**: Estilos personalizados.
-   **Bootstrap 5.3**: Framework CSS para el diseño responsivo y componentes UI (Navbar, Cards, Modals, Tabs, Carousel, etc.).
-   **jQuery 3.7.1**: Para la manipulación del DOM, animaciones y la lógica de carga dinámica del modal de contacto.
-   **Font Awesome 6.5.2**: Iconos para mejorar la interfaz de usuario.
-   **Google Fonts (Roboto)**: Tipografía para el proyecto.
-   **Swiper.js 11**: Para el carrusel de imágenes (aunque actualmente no se está utilizando en el `index.html` principal, está enlazado).

## Estructura del Proyecto

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
