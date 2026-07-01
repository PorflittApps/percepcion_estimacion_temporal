const startButton = document.getElementById('startButton');
const infoButton = document.getElementById('infoButton');

startButton?.addEventListener('click', () => {
  alert('Siguiente paso: pantalla de consentimiento informado.');
});

infoButton?.addEventListener('click', () => {
  alert('Aquí mostraremos la información ampliada del estudio antes del consentimiento.');
});
