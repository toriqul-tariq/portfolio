// 1. Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Trigger reveal on page load
window.onload = reveal;

// 2. Sticky Navbar Effect
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        nav.style.padding = "10px 50px";
        nav.style.background = "rgba(15, 23, 42, 0.95)";
    } else {
        nav.style.padding = "20px 50px";
        nav.style.background = "rgba(15, 23, 42, 0.8)";
    }
});

// 3. Simple Form Submission Handle
const contactForm = document.getElementById("contact-form");
if(contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent successfully.");
        contactForm.reset();
    });
}

// 4. Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// WELCOME PAGE SCRIPT START
const card = document.getElementById('tilt-card');

card.addEventListener('mousemove', (e) => {
    const cardRect = card.getBoundingClientRect();
    
    // Get mouse position relative to the center of the card
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;
    
    const mouseX = e.clientX - cardCenterX;
    const mouseY = e.clientY - cardCenterY;

    // Calculate rotation (Divide by higher number for subtler tilt)
    const rotateX = (mouseY / cardRect.height) * -30; 
    const rotateY = (mouseX / cardRect.width) * 30;

    // Apply the rotation
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Reset card position when mouse leaves
card.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
});
// WELCOME PAGE SCRIPT END
