const mainMenu = document.getElementById('main-menu');
const contentSection = document.getElementById('content-section');
const contentDiv = document.getElementById('content');
const headerBackBtn = document.getElementById('header-back-btn');

document.querySelectorAll('.card').forEach(button => {
  button.addEventListener('click', () => {
    const section = button.getAttribute('data-section');
    showSection(section);
  });
});

function goBack() {
  const layoutContainer = document.querySelector('.layout-container');
  if (layoutContainer) {
    layoutContainer.style.display = 'block';
  }
  contentSection.classList.remove('visible');
  contentSection.classList.add('hidden');
  mainMenu.style.display = 'flex';
  if (headerBackBtn) {
    headerBackBtn.classList.add('hidden');
  }
}

if (headerBackBtn) {
  headerBackBtn.addEventListener('click', goBack);
}

function showSection(section) {
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

  const contenido = {
    documentacion: `
      <h2>Listado de documentos</h2>
      <div class="documentacion-container">
        <div class="doc-card">
          <h3 class="doc-title">CONTRATO</h3>
          <div class="doc-info">
            <p><strong>Fecha:</strong> 2025-08-12</p>
            <p><strong>Cliente:</strong></p>
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
            <p><strong>Cliente:</strong></p>
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
            <p><strong>IMPORTANTE:</strong> Las vacaciones deberán ser tomadas entre el 1 de octubre y el 30 de abril del año siguiente. Las fechas exactas de vacaciones deben acordarse previamente con tu Jefe o Supervisor.</p>
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
        <p>En Tech Human® nos preocupamos por tu desarrollo, por esto es que solicitamos a los clientes a los cuales fuiste asignado, que evalúen tu desempeño en el puesto de trabajo.</p>
        <p>Las estrellas indican la escala de valor de tu evaluación de desempeño según el siguiente criterio:</p>
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
    `
  };

  contentDiv.innerHTML = contenido[section] || "<h2>Sección no disponible</h2>";
}
