
window.addEventListener('DOMContentLoaded', () => {
  setupSplashSequence();
  setupDemographics();
});

function setupSplashSequence() {
  const uc = document.getElementById('logo-uc-screen');
  const cedeti = document.getElementById('logo-cedeti-screen');
  const facultad = document.getElementById('logo-facultad-screen');
  const consent = document.getElementById('consent-screen');
  if (!uc || !cedeti || !facultad || !consent) return;

  const showFor = 2500;
  const fade = 2000;

  setTimeout(() => {
    uc.classList.remove('active');
    setTimeout(() => { cedeti.classList.add('active'); }, fade);
  }, showFor);

  setTimeout(() => {
    cedeti.classList.remove('active');
    setTimeout(() => { facultad.classList.add('active'); }, fade);
  }, showFor + fade + showFor);

  setTimeout(() => {
    facultad.classList.remove('active');
    setTimeout(() => { consent.classList.add('active'); }, fade);
  }, showFor + fade + showFor + fade + showFor);
}

function setupDemographics() {
  const form = document.getElementById('form-demograficos');
  if (!form) return;

  const edadSelect = form.querySelector('select[name="edad"]');
  if (edadSelect && edadSelect.options.length <= 1) {
    for (let age = 12; age <= 99; age += 1) {
      const option = document.createElement('option');
      option.value = String(age);
      option.textContent = String(age);
      edadSelect.appendChild(option);
    }
  }

  const idiomaRadios = form.querySelectorAll('input[name="segundo_idioma"]');
  const habilidades = document.getElementById('idioma-habilidades');
  const habilidadChecks = habilidades ? habilidades.querySelectorAll('input[type="checkbox"]') : [];

  idiomaRadios.forEach((radio) => {
    radio.addEventListener('change', () => {
      if (!habilidades) return;
      if (radio.value === '1' && radio.checked) {
        habilidades.classList.add('show');
      }
      if (radio.value === '0' && radio.checked) {
        habilidades.classList.remove('show');
        habilidadChecks.forEach((check) => { check.checked = false; });
      }
    });
  });

  const status = document.getElementById('demo-status');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const payload = {
      Edad: data.get('edad') || '',
      Sexo: data.get('sexo') || '',
      Pais: data.get('pais') || '',
      Estudios: data.get('estudios') || '',
      SegundoIdioma: data.get('segundo_idioma') || '',
      Hablar: data.get('idioma_hablar') ? 1 : 0,
      Escuchar: data.get('idioma_escuchar') ? 1 : 0,
      Leer: data.get('idioma_leer') ? 1 : 0,
      Escribir: data.get('idioma_escribir') ? 1 : 0,
      Ent_sinMirar: data.get('ent_sin_mirar') || '',
      hrsMus: data.get('hrs_mus') || '',
      ConAnio: data.get('con_anio') || '',
      AutoDef: data.get('autodef') || '',
      registrado_en: new Date().toISOString()
    };

    localStorage.setItem('demograficos_percepcion_temporal', JSON.stringify(payload));
    if (status) status.textContent = 'Datos guardados. Avanzando a la siguiente pantalla...';
    setTimeout(() => { window.location.href = 'inicio_test.html'; }, 800);
  });
}
