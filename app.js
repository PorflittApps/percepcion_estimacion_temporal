document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('startButton');

  startButton.addEventListener('click', () => {
    // Próxima etapa: navegar a la pantalla de consentimiento informado.
    // Por ahora dejamos un estado visible para confirmar que el botón funciona.
    window.location.hash = 'consentimiento';
    startButton.textContent = 'Consentimiento informado →';
  });
});
