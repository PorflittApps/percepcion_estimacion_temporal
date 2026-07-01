document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('startButton');

  startButton.addEventListener('click', () => {
    // Próxima etapa: navegar a la pantalla de consentimiento informado.
    window.location.hash = 'consentimiento';
    startButton.textContent = 'Consentimiento informado →';
  });
});
