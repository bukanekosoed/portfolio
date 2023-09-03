const navLinks = document.querySelectorAll('.nav-link');
const contactButton = document.querySelector('.btn');

  navLinks.forEach(navLink => {
    navLink.addEventListener('click', function () {
      navLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });

  contactButton.addEventListener('click', function () {
    navLinks.forEach(link => link.classList.remove('active'));

    navLinks.forEach(link => {
      if (link.textContent === 'Contact') {
        link.classList.add('active');
      }
    });
  });

  window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section'); // Mengambil semua elemen section
    const navLinks = document.querySelectorAll('.nav-link'); // Mengambil semua link navigasi

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const navLink = navLinks[index];

      if (window.pageYOffset >= sectionTop - sectionHeight / 2 && window.pageYOffset < sectionTop + sectionHeight / 2) {
        // Mengaktifkan kelas "active" pada tautan navigasi yang sesuai dengan section saat ini
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    });
  });