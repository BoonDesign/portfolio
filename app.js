const projects = [
{
title: 'Projekt 1',
img: 'https://via.placeholder.com/400x180',
demo: '#',
github: '#'
},
{
title: 'Projekt 2',
img: 'https://via.placeholder.com/400x180',
demo: '#',
github: '#'
},
{
title: 'Projekt 3',
img: 'https://via.placeholder.com/400x180',
demo: '#',
github: '#'
}
];


const projectsContainer = document.getElementById('projects-container');
projects.forEach(project => {
const card = document.createElement('div');
card.classList.add('project-card');
card.innerHTML = `
<img src="${project.img}" alt="${project.title}">
<h3>${project.title}</h3>
<a href="${project.demo}" target="_blank">Live</a>
<a href="${project.github}" target="_blank">GitHub</a>
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