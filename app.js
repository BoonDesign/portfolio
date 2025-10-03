document.addEventListener('DOMContentLoaded', () => {
  // Projekty w JSON
  const projects = [
    {
      title: 'Landing page BHP',
      img: 'images/projekt1.jpg',
      link: 'https://github.com/twoj-login/projekt1'
    },
    {
      title: 'Portfolio w JS',
      img: 'images/projekt2.jpg',
      link: 'https://twojadomena.pl/projekt2'
    }
  ];

  const container = document.getElementById('projects-container');
  projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <h3>${p.title}</h3>
      <a href="${p.link}" target="_blank">Zobacz projekt</a>
    `;
    container.appendChild(card);
  });

  // Formularz kontaktowy (demo)
  const form = document.getElementById('contact-form');
  const result = document.getElementById('form-result');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    result.textContent = 'Dziękuję za wiadomość! 📬';
    form.reset();
  });
});
