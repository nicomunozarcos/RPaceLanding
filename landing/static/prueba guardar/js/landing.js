document.addEventListener('DOMContentLoaded', () => {

    // Feature Cards Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards
    document.querySelectorAll('.feature-card, .feature-panel').forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    // Weather Data Simulation
    const weatherIcons = {
        sunny: '☀️',
        cloudy: '☁️',
        partlyCloudy: '⛅',
        rainy: '🌧️',
        storm: '⛈️'
    };

    // Simulate weather updates (in a real application, this would fetch from an API)
    function updateWeather() {
        const weatherDays = document.querySelectorAll('.weather-day');
        const conditions = Object.values(weatherIcons);
        
        weatherDays.forEach(day => {
            const randomTemp = Math.floor(Math.random() * (30 - 15) + 15);
            const randomIcon = conditions[Math.floor(Math.random() * conditions.length)];
            
            const iconElement = day.querySelector('.weather-icon');
            if (iconElement) {
                iconElement.textContent = randomIcon;
            }
        });
    }

    // Update weather every hour (in milliseconds)
    setInterval(updateWeather, 3600000);

    // Add this to your existing DOMContentLoaded event listener
    const carousel = {
        currentSlide: 0,
        slidesPerView: 3,
        slides: document.querySelectorAll('.testimonial-card'),
        container: document.querySelector('.testimonials-container'),
        dotsContainer: document.querySelector('.carousel-dots'),
        
        init() {
            this.createDots();
            this.updateSlidesPerView();
            
            document.querySelector('.prev').addEventListener('click', () => this.move('prev'));
            document.querySelector('.next').addEventListener('click', () => this.move('next'));
            
            window.addEventListener('resize', () => {
                this.updateSlidesPerView();
                this.updateCarousel();
            });
            
            // Optional: Auto-play
            setInterval(() => this.move('next'), 5000);
            
            this.updateCarousel();
        },
        
        createDots() {
            for (let i = 0; i < this.slides.length; i++) {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                dot.addEventListener('click', () => this.goToSlide(i));
                this.dotsContainer.appendChild(dot);
            }
        },
        
        updateSlidesPerView() {
            if (window.innerWidth <= 768) {
                this.slidesPerView = 1;
            } else if (window.innerWidth <= 1024) {
                this.slidesPerView = 2;
            } else {
                this.slidesPerView = 3;
            }
        },
        
        move(direction) {
            if (direction === 'next') {
                this.currentSlide = (this.currentSlide + 1) % (this.slides.length - this.slidesPerView + 1);
            } else {
                this.currentSlide = (this.currentSlide - 1 + this.slides.length - this.slidesPerView + 1) % (this.slides.length - this.slidesPerView + 1);
            }
            this.updateCarousel();
        },
        
        goToSlide(index) {
            this.currentSlide = Math.min(index, this.slides.length - this.slidesPerView);
            this.updateCarousel();
        },
        
        updateCarousel() {
            const offset = -this.currentSlide * (100 / this.slidesPerView);
            this.container.style.transform = `translateX(${offset}%)`;
            
            const dots = this.dotsContainer.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === this.currentSlide);
            });
        }
    };
    
    document.addEventListener('DOMContentLoaded', () => carousel.init());

// Initialize carousel
carousel.init();
});

document.addEventListener('DOMContentLoaded', () => {

    // Traducción
    const translations = {
        es: {
            "about.mission": "Entendiendo la dedicación que pones en el entrenamiento, fundamos RacePace para ayudarte a alcanzar tus objetivos con precisión y confianza.",
            "about.quote": "Como ultramaratonista profesional y corredor de trail, he enfrentado los desafíos de crear estrategias personalizadas para carreras. Las horas dedicadas a analizar rutas, resultados anteriores, capacidades físicas, equipo y clima pueden ser abrumadoras. A menudo, nos falta tiempo y recursos para desarrollar un plan efectivo, lo que lleva a resultados decepcionantes. Mis propios recuerdos están llenos de carreras que no terminé o en las que no rendí bien, y la frustración que siguió.",
            "about.signature": "-Equipo RacePace",
            "about.title": "Sobre Nosotros",
            "basicFeatures.ai.description": "Algoritmos inteligentes que analizan el terreno, la elevación y el clima para crear rutas óptimas.",
            "basicFeatures.ai.title": "Planificación de rutas con IA",
            "basicFeatures.recovery.description": "Planes de recuperación personalizados basados en la intensidad de tu entrenamiento y tus objetivos.",
            "basicFeatures.recovery.title": "Recuperación inteligente",
            "basicFeatures.tracking.description": "Monitorea tu progreso con seguimiento GPS avanzado y métricas de rendimiento.",
            "basicFeatures.tracking.title": "Seguimiento en tiempo real",
            "comparison.benefits": "Beneficios",
            "comparison.cta": "Empezar Ahora",
            "comparison.equipment": "Recomendación de Equipamiento",
            "comparison.highlight": "la mejor opción",
            "comparison.injury": "Prevención de Lesiones",
            "comparison.nutrition": "Plan de Nutrición e Hidratación",
            "comparison.others": "Otros",
            "comparison.pace": "Estrategia de Ritmo Personalizada",
            "comparison.plans": "Planes de Carrera Personalizados",
            "comparison.rating": "Más de 150 reseñas de 5 estrellas online.",
            "comparison.title": "¿Qué hace a RacePace",
            "comparison.training": "Guía de Entrenamiento",
            "demo.title.part1": "¿Cómo obtengo mi",
            "demo.title.part2": "Plan Personalizado?",
            "features.essentials.description": "Todo lo que necesitas saber sobre el terreno y las condiciones",
            "features.essentials.title": "Esenciales de Carrera",
            "features.nutrition.description": "Guía personalizada de nutrición para cada etapa de tu carrera",
            "features.nutrition.title": "Plan Nutricional",
            "features.prediction.description": "Análisis detallado de tus tiempos estimados por segmento",
            "features.prediction.title": "Predicción de Tiempos",
            "features.subtitle": "¡Esto es lo que obtendrás con cada plan de carrera!",
            "features.title": "Nuestras Características",
            "footer.contactTitle": "Contáctanos",
            "footer.copyright": "© 2024 RacePace Inc. Todos los derechos reservados.",
            "footer.emailPlaceholder": "Ingresa tu correo aquí",
            "footer.messagePlaceholder": "Tu Mensaje",
            "footer.namePlaceholder": "Tu Nombre",
            "footer.sendButton": "Enviar",
            "footer.subscribe": "Suscríbete a nuestro boletín:",
            "hero.cta": "Obtén tu Plan de Carrera",
            "hero.description": "Obtén planes de entrenamiento personalizados basados en tu nivel de condición física, objetivos y condiciones del terreno. Impulsado por IA avanzada.",
            "hero.title.part1": "Tu entrenador AI",
            "hero.title.part2": "de carrera de montaña",
            "nav.about": "Acerca de",
            "nav.contact": "Contacto",
            "nav.features": "Características",
            "nav.pricing": "Precios",
            "testimonials.text1": "\"La app ha mejorado significativamente mi planificación de carreras.\"",
            "testimonials.text2": "\"Me encanta la simplicidad y efectividad de esta herramienta.\"",
            "testimonials.text3": "\"Altamente recomendable para cualquiera que tenga problemas planificando su estrategia de carrera.\"",
            "testimonials.text4": "\"Esta aplicación ha revolucionado la forma en que planeo mi desarrollo profesional.\"",
            "testimonials.text5": "\"Increíblemente útil para establecer y seguir mis metas profesionales a largo plazo.\"",
            "testimonials.title": "Lo que dicen nuestros usuarios",
            "testimonials.user1": "Ana García, BCN",
            "testimonials.user2": "Carlos Ruiz, MAD",
            "testimonials.user3": "Laura Martín, VAL",
            "weather.friday": "Viernes",
            "weather.monday": "Lunes",
            "weather.saturday": "Sábado",
            "weather.sunday": "Domingo",
            "weather.title": "Condiciones del Terreno",
            "weather.tuesday": "Martes",
            "nav.login":"Iniciar Sesión",
            "nav.signup":"Registrarse",
            "nav.posts":"Publicaciones",
            "email.text":"Correo Electrónico",
            "password.text":"Contraseña",
            "login.text":"Iniciar Sesión",
            "username.text":"Nombre de usuario",
            "signup.text":"Registrarse",
            "posts.distance":"Distancia:",
            "posts.elevation":"Elevacion:",
            "posts.like":"♥ Me gusta:",
            "posts.comment":"💬 Comentar:",
            "posts.friends":"👥 Amigos:",
            "posts.follow":"Seguir:",
            "posts.suggested":"⛰️ Rutas Sugeridas:",
            "posts.seeall":"Ver todos",

        },
        en: {
            "about.mission": "Understanding the dedication you put into training, we founded RacePace to help you achieve your goals with precision and confidence.",
            "about.quote": "As a professional ultramarathoner and trail runner, I've faced the challenges of creating custom race strategies. The hours spent analyzing race routes, past results, physical capabilities, equipment, and weather can be overwhelming. Often, we lack the time and resources to develop an effective race plan, leading to disappointing race outcomes. My own memories are filled with the races I didn't finish or perform well in, and the frustration that followed.",
            "about.signature": "-RacePace Team",
            "about.title": "About Us",
            "basicFeatures.ai.description": "Intelligent algorithms that analyze terrain, elevation, and weather to create optimal routes.",
            "basicFeatures.ai.title": "AI Route Planning",
            "basicFeatures.recovery.description": "Personalized recovery plans based on your training intensity and goals.",
            "basicFeatures.recovery.title": "Smart Recovery",
            "basicFeatures.tracking.description": "Monitor your progress with advanced GPS tracking and performance metrics.",
            "basicFeatures.tracking.title": "Real-time Tracking",
            "comparison.benefits": "Benefits",
            "comparison.cta": "Start Now",
            "comparison.equipment": "Equipment Recommendations",
            "comparison.highlight": "the best choice",
            "comparison.injury": "Injury Prevention",
            "comparison.nutrition": "Nutrition and Hydration Plan",
            "comparison.others": "Others",
            "comparison.pace": "Personalized Pace Strategy",
            "comparison.plans": "Customized Race Plans",
            "comparison.rating": "Over 150+ 5 star reviews online.",
            "comparison.title": "What makes RacePace",
            "comparison.training": "Training Guidance",
            "demo.title.part1": "How do I get my",
            "demo.title.part2": "Personalized Plan?",
            "features.essentials.description": "Everything you need to know about the terrain and conditions",
            "features.essentials.title": "Race Essentials",
            "features.nutrition.description": "Personalized nutrition guide for each stage of your race",
            "features.nutrition.title": "Nutrition Plan",
            "features.prediction.description": "Detailed analysis of your estimated times per segment",
            "features.prediction.title": "Time Prediction",
            "features.subtitle": "This is what you'll get with each race plan!",
            "features.title": "Our Features",
            "footer.contactTitle": "Contact us",
            "footer.copyright": "© 2024 RacePace Inc. All rights reserved.",
            "footer.emailPlaceholder": "Enter your email here",
            "footer.messagePlaceholder": "Your Message",
            "footer.namePlaceholder": "Your Name",
            "footer.sendButton": "Send",
            "footer.subscribe": "Subscribe to our newsletter:",
            "hero.cta": "Get Your Race Plan",
            "hero.description": "Get personalized training plans based on your fitness level, goals, and terrain conditions. Powered by advanced AI.",
            "hero.title.part1": "Your AI mountain",
            "hero.title.part2": "running coach",
            "nav.about": "About",
            "nav.contact": "Contact",
            "nav.features": "Features",
            "nav.pricing": "Pricing",
            "testimonials.text1": "\"The app has significantly improved my race planning.\"",
            "testimonials.text2": "\"I love the simplicity and effectiveness of this tool.\"",
            "testimonials.text3": "\"Highly recommended for anyone struggling with planning their race strategy.\"",
            "testimonials.text4": "\"This app has revolutionized the way I plan my professional development.\"",
            "testimonials.text5": "\"Incredibly helpful in setting and tracking my long-term career goals.\"",
            "testimonials.title": "What our users say",
            "testimonials.user1": "Ana García, BCN",
            "testimonials.user2": "Carlos Ruiz, MAD",
            "testimonials.user3": "Laura Martín, VAL",
            "weather.friday": "Friday",
            "weather.monday": "Monday",
            "weather.saturday": "Saturday",
            "weather.sunday": "Sunday",
            "weather.title": "Terrain Conditions",
            "weather.tuesday": "Tuesday",
            "nav.login":"Log In",
            "nav.signup":"Sign Up",
            "nav.posts":"Posts",
            "email.text":"Email",
            "password.text":"Password",
            "login.text":"Log In",
            "username.text":"Username",
            "signup.text":"Sign Up",
            "posts.distance":"Distance:",
            "posts.elevation":"Elevation:",
            "posts.like":"♥ Like",
            "posts.comment":"💬 Comment",
            "posts.friends":"👥 Friends",
            "posts.follow":"Follow",
            "posts.seeall":"See All",
            "posts.suggested":"⛰️ Suggested Routes:",
        }
    };

    let currentLang = localStorage.getItem('currentLang') || 'es';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('currentLang', lang); // Guardar idioma en localStorage
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;

        // Actualizar la visibilidad de las banderas
        document.getElementById('es-flag').style.display = lang === 'es' ? 'inline' : 'none';
        document.getElementById('en-flag').style.display = lang === 'en' ? 'inline' : 'none';
    }

    // Cambiar idioma al hacer clic en el toggle
    document.getElementById('langToggle').addEventListener('click', () => {
        setLanguage(currentLang === 'es' ? 'en' : 'es');
    });

    // Aplicar el idioma al cargar la página
    setLanguage(currentLang);

    // Menu Toggle Functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');

    menuToggle.addEventListener('click', () => {
        navActions.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav')) {
            navLinks.classList.remove('active');
            navActions.classList.remove('active');
        }
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                navLinks.classList.remove('active');
                navActions.classList.remove('active');
            }
        });
    });
});


//chat 

const chatWidget = document.getElementById('chat-widget');
const chatToggle = document.getElementById('chat-toggle');
const chatContainer = document.getElementById('chat-container');
const chatClose = document.getElementById('chat-close');
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const raceRankings = document.getElementById('race-rankings');
const faqToggle = document.getElementById('faq-toggle');
const racesToggle = document.getElementById('races-toggle');
const faqContainer = document.getElementById('faq-container');
const racesContainer = document.getElementById('races-container');

chatToggle.addEventListener('click', toggleChat);
chatClose.addEventListener('click', toggleChat);
faqToggle.addEventListener('click', () => toggleSidebar(faqContainer));
racesToggle.addEventListener('click', () => toggleSidebar(racesContainer));

function toggleChat() {
  if (chatContainer.style.display === 'flex') {
    chatContainer.style.display = 'none';
    chatToggle.style.display = 'flex';
  } else {
    chatContainer.style.display = 'flex';
    chatToggle.style.display = 'none';
  }
}

function toggleSidebar(container) {
  if (container.style.display === 'block') {
    container.style.display = 'none';
  } else {
    faqContainer.style.display = 'none';
    racesContainer.style.display = 'none';
    container.style.display = 'block';
  }
}

const races = [
  { name: "City Marathon", distance: "42.2 km", date: "2023-09-15", elevation: "50m" },
  { name: "Trail Adventure", distance: "21 km", date: "2023-10-01", elevation: "500m" },
  { name: "Coastal Run", distance: "10 km", date: "2023-08-20", elevation: "20m" },
  { name: "Mountain Challenge", distance: "50 km", date: "2023-11-05", elevation: "2000m" },
  { name: "Park Fun Run", distance: "5 km", date: "2023-07-30", elevation: "10m" }
];

function sendMessage() {
  const message = userInput.value.trim();
  if (message) {
    addMessageToChat('user', message);
    processUserInput(message);
    userInput.value = '';
  }
}

function quickAnswer(topic) {
  addMessageToChat('user', topic);
  processUserInput(topic);
}

function addMessageToChat(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add(sender);
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function processUserInput(input) {
  let response;
  if (input.toLowerCase().includes('personalized race day plan')) {
    response = "A Personalized Race Day Plan is a custom-made strategy that helps trail runners prepare for their races. It considers your current fitness levels and specific race goals, including training plans, race-day tactics, nutrition advice, gear recommendations, and weather conditions.";
  } else if (input.toLowerCase().includes('strategy adapt')) {
    response = "Yes, the Elevated Race Strategy can adapt to changes in your goals or race details. We can adjust the plan based on new information or evolving needs to ensure it remains effective for you.";
  } else if (input.toLowerCase().includes('how personalized')) {
    response = "Our training plans and race strategies are highly personalized. We take into account your current fitness level, race goals, and individual needs to create a tailored approach that's specific to you.";
  } else if (input.toLowerCase().includes('assess my fitness')) {
    response = "We assess your current fitness through detailed information you provide. This includes your past performance, training data, and any specific metrics relevant to your race goals. This comprehensive approach allows us to create a plan that's right for your current level.";
  } else {
    response = "I'm sorry, I didn't understand that. You can ask about our Personalized Race Day Plan, how our strategy adapts, the level of personalization, or how we assess your fitness.";
  }
  addMessageToChat('bot', response);
  updateRankings(races);
}

function updateRankings(recommendedRaces) {
  raceRankings.innerHTML = '';
  recommendedRaces.forEach((race, index) => {
    const raceElement = document.createElement('div');
    raceElement.classList.add('race-item');
    raceElement.innerHTML = `
      <h3>${index + 1}. ${race.name}</h3>
      <p>Distance: ${race.distance}</p>
      <p>Date: ${race.date}</p>
      <p>Elevation: ${race.elevation}</p>
    `;
    raceRankings.appendChild(raceElement);
  });
}

// Initialize with all races
updateRankings(races);

// Add event listener for Enter key in input field
userInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});