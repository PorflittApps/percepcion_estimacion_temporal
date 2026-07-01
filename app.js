const startButton = document.getElementById("startButton");
const infoButton = document.getElementById("infoButton");

if (startButton) {
  startButton.addEventListener("click", () => {
    alert("Próximo paso: pantalla de consentimiento informado.");
  });
}

if (infoButton) {
  infoButton.addEventListener("click", () => {
    alert("Este sitio alojará el estudio Percepción y Estimación Temporal. En la siguiente etapa integraremos consentimiento, datos demográficos, tareas viso-auditivas y resultados.");
  });
}
