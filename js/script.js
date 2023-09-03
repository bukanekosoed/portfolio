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