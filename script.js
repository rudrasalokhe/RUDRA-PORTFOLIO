document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.slide');
  const navLinks = document.querySelectorAll('.nav-link');

  function slideInSection(section) {
    section.classList.add('active');
  }

  function slideOutSection(section) {
    section.classList.remove('active');
  }

  function handleScroll() {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        slideInSection(section);
      } else {
        slideOutSection(section);
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
