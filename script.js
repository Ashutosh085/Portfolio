const btn = document.querySelector(".mobile-navbar-btn");
const navbar = document.querySelector(".navbar");

const toggleBar = () => {
    navbar.classList.toggle("mobile");
}

btn.addEventListener('click', () => toggleBar());


const aboutSection = document.querySelector('#about');
const educationSection = document.querySelector('#education-sec');
const projectSection = document.querySelector('#projects-sec');
const skillsSection = document.querySelector('#skills-sec');

document.querySelector('#aboutLink').addEventListener('click', () => {
    aboutSection.scrollIntoView({behavior : "smooth"})
})

document.querySelector('#educationLink').addEventListener('click', () => {
    educationSection.scrollIntoView({behavior : "smooth"})
})

document.querySelector('#projectsLink').addEventListener('click', () => {
    projectSection.scrollIntoView({behavior : "smooth"})
})

document.querySelector('#skillsLink').addEventListener('click', () => {
    skillsSection.scrollIntoView({behavior : "smooth"})
})