const mainMenu = document.getElementById('main-menu');
const modalBackdrop = document.getElementById('modal-backdrop');
const contentSection = document.getElementById('content-section');
const contentDiv = document.getElementById('content');
const headerBackBtn = document.getElementById('header-back-btn');
const gestionesBtn = document.getElementById('gestiones-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const carouselCloseBtn = document.getElementById('carousel-close-btn');

// Use event delegation for modal cards to handle dynamic content
document.addEventListener('click', (event) => {
  const card = event.target.closest('.card');
  if (card && card.hasAttribute('data-section')) {
    const section = card.getAttribute('data-section');
    showSection(section);
  }
});

// Carousel functionality for main cards
let currentCardIndex = 0;
const mainCards = document.querySelectorAll('.main-card');

document.querySelectorAll('.main-card').forEach((card, index) => {
  card.addEventListener('click', () => {
    currentCardIndex = index;
    showCardCarousel(index);
  });
});

function showCardCarousel(index) {
  const carouselModal = document.getElementById('card-carousel-modal');
  const carouselContent = document.getElementById('carousel-content');

  let cardContent = '';

  if (index === 3) { // Beneficios card
    cardContent = `
      <div class="carousel-card">
        <h2>Beneficios</h2>
        <div class="carousel-image">
          <img src="beneficios.png" alt="Beneficios" class="carousel-img">
        </div>
      </div>
    `;
  } else {
    const cardData = [
      {
        icon: 'business',
        title: 'Nosotros',
        image: 'presentacion.jpg',
        description: 'Aprende más sobre quiénes somos y nuestra misión'
      },
      {
        icon: 'timeline',
        title: 'Hitos',
        image: 'hitos.jpg',
        description: 'Conoce los momentos más importantes de nuestra historia'
      },
      {
        icon: 'account_tree',
        title: 'Organigrama',
        image: 'organigrama.jpg',
        description: 'Descubre la estructura organizacional de Tech Human'
      },
      {
        icon: 'volunteer_activism',
        title: 'Acciones comunitarias',
        image: 'acciones_comunitarias.jpg',
        description: 'Humanizar el trabajo, transformar la comunidad.'
      }
    ];

    const card = cardData[index > 2 ? index - 1 : index];
    cardContent = `
      <div class="carousel-card">
        <h2>${card.title}</h2>
        <div class="carousel-image">
          ${card.image ? `<img src="${card.image}" alt="${card.title}" class="carousel-img">` : `<span class="material-icons">${card.icon}</span>`}
        </div>
        <p>${card.description}</p>
      </div>
    `;
  }

  carouselContent.innerHTML = cardContent;
  carouselModal.classList.add('show');
}

function closeCardCarousel() {
  const carouselModal = document.getElementById('card-carousel-modal');
  carouselModal.classList.remove('show');
}

function navigateCard(direction) {
  const totalCards = mainCards.length;
  currentCardIndex = (currentCardIndex + direction + totalCards) % totalCards;
  showCardCarousel(currentCardIndex);
}

function goBack() {
  const layoutContainer = document.querySelector('.layout-container');
  if (layoutContainer) {
    layoutContainer.style.display = 'flex';
  }
  contentSection.classList.remove('visible');
  contentSection.classList.add('hidden');
  mainMenu.classList.remove('hidden');
  modalBackdrop.classList.remove('hidden');
  mainMenu.style.display = 'flex';
  modalBackdrop.style.display = 'block';
  if (headerBackBtn) {
    headerBackBtn.classList.add('hidden');
  }
}

if (headerBackBtn) {
  headerBackBtn.addEventListener('click', goBack);
}

if (gestionesBtn) {
  gestionesBtn.addEventListener('click', showMainMenu);
}

if (closeModalBtn) {
  closeModalBtn.addEventListener('click', closeModal);
}

if (modalBackdrop) {
  modalBackdrop.addEventListener('click', closeModal);
}

// Carousel event listeners
const carouselPrevBtn = document.getElementById('carousel-prev-btn');
const carouselNextBtn = document.getElementById('carousel-next-btn');

if (carouselCloseBtn) {
  carouselCloseBtn.addEventListener('click', closeCardCarousel);
}

if (carouselPrevBtn) {
  carouselPrevBtn.addEventListener('click', () => navigateCard(-1));
}

if (carouselNextBtn) {
  carouselNextBtn.addEventListener('click', () => navigateCard(1));
}

function showMainMenu() {
  mainMenu.classList.remove('hidden');
  modalBackdrop.classList.remove('hidden');
  mainMenu.style.display = 'flex';
  modalBackdrop.style.display = 'block';
  document.body.classList.add('modal-open');
}

function closeModal() {
  mainMenu.classList.add('hidden');
  modalBackdrop.classList.add('hidden');
  mainMenu.style.display = 'none';
  modalBackdrop.style.display = 'none';
  document.body.classList.remove('modal-open');
}

function getSectionContent(section) {
  const contenido = {
    documentacion: `
      <h2>Listado de documentos</h2>
      <div class="documentacion-container">
        <div class="doc-card">
          <h3 class="doc-title">CONTRATO</h3>
          <div class="doc-info">
            <p><strong>Fecha:</strong> 2025-08-12</p>
            <p><strong>Cliente:</strong> TECH HUMAN®</p>
            <p><strong>Fecha de firma:</strong> 2025-08-12</p>
          </div>
          <div class="doc-footer">
            <span class="status-badge firmado">FIRMADO</span>
            <div class="action-buttons">
              <button class="action-btn btn-ver">VER</button>
              <button class="action-btn btn-download">
                <span class="material-icons">cloud_download</span>
              </button>
              <button class="action-btn btn-play">
                <span class="material-icons">play_arrow</span>
              </button>
            </div>
          </div>
        </div>

        <div class="doc-card">
          <h3 class="doc-title">ALTA TEMPRANA</h3>
          <div class="doc-info">
            <p><strong>Fecha:</strong> 2025-08-12</p>
            <p><strong>Cliente:</strong> TECH HUMAN® </p>
            <p><strong>Fecha de firma:</strong> 2025-08-12</p>
          </div>
          <div class="doc-footer">
            <span class="status-badge firmado">FIRMADO</span>
            <div class="action-buttons">
              <button class="action-btn btn-ver">VER</button>
              <button class="action-btn btn-download">
                <span class="material-icons">cloud_download</span>
              </button>
              <button class="action-btn btn-play">
                <span class="material-icons">play_arrow</span>
              </button>
            </div>
          </div>
        </div>

        <div class="doc-card">
          <h3 class="doc-title">CAPACITACION SEGURIDAD E HIGIENE</h3>
          <div class="doc-info">
            <p><strong>Fecha:</strong> 2025-08-12</p>
            <p><strong>Cliente:</strong> TECH HUMAN®</p>
            <p><strong>Fecha de firma:</strong> 2025-08-12</p>
          </div>
          <div class="doc-footer">
            <span class="status-badge firmado">FIRMADO</span>
            <div class="action-buttons">
              <button class="action-btn btn-ver">VER</button>
              <button class="action-btn btn-download">
                <span class="material-icons">cloud_download</span>
              </button>
              <button class="action-btn btn-play">
                <span class="material-icons">play_arrow</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `,
    cobros: `
      <h2>Información de cobros</h2>
      <div class="cobros-container">
        <div class="bank-card">
          <div class="bank-card-header">
            <h3>Datos Bancarios</h3>
          </div>
          <div class="bank-card-body">
            <div class="bank-field">
              <div class="bank-label">Banco</div>
              <div class="bank-value">BANCO DE GALICIA Y BUENOS AIRES S./</div>
            </div>
            <div class="bank-field">
              <div class="bank-label">Sucursal</div>
              <div class="bank-value">No posee Sucursal</div>
            </div>
            <div class="bank-field">
              <div class="bank-label">Dirección</div>
              <div class="bank-value">-</div>
            </div>
            <div class="bank-field">
              <div class="bank-label">Forma de pago</div>
              <div class="bank-value">ABONO EN CUENTA</div>
            </div>
            <div class="bank-field">
              <div class="bank-label">CBU activo</div>
              <div class="bank-value">2030512345678901234567</div>
            </div>
          </div>
        </div>

        <button class="payment-days-btn">
          Días de pago por empresa
          <span class="material-icons">keyboard_arrow_down</span>
        </button>

        <button class="modify-payment-btn">
          MODIFICAR FORMA DE PAGO
        </button>
      </div>
    `,
    recibos: "<h2>Recibos de Sueldo</h2><p>Descargá tus recibos de sueldo en formato PDF.</p>",
    vacaciones: `
      <h2>Vacaciones</h2>
      <div class="vacaciones-container">
        <div class="vacaciones-content">
          <p>El empleador establece el período de vacaciones, pero el empleado puede proponer un período. Para registrar el período de vacaciones deseado, haz clic en "solicitar".</p>
          <p>Las vacaciones deben comenzar un día lunes o el siguiente día hábil si el lunes es un feriado nacional.</p>
          
          <div class="importante-section">
            <p class="important-vacation" ><strong>IMPORTANTE:</strong> Las vacaciones deberán ser tomadas entre el 1 de octubre y el 30 de abril del año siguiente. Las fechas exactas de vacaciones deben acordarse previamente con tu Jefe o Supervisor.</p>
          </div>

          <button class="solicitar-btn">
            SOLICITAR
          </button>

          <p class="dias-disponibles">Tienes <strong>5</strong> días disponibles.</p>
        </div>
      </div>
    `,
    art: `
      <h2>ART</h2>
      <div class="art-container">
        <div class="art-card">
          <div class="art-card-header">
            <h3>Tarjeta ART</h3>
          </div>
          <div class="art-card-body">
            <div class="art-field">
              <div class="art-label">Empresa</div>
              <div class="art-value">BENEFITS S.A.</div>
            </div>
            <div class="art-field">
              <div class="art-label">ART</div>
              <div class="art-value">PREVENCION ART</div>
            </div>
            <div class="art-field">
              <div class="art-label">Nombre completo</div>
              <div class="art-value">CUTUFOS CAMILA BELEN</div>
            </div>
            <div class="art-field">
              <div class="art-label">Número de documento</div>
              <div class="art-value">40127439</div>
            </div>
            <div class="art-field">
              <div class="art-label">Teléfono</div>
              <div class="art-value">08004444278</div>
              <button class="art-call-btn">
                <span class="material-icons">phone</span>
                LLAMAR
              </button>
            </div>
            <div class="art-field">
              <div class="art-label">Página Web</div>
              <div class="art-value">https://www.gruposancorseguros.com/ar/es/l</div>
            </div>
            <div class="art-field">
              <div class="art-label">Cliente</div>
              <div class="art-value">BENEFITS S.A.</div>
            </div>
            <div class="art-field">
              <div class="art-label">CUIT</div>
              <div class="art-value">30-63182358-7</div>
            </div>
          </div>
        </div>
      </div>
    `,
    'obra-social': "<h2>Obra Social</h2><p>Información sobre tu cobertura médica y afiliación.</p>",
    licencias: `
      <h2>Licencias</h2>
      <div class="licencias-container">
        <div class="licencias-list">
          <div class="licencia-item">
            <span>En una licencia por enfermedad</span>
            <span class="material-icons">keyboard_arrow_down</span>
          </div>
          <div class="licencia-item">
            <span>En caso de otra licencia</span>
            <span class="material-icons">keyboard_arrow_down</span>
          </div>
          <div class="licencia-item">
            <span>Sacar foto o escanear el certificado correspondiente</span>
            <span class="material-icons">keyboard_arrow_down</span>
          </div>
          <div class="licencia-item">
            <span>Adjuntar el certificado a la solicitud generada</span>
            <span class="material-icons">keyboard_arrow_down</span>
          </div>
          <div class="licencia-item">
            <span>Análisis</span>
            <span class="material-icons">keyboard_arrow_down</span>
          </div>
        </div>

        <button class="solicitar-licencia-btn">
          SOLICITAR
        </button>
      </div>
    `,
    certificado: "<h2>Certificado de Trabajo</h2><p>Solicitá tu certificado de trabajo.</p>",
    telegrama: "<h2>Telegrama de Renuncia</h2><p>Gestioná tu telegrama de renuncia.</p>",
    'grupo-familiar': "<h2>Grupo Familiar</h2><p>Gestioná la información de tu grupo familiar.</p>",
    oportunidades: "<h2>Oportunidades Laborales</h2><p>Explorá nuevas posiciones dentro de la empresa.</p>",
    referidos: "<h2>Referidos</h2><p>Recomendá personas para sumarse a la compañía.</p>",
    historia: "<h2>Historia Laboral</h2><p>Revisá tu historial de puestos y evaluaciones.</p>",
    desempeno: `
      <h2>Evaluación de desempeño</h2>
      <div class="desempeno-container">
      <div class="text-desempeno">
        <p>En Tech Human® nos preocupamos por tu desarrollo, por esto es que solicitamos a los clientes a los cuales fuiste asignado, que evalúen tu desempeño en el puesto de trabajo.</p>
        <p>Las estrellas indican la escala de valor de tu evaluación de desempeño según el siguiente criterio:</p>
        </div>
        <div class="rating-legend">
          <div class="rating-item">
            <div class="stars">★★★★★</div>
            <div class="label">Excelente</div>
          </div>
          <div class="rating-item">
            <div class="stars">★★★★</div>
            <div class="label">Muy Bueno</div>
          </div>
          <div class="rating-item">
            <div class="stars">★★★</div>
            <div class="label">Bueno</div>
          </div>
          <div class="rating-item">
            <div class="stars">★★</div>
            <div class="label">Regular</div>
          </div>
          <div class="rating-item">
            <div class="stars">★</div>
            <div class="label">Insuficiente</div>
          </div>
        </div>
      </div>
    `,
    hitos: `
      <h2>Hitos de Tech Human</h2>
      <div class="hitos-container">
        <p>Conoce los momentos más importantes en la historia de Tech Human.</p>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">2020</div>
            <div class="timeline-content">
              <h4>Fundación de Tech Human</h4>
              <p>Se funda Tech Human con el objetivo de conectar talento tecnológico con empresas innovadoras.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2021</div>
            <div class="timeline-content">
              <h4>Primeros 100 empleados</h4>
              <p>Alcanzamos el hito de los 100 empleados activos en diferentes proyectos.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2022</div>
            <div class="timeline-content">
              <h4>Expansión nacional</h4>
              <p>Ampliamos nuestras operaciones a múltiples ciudades del país.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2023</div>
            <div class="timeline-content">
              <h4>Certificación de calidad</h4>
              <p>Obtuvimos las certificaciones que avalan nuestros estándares de calidad.</p>
            </div>
          </div>
        </div>
      </div>
    `,
    organigrama: `
      <h2>Organigrama de Tech Human</h2>
      <div class="organigrama-container">
        <p>Descubre la estructura organizacional que nos permite funcionar de manera eficiente.</p>
        <div class="org-chart">
          <div class="org-level ceo">
            <div class="org-person">
              <span class="material-icons">person</span>
              <div class="person-info">
                <h4>Dirección General</h4>
                <p>Liderazgo estratégico</p>
              </div>
            </div>
          </div>
          <div class="org-level management">
            <div class="org-person">
              <span class="material-icons">engineering</span>
              <div class="person-info">
                <h4>Técnica</h4>
                <p>Desarrollo y tecnología</p>
              </div>
            </div>
            <div class="org-person">
              <span class="material-icons">business</span>
              <div class="person-info">
                <h4>Comercial</h4>
                <p>Relaciones comerciales</p>
              </div>
            </div>
            <div class="org-person">
              <span class="material-icons">people</span>
              <div class="person-info">
                <h4>RRHH</h4>
                <p>Recursos humanos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    beneficios: `
      <h2>Beneficios de Tech Human</h2>
      <div class="beneficios-container">
        <p>Descubre todos los beneficios que ofrecemos para tu bienestar y desarrollo profesional.</p>
        <div class="benefits-grid">
          <div class="benefit-item">
            <span class="material-icons">local_hospital</span>
            <h4>Obra Social</h4>
            <p>Cobertura médica completa para ti y tu familia</p>
          </div>
          <div class="benefit-item">
            <span class="material-icons">school</span>
            <h4>Capacitación</h4>
            <p>Programas de formación continua y desarrollo profesional</p>
          </div>
          <div class="benefit-item">
            <span class="material-icons">flight_takeoff</span>
            <h4>Vacaciones</h4>
            <p>Días de vacaciones pagas según antigüedad</p>
          </div>
          <div class="benefit-item">
            <span class="material-icons">work</span>
            <h4>ART</h4>
            <p>Seguro de riesgos del trabajo incluido</p>
          </div>
          <div class="benefit-item">
            <span class="material-icons">attach_money</span>
            <h4>Bonos</h4>
            <p>Bonificaciones por rendimiento y objetivos cumplidos</p>
          </div>
          <div class="benefit-item">
            <span class="material-icons">groups</span>
            <h4>Equipo</h4>
            <p>Trabajo en equipos multidisciplinarios y colaborativos</p>
          </div>
        </div>
      </div>
    `,
    'acciones-comunitarias': `
      <h2>Acciones Comunitarias</h2>
      <div class="acciones-container">
        <p>Humanizar el trabajo, transformar la comunidad.</p>
        <div class="acciones-list">
          <div class="accion-item">
            <div class="accion-icon">
              <span class="material-icons">volunteer_activism</span>
            </div>
            <div class="accion-content">
              <h4>Programa de Voluntariado</h4>
              <p>Participamos activamente en proyectos sociales y ambientales en la comunidad.</p>
            </div>
          </div>
          <div class="accion-item">
            <div class="accion-icon">
              <span class="material-icons">school</span>
            </div>
            <div class="accion-content">
              <h4>Educación Tecnológica</h4>
              <p>Brindamos talleres y cursos gratuitos de tecnología para jóvenes.</p>
            </div>
          </div>
          <div class="accion-item">
            <div class="accion-icon">
              <span class="material-icons">eco</span>
            </div>
            <div class="accion-content">
              <h4>Medio Ambiente</h4>
              <p>Iniciativas de reducción de huella de carbono y reciclaje.</p>
            </div>
          </div>
          <div class="accion-item">
            <div class="accion-icon">
              <span class="material-icons">diversity_3</span>
            </div>
            <div class="accion-content">
              <h4>Inclusión Laboral</h4>
              <p>Programas para promover la inclusión de grupos subrepresentados en tecnología.</p>
            </div>
          </div>
        </div>
      </div>
    `,
    nosotros: `
      <h2>Nosotros</h2>
      <div class="nosotros-container">
        <div class="company-intro">
          <h3>¿Quiénes somos?</h3>
          <p>Tech Human es una empresa dedicada a conectar talento tecnológico con oportunidades laborales innovadoras. Nuestra misión es potenciar el desarrollo profesional de nuestros colaboradores mientras contribuimos al crecimiento de las empresas que confían en nosotros.</p>
        </div>
        <div class="company-values">
          <h3>Nuestros Valores</h3>
          <div class="values-grid">
            <div class="value-item">
              <span class="material-icons">lightbulb</span>
              <h4>Innovación</h4>
              <p>Buscamos constantemente nuevas formas de hacer las cosas mejor.</p>
            </div>
            <div class="value-item">
              <span class="material-icons">handshake</span>
              <h4>Compromiso</h4>
              <p>Nos comprometemos con nuestros clientes y colaboradores.</p>
            </div>
            <div class="value-item">
              <span class="material-icons">groups</span>
              <h4>Trabajo en Equipo</h4>
              <p>Creemos en el poder del trabajo colaborativo.</p>
            </div>
            <div class="value-item">
              <span class="material-icons">verified</span>
              <h4>Excelencia</h4>
              <p>Nos esforzamos por alcanzar los más altos estándares.</p>
            </div>
          </div>
        </div>
      </div>
    `
  };

  return contenido[section] || "<h2>Sección no disponible</h2>";
}

function getOriginalModalContent() {
  return `
    <section class="section">
      <h3><b>Mi Trabajo</b></h3>
      <div class="grid">
        <div class="card-item">
          <button class="card" data-section="documentacion">
            <span class="material-icons">description</span>
          </button>
          <p>Documentación</p>
        </div>
        <div class="card-item">
          <button class="card" data-section="cobros">
            <span class="material-icons">account_balance_wallet</span>
          </button>
          <p>Información de cobros</p>
        </div>
        <div class="card-item">
          <button class="card" data-section="vacaciones">
            <span class="material-icons">flight_takeoff</span>
          </button>
          <p>Vacaciones</p>
        </div>
        <div class="card-item">
          <button class="card" data-section="art">
            <span class="material-icons">edit</span>
          </button>
          <p>ART</p>
        </div>
        <div class="card-item">
          <button class="card" data-section="obra-social">
            <span class="material-icons">local_hospital</span>
          </button>
          <p>Obra Social</p>
        </div>
        <div class="card-item">
          <button class="card" data-section="licencias">
            <span class="material-icons">pause_circle</span>
          </button>
          <p>Licencias</p>
        </div>
        <div class="card-item">
          <button class="card" data-section="certificado">
            <span class="material-icons">description</span>
          </button>
          <p>Solicita un Certificado de Trabajo</p>
        </div>
        <div class="card-item">
          <button class="card" data-section="telegrama">
            <span class="material-icons">exit_to_app</span>
          </button>
          <p>Telegrama de Renuncia</p>
        </div>
        <div class="card-item">
          <button class="card" data-section="grupo-familiar">
            <span class="material-icons">people</span>
          </button>
          <p>Grupo Familiar</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h3><b>Mi Desarrollo</b></h3>
      <div class="grid">
        <div class="card-item">
          <button class="card" data-section="desempeno">
            <span class="material-icons">list</span>
          </button>
          <p>Desempeño</p>
        </div>
        <div class="card-item">
          <button class="card" data-section="oportunidades">
            <span class="material-icons">thumb_up</span>
          </button>
          <p>Oportunidades Laborales</p>
        </div>
        <div class="card-item">
          <button class="card" data-section="referidos">
            <span class="material-icons">group</span>
          </button>
          <p>Referidos</p>
        </div>
        <div class="card-item">
          <button class="card" data-section="historia">
            <span class="material-icons">list</span>
          </button>
          <p>Historia Laboral</p>
        </div>
      </div>
    </section>
  `;
}

function showSection(section) {
  // Check if we're inside a modal (check if modal is visible)
  const modal = document.querySelector('.modal');
  const isModalOpen = modal && !modal.classList.contains('hidden') && modal.style.display !== 'none';
  if (isModalOpen) {
    // Load content inside the modal
    const modalBody = modal.querySelector('.modal-body');
    if (modalBody) {
      // Create a modal content wrapper
      const modalContent = document.createElement('div');
      modalContent.className = 'modal-content-wrapper';
      modalContent.innerHTML = getSectionContent(section);

      // Clear existing content and add new content
      modalBody.innerHTML = '';

      // Add back button to modal
      const backBtn = document.createElement('button');
      backBtn.className = 'modal-back-btn';
      backBtn.innerHTML = '<span class="material-icons">arrow_back</span> Volver';
      backBtn.onclick = () => {
        modalBody.innerHTML = getOriginalModalContent();
      };
      modalBody.appendChild(backBtn);

      // Add the content wrapper
      modalBody.appendChild(modalContent);
    }
  } else {
    // Original full-screen behavior
    const layoutContainer = document.querySelector('.layout-container');
    if (layoutContainer) {
      layoutContainer.style.display = 'none';
    }
    mainMenu.style.display = 'none';
    contentSection.classList.remove('hidden');
    contentSection.classList.add('visible');
    if (headerBackBtn) {
      headerBackBtn.classList.remove('hidden');
    }
    contentDiv.innerHTML = getSectionContent(section);
  }
}
