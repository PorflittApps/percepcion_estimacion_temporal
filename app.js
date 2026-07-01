window.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('pantalla-intro');
  const consent = document.getElementById('pantalla-consentimiento');
  if (!intro || !consent) return;

  setTimeout(() => {
    intro.classList.remove('visible');
    intro.classList.add('fading-out');

    setTimeout(() => {
      intro.classList.add('hidden');
      consent.classList.remove('hidden');
      consent.classList.add('fading-in');
    }, 2000);
  }, 5000);
});
