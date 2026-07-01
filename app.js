


/* Datos demográficos */
window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-demograficos');
  const status = document.getElementById('demo-status');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const payload = {
      Sexo: data.get('sexo') || '',
      Pais: data.get('pais') || '',
      Estudios: data.get('estudios') || '',
      H_Ing: data.get('H_Ing') ? 1 : 0,
      L_Ing: data.get('L_Ing') ? 1 : 0,
      E_Ing: data.get('E_Ing') ? 1 : 0,
      W_Ing: data.get('W_Ing') ? 1 : 0,
      Ent_sinMirar: data.get('ent_sin_mirar') || '',
      hrsMus: data.get('hrs_mus') || '',
      ConAnio: data.get('con_anio') || '',
      AutoDef: data.get('autodef') || '',
      registrado_en: new Date().toISOString()
    };

    localStorage.setItem('demograficos_percepcion_temporal', JSON.stringify(payload));

    if (status) {
      status.textContent = 'Datos guardados. Avanzando a la siguiente pantalla...';
    }

    setTimeout(() => {
      window.location.href = 'inicio_test.html';
    }, 900);
  });
});
