document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('startButton');

  startButton?.addEventListener('click', () => {
    // Próxima etapa del desarrollo: navegar a la pantalla de consentimiento informado.
    // Cuando exista consentimiento.html, reemplazar por:
    // window.location.href = 'consentimiento.html';
    window.location.hash = 'consentimiento';
  });
});
