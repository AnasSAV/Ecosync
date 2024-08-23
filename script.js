window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.solutions');
    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (sectionPosition < screenPosition) {
            section.classList.add('visible');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach((member, index) => {
        setTimeout(() => {
            member.style.transform = 'translateX(0)';
            member.style.opacity = '1';
        }, index * 200);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Section Fade-In Effect on Scroll
const sections = document.querySelectorAll('.solutions, .team-member'); // Select both solutions and team members

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 200); // Delay each section's appearance by 200ms
            observer.unobserve(entry.target); // Unobserve the element once it is visible
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});


