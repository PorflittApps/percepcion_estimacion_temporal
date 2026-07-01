(function () {
  const autoNext = document.body?.dataset?.autoNext;
  const autoDelay = Number(document.body?.dataset?.autoDelay || 0);
  if (autoNext && autoDelay > 0) {
    window.setTimeout(() => {
      window.location.href = autoNext;
    }, autoDelay);
  }

  const form = document.getElementById('consentForm');
  if (!form) return;

  const button = form.querySelector('button[type="submit"]');
  const radios = form.querySelectorAll('input[name="consentimiento"]');

  radios.forEach((radio) => {
    radio.addEventListener('change', () => {
      button.disabled = false;
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const selected = form.querySelector('input[name="consentimiento"]:checked');
    if (!selected) return;

    if (selected.value === 'acepto') {
      sessionStorage.setItem('consentimiento', 'acepto');
      window.location.href = 'test.html';
    } else {
      sessionStorage.setItem('consentimiento', 'no_acepto');
      window.location.href = 'gracias.html';
    }
  });
})();
