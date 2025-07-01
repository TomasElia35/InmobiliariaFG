// Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const navMobile = document.getElementById('nav-mobile');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
    navMobile.classList.toggle('hidden');
  });

  // Smooth scroll for nav links
// Enlaces nav: permitir comportamiento normal (sin scroll suave)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', () => {
    // Solo cerrar el menú móvil si está abierto
    if (!navMobile.classList.contains('hidden')) {
      navMobile.classList.add('hidden');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', false);
    }
  });
});


  // FAQ accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    question.addEventListener('click', () => {
      const isOpen = answer.classList.contains('open');
      // Close all
      faqItems.forEach(i => {
        i.querySelector('.faq-answer').classList.remove('open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if(!isOpen) {
        answer.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
      }
    });
    question.addEventListener('keydown', e => {
      if(e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        question.click();
      }
    });
  });

  // Calendar with holidays highlight
  const calendarEl = document.getElementById('calendar');
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  // Example feriados (holidays) - format MM-DD
  const feriados = [
    '01-01', // Año Nuevo
    '05-01', // Día del Trabajador
    '12-25', // Navidad
    '07-09', // Día de la Independencia Argentina
    '12-08', // Inmaculada Concepción
  ];

  function isFeriado(date) {
    const mmdd = ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
    return feriados.includes(mmdd);
  }

  function renderCalendar(year, month) {
    calendarEl.innerHTML = '';
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDay = firstDay.getDay(); // Sunday=0 ... Saturday=6
    const daysInMonth = lastDay.getDate();

    // Header with month and year
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const header = document.createElement('div');
    header.className = 'flex justify-between items-center mb-4 text-[#b28b60] font-semibold text-xl';
    const prevBtn = document.createElement('button');
    prevBtn.textContent = '<';
    prevBtn.className = 'px-3 py-1 rounded hover:bg-[#a67c52] hover:text-[#111111] transition';
    const nextBtn = document.createElement('button');
    nextBtn.textContent = '>';
    nextBtn.className = 'px-3 py-1 rounded hover:bg-[#a67c52] hover:text-[#111111] transition';
    const title = document.createElement('div');
    title.textContent = `${monthNames[month]} ${year}`;
    header.appendChild(prevBtn);
    header.appendChild(title);
    header.appendChild(nextBtn);
    calendarEl.appendChild(header);

    // Weekdays row
    const weekdays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    const weekdaysRow = document.createElement('div');
    weekdaysRow.className = 'grid grid-cols-7 text-center font-semibold text-gray-400 mb-2';
    weekdays.forEach(day => {
      const d = document.createElement('div');
      d.textContent = day;
      weekdaysRow.appendChild(d);
    });
    calendarEl.appendChild(weekdaysRow);

    // Days grid
    const daysGrid = document.createElement('div');
    daysGrid.className = 'grid grid-cols-7 gap-1 text-center text-gray-300';

    // Empty slots before first day
    for(let i=0; i < (startDay === 0 ? 6 : startDay - 1); i++) {
      const empty = document.createElement('div');
      empty.className = 'py-2';
      daysGrid.appendChild(empty);
    }

    // Days
    for(let d=1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      const dayEl = document.createElement('div');
      dayEl.textContent = d;
      dayEl.className = 'py-2 rounded cursor-default select-none';
      if(isFeriado(date)) {
        dayEl.classList.add('bg-[#b28b60]', 'text-[#111111]', 'font-bold', 'shadow-md');
        dayEl.setAttribute('title', 'Feriado');
      } else if (date.toDateString() === today.toDateString()) {
        dayEl.classList.add('border', 'border-[#b28b60]', 'font-semibold');
        dayEl.setAttribute('title', 'Hoy');
      } else {
        dayEl.classList.add('hover:bg-[#a67c52]', 'hover:text-[#111111]', 'transition');
      }
      daysGrid.appendChild(dayEl);
    }

    calendarEl.appendChild(daysGrid);

    // Navigation buttons functionality
    prevBtn.onclick = () => {
      let newMonth = month - 1;
      let newYear = year;
      if(newMonth < 0) {
        newMonth = 11;
        newYear--;
      }
      renderCalendar(newYear, newMonth);
    };
    nextBtn.onclick = () => {
      let newMonth = month + 1;
      let newYear = year;
      if(newMonth > 11) {
        newMonth = 0;
        newYear++;
      }
      renderCalendar(newYear, newMonth);
    };
  }

  renderCalendar(year, month);

  // Contact form submission (dummy)
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const nombre = contactForm.nombre.value.trim();
  const email = contactForm.email.value.trim();
  const fechaIngreso = contactForm.fechaIngreso.value;
  const fechaSalida = contactForm.fechaSalida.value;
  const mensaje = contactForm.mensaje.value.trim();

  if (!nombre || !email || !fechaIngreso || !fechaSalida) {
    alert('Por favor, completa todos los campos obligatorios.');
    return;
  }

  const texto = `Hola, quiero hacer una consulta sobre el departamento:\n\n Nombre: ${nombre}\n Email: ${email}\n Ingreso: ${fechaIngreso}\n Salida: ${fechaSalida}\n Mensaje: ${mensaje || 'Sin mensaje adicional'}`;

  const telefono = '+5492235924637'; // Cambiar por el número real
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank');
});


  // Side buttons scroll to inicio
  const btnInicio = document.getElementById('btnInicio');
  btnInicio.addEventListener('click', () => {
    document.getElementById('inicio').scrollIntoView({behavior: 'smooth'});
  });
