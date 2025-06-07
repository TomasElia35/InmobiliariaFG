// Navbar móvil toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  if (mobileMenu.style.maxHeight) {
    mobileMenu.style.maxHeight = null;
  } else {
    mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
  }
});

// Scroll reveal
const revealElements = document.querySelectorAll('.reveal');
function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Formulario de contacto
const form = document.getElementById('contactForm');
const nameInput = form.name;
const emailInput = form.email;
const messageInput = form.message;
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const formSuccess = document.getElementById('formSuccess');

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let valid = true;

  // Reset errores
  nameError.classList.add('hidden');
  emailError.classList.add('hidden');
  messageError.classList.add('hidden');
  formSuccess.classList.add('hidden');

  if (!nameInput.value.trim()) {
    nameError.classList.remove('hidden');
    valid = false;
  }
  if (!validateEmail(emailInput.value.trim())) {
    emailError.classList.remove('hidden');
    valid = false;
  }
  if (!messageInput.value.trim()) {
    messageError.classList.remove('hidden');
    valid = false;
  }

  if (valid) {
    const phoneNumber = '2235298074';
    const name = encodeURIComponent(nameInput.value.trim());
    const email = encodeURIComponent(emailInput.value.trim());
    const message = encodeURIComponent(messageInput.value.trim());
    const text = `Hola,%20mi%20nombre%20es%20${name}.%20Mi%20correo%20es%20${email}.%20Mensaje:%20${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappURL, '_blank');
    formSuccess.classList.remove('hidden');
    form.reset();
  }
});

// Botón scroll top
const scrollTopButton = document.getElementById('scrollTopButton');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopButton.classList.add('show');
  } else {
    scrollTopButton.classList.remove('show');
  }
});
scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
