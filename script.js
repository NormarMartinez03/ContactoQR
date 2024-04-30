const form = document.getElementById('contactForm');
const qrcodeDiv = document.getElementById('qrcode');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevenir envío del formulario

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const telefono = document.getElementById('telefono').value;
  const email = document.getElementById('email').value;

  // Crear string con la información de contacto (vCard format)
  const vCard = `BEGIN:VCARD\nVERSION:3.0\nN:${apellido};${nombre}\nTEL;TYPE=CELL:${telefono}\nEMAIL:${email}\nEND:VCARD`;

  // Generar código QR
  new QRCode(qrcodeDiv, {
    text: vCard,
    width: 256,
    height: 256,
  });
});

const limpiarBtn = document.getElementById('limpiarBtn');

limpiarBtn.addEventListener('click', () => {
  form.reset(); // Restablece el formulario a su estado inicial
  qrcodeDiv.innerHTML = ''; // Limpia el código QR
});
