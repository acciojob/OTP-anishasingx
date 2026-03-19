//your JS code here. If required.
const codes = document.querySelectorAll('.code');

// focus first input initially
codes[0].focus();

codes.forEach((code, index) => {
  code.addEventListener('input', (e) => {
    const value = e.target.value;

    // allow only numbers
    if (!/^[0-9]$/.test(value)) {
      e.target.value = '';
      return;
    }

    // move forward
    if (value && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  code.addEventListener('keydown', (e) => {
    // backspace behavior
    if (e.key === 'Backspace') {
      if (code.value === '' && index > 0) {
        codes[index - 1].focus();
      } else {
        code.value = '';
      }
    }
  });
});