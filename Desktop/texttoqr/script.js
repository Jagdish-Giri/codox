const textInput = document.getElementById('textInput');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const statusEl = document.getElementById('status');
const qrContainer = document.getElementById('qr');
const qrWrap = qrContainer.parentElement;
const fxLoading = document.getElementById('fx-loading');
const fxSmash = document.getElementById('fx-smash');
let qrInstance = null;

const clearQR = () => {
  qrContainer.innerHTML = '';
  qrInstance = null;
  downloadBtn.disabled = true;
  qrWrap.classList.remove('show');
  qrContainer.classList.remove('qr-hidden');
  fxLoading.classList.remove('show');
  fxSmash.classList.remove('show', 'animate');
};

const setStatus = (message, tone = 'neutral') => {
  const palette = {
    neutral: '#0f172a',
    success: '#0ea5e9',
    error: '#dc2626',
  };
  statusEl.textContent = message;
  statusEl.style.color = palette[tone] || palette.neutral;
};

const generateQR = () => {
  const text = textInput.value.trim();

  if (!text) {
    clearQR();
    setStatus('Type some text first.', 'error');
    return;
  }

  if (typeof QRCode === 'undefined') {
    setStatus('QR library failed to load. Check your internet or try again.', 'error');
    return;
  }

  // Animate QR out if present
  if (qrContainer.children.length > 0) {
    const qrEl = qrContainer.querySelector('canvas, img');
    if (qrEl) {
      qrEl.classList.add('rotate-scale-down-diag-1');
      setTimeout(() => {
        clearQR();
        qrContainer.classList.add('qr-hidden');
        fxSmash.classList.remove('show', 'animate');
        fxLoading.classList.add('show');
        setStatus('Charging the hammer...', 'neutral');

        qrInstance = new QRCode(qrContainer, {
          text,
          width: 260,
          height: 260,
          colorDark: '#0f172a',
          colorLight: '#ffffff',
          correctLevel: QRCode.CorrectLevel.H,
        });

        // stage the smash and reveal sequence
        setTimeout(() => {
          fxLoading.classList.remove('show');
          fxSmash.classList.add('show');
          fxSmash.classList.remove('animate');
          void fxSmash.offsetWidth; // restart animation
          fxSmash.classList.add('animate');
          setStatus('Impact! Breaking the cover...', 'neutral');

          setTimeout(() => {
            fxSmash.classList.remove('show', 'animate');
            qrContainer.classList.remove('qr-hidden');
            qrWrap.classList.remove('show');
            requestAnimationFrame(() => {
              qrWrap.classList.add('show');
            });
            setStatus('QR ready. Save or scan it.', 'success');
            downloadBtn.disabled = false;
          }, 1200);
        }, 850);
      }, 1100);
      return;
    }
  }

  clearQR();
  qrContainer.classList.add('qr-hidden');
  fxSmash.classList.remove('show', 'animate');
  fxLoading.classList.add('show');
  setStatus('Charging the hammer...', 'neutral');

  qrInstance = new QRCode(qrContainer, {
    text,
    width: 260,
    height: 260,
    colorDark: '#0f172a',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H,
  });

  // stage the smash and reveal sequence
  setTimeout(() => {
    fxLoading.classList.remove('show');
    fxSmash.classList.add('show');
    fxSmash.classList.remove('animate');
    void fxSmash.offsetWidth; // restart animation
    fxSmash.classList.add('animate');
    setStatus('Impact! Breaking the cover...', 'neutral');

    setTimeout(() => {
      fxSmash.classList.remove('show', 'animate');
      qrContainer.classList.remove('qr-hidden');
      qrWrap.classList.remove('show');
      requestAnimationFrame(() => {
        qrWrap.classList.add('show');
      });
      setStatus('QR ready. Save or scan it.', 'success');
      downloadBtn.disabled = false;
    }, 1200);
  }, 850);
};

const downloadQR = () => {
  if (!qrInstance) {
    return;
  }

  const canvas = qrContainer.querySelector('canvas');
  const img = qrContainer.querySelector('img');
  const source = canvas || img; // qrcodejs may render to canvas or img

  if (!source) {
    setStatus('Could not find the QR image to download.', 'error');
    return;
  }

  const dataUrl = source.toDataURL ? source.toDataURL('image/png') : source.src;
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = 'qr-code.png';
  link.click();
};

textInput.addEventListener('input', () => {
  if (!textInput.value.trim()) {
    setStatus('');
    clearQR();
  }
});

generateBtn.addEventListener('click', generateQR);
downloadBtn.addEventListener('click', downloadQR);

textInput.focus();
