const projects = [
  {
    title: "Portfolio",
    icon: "fa-solid fa-laptop-code",
    description: "Moje pierwsze portfolio frontendowe",
    link: "https://github.com/twoj-login/portfolio"
  },
  {
    title: "Sklep internetowy",
    icon: "fa-solid fa-cart-shopping",
    description: "Projekt sklepu online z koszykiem i filtrowaniem",
    link: "https://github.com/twoj-login/shop-project"
  },
  {
    title: "Aplikacja pogodowa",
    icon: "fa-solid fa-cloud-sun",
    description: "Aplikacja pokazująca aktualną pogodę w wybranym mieście",
    link: "https://github.com/twoj-login/weather-app"
  }
];


const projectsContainer = document.getElementById('projects-container');


projects.forEach(project => {
  const card = document.createElement('div');
  card.classList.add('project-card');
  card.innerHTML = `
    <i class="${project.icon}" style="font-size: 60px; color: #00ffcc; margin: 20px 0;"></i>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">Zobacz projekt</a>
  `;
  projectsContainer.appendChild(card);
});


// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
navLinks.classList.toggle('active');
});


// Formularz kontaktowy (symulacja wysyłki)
const contactForm = document.getElementById('contact-form');
const formResult = document.getElementById('form-result');


contactForm.addEventListener('submit', e => {
e.preventDefault();
formResult.textContent = 'Wiadomość wysłana! (symulacja)';
formResult.style.color = '#00ffcc';
contactForm.reset();
});

const sections = document.querySelectorAll('section'); 


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){ 
      entry.target.classList.add('show'); 
    }
  });
}, { threshold: 0.2 }); 


sections.forEach(section => {
  section.classList.add('hidden'); 
  observer.observe(section); 
});

const navLinksItems = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 100;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinksItems.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${id}`){
          link.classList.add('active');
        }
      });
    }
  });
});

