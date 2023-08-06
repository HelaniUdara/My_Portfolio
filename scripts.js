//Toggle Navbar icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};


//Select active link when scrolling
let sections = document.querySelectorAll('section');
let navbarLinks = document.querySelectorAll('header .navbar a'); 

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navbarLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
        };
    });

    // Sticky Navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //Remove toggle icon and navbar when a navbar link is clicked
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};

//Scroll Reveal
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .topic', {origin: 'top'});
ScrollReveal().reveal('.home-img, .service-container, .portfolio-container, .contact-content, .contact-img', {origin: 'bottom'});
ScrollReveal().reveal('.about-img, .home-content h1', {origin: 'left'});
ScrollReveal().reveal('.about-content, .home-content p', {origin: 'right'});

const typed = new Typed('.multi-text',{
    strings: ["An UI/UX Designer.", "A Web Developer.", "A Blogger."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


//Toggle Education section
function toggleEducation() {
    const educationDropdown = document.getElementById("education-content");
    educationDropdown.classList.toggle("show");
}

//Toggle Volunteering
function toggleVolunteering() {
    const volunteeringDropdown = document.getElementById("volunteering-content");
    volunteeringDropdown.classList.toggle("show");
}

//Display Skills
var contents = document.getElementsByClassName('skill-content');
var skillLinks = document.getElementsByClassName('skill-link');

function opentab(tabname) {
    for (content of contents) {
        content.classList.remove("active_tab");
    }
    document.getElementById(tabname).classList.add('active_tab');

    for (skillLink of skillLinks) {
        skillLink.classList.remove("active-link");
    }
    document.querySelector(`.skill-link[onclick="opentab('${tabname}')"]`).classList.add('active-link');
}



