 // Smooth scrolling for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle menu for mobile devices
function toggleMenu() {
    const menuList = document.getElementById('menulist');
    menuList.classList.toggle('show');
}

// Change header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Animate elements on scroll
const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(animateOnScroll, {
    root: null,
    threshold: 0.1,
});

document.querySelectorAll('.experience, .roshan, .Footer').forEach(section => {
    observer.observe(section);
});

// Typing effect for the frontend developer text
const frontendText = document.querySelector('.frontend');
const text = frontendText.textContent;
frontendText.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        frontendText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

setTimeout(typeWriter, 1000);

//blog js
document.addEventListener('DOMContentLoaded', () => {
    const blogPosts = document.querySelectorAll('.blog-post');
    blogPosts.forEach((post, index) => {
        setTimeout(() => {
            post.style.animation = `fadeInUp 0.6s ease forwards`;
        }, index * 200);
    });
});

