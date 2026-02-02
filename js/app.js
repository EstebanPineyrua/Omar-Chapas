        // Variable global para almacenar productos
        let todosLosProductos = [];
        let categoriaActual = 'all';

        // Cargar productos desde JSON
        async function cargarProductos() {
            try {
                const response = await fetch('./data/productos.json');
                const data = await response.json();
                todosLosProductos = data.productos;
                renderizarProductos(todosLosProductos);
            } catch (error) {
                console.error('Error cargando productos:', error);
                document.getElementById('catalogGrid').innerHTML = 
                    '<p style="text-align: center; color: #666; padding: 40px;">Error cargando productos. Verificá que productos.json esté en la misma carpeta.</p>';
            }
        }

// Variables del carrusel
let currentSlide = 0;
const slideInterval = 5000; // Cambia cada 5 segundos
let autoplayInterval;

// Inicializar carrusel
function initCarousel() {
    const wrapper = document.getElementById('carouselWrapper');
    if (!wrapper) return;
    
    const slides = wrapper.children;
    const indicatorsContainer = document.getElementById('carouselIndicators');
    
    // Crear indicadores
    for (let i = 0; i < slides.length; i++) {
        const indicator = document.createElement('button');
        indicator.className = 'carousel-indicator';
        indicator.setAttribute('aria-label', `Ir a slide ${i + 1}`);
        indicator.onclick = () => goToSlide(i);
        indicatorsContainer.appendChild(indicator);
    }
    
    // Iniciar en el primer slide
    updateCarousel();
    
    // Iniciar autoplay
    startAutoplay();
    
    // Pausar autoplay al hacer hover
    const container = document.querySelector('.carousel-container');
    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', startAutoplay);
}

// Mover carrusel
function moveCarousel(direction) {
    const wrapper = document.getElementById('carouselWrapper');
    const slides = wrapper.children;
    
    currentSlide += direction;
    
    // Loop infinito
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    
    updateCarousel();
    resetAutoplay();
}

// Ir a slide específico
function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
    resetAutoplay();
}

// Actualizar visualización del carrusel
function updateCarousel() {
    const wrapper = document.getElementById('carouselWrapper');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    // Mover el wrapper
    wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Actualizar indicadores
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Autoplay
function startAutoplay() {
    stopAutoplay();
    autoplayInterval = setInterval(() => {
        moveCarousel(1);
    }, slideInterval);
}

function stopAutoplay() {
    if (autoplayInterval) {
        clearInterval(autoplayInterval);
    }
}

function resetAutoplay() {
    startAutoplay();
}
        

        // Renderizar productos en el DOM
        function renderizarProductos(productos) {
            const grid = document.getElementById('catalogGrid');
            grid.innerHTML = '';

            productos.forEach(producto => {
                const card = crearProductCard(producto);
                grid.appendChild(card);
            });
        }

        // Crear card de producto
        function crearProductCard(producto) {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.setAttribute('data-category', producto.categoria);

            const especsHTML = producto.especificaciones
                .map(espec => `<li>${espec}</li>`)
                .join('');

            card.innerHTML = `
                <div class="product-image">
                    <img src="${producto.imagen}" alt="${producto.nombre}" 
                         onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23ccc%22 stroke-width=%222%22><rect x=%223%22 y=%223%22 width=%2218%22 height=%2218%22 rx=%222%22/></svg>'">
                </div>
                <div class="product-content">
                    <h3 class="product-title">${producto.nombre}</h3>
                    <p class="product-description">${producto.descripcion}</p>
                    <div class="product-specs">
                        <div class="specs-title">Características</div>
                        <ul class="specs-list">
                            ${especsHTML}
                        </ul>
                    </div>
                    <button class="contact-btn" onclick="contactar('${producto.nombre}')">Consultar precio</button>
                </div>
            `;

            return card;
        }
        // Cargar carrusel desde JSON
    async function cargarCarousel() {
    try {
        const response = await fetch('./data/productos.json');
        const data = await response.json();
        const slides = data.slides;

        const wrapper = document.getElementById('carouselWrapper');
        const indicators = document.getElementById('carouselIndicators');

        wrapper.innerHTML = '';
        indicators.innerHTML = '';

        slides.forEach((slide, index) => {
            // Slide
            const slideDiv = document.createElement('div');
            slideDiv.className = 'carousel-slide';
            slideDiv.innerHTML = `
                <img src="${slide.imagen}" alt="${slide.titulo}">
                <div class="carousel-caption">
                    <h3>${slide.titulo}</h3>
                    <p>${slide.descripcion}</p>
                </div>
            `;
            wrapper.appendChild(slideDiv);

            // Indicador
            const indicator = document.createElement('button');
            indicator.className = 'carousel-indicator';
            indicator.onclick = () => goToSlide(index);
            indicators.appendChild(indicator);
        });

        updateCarousel();
        startAutoplay();

    } catch (err) {
        console.error('Error cargando carrusel:', err);
    }
}



        // Contactar
        function contactar(producto) {
        const telefono = "5491127266120";
        const mensaje = `Hola! Vengo desde la web y queria consultar sobre ${producto}`;
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");
        }

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Cargar productos al iniciar
        document.addEventListener('DOMContentLoaded', () => {
        cargarProductos();
        cargarCarousel();
        });
