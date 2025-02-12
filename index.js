const openMenuBtn = document.getElementById("open-menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

// Media query for mobile view
const isMobileView = window.matchMedia("(max-width: 768px)");

// Open menu functionality
openMenuBtn.addEventListener("click", () => {
  nav.style.left = "0";
  nav.style.opacity = "1";
  closeMenuBtn.style.display = "block";
  openMenuBtn.style.display = "none";
});

// Close menu functionality
closeMenuBtn.addEventListener("click", () => {
  closeNav();
});

// Close nav when a link is clicked, only for mobile view
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (isMobileView.matches) {
      closeNav();
    }
  });
});

// Function to close the nav
function closeNav() {
  nav.style.left = "-100%";
  nav.style.opacity = "0";
  openMenuBtn.style.display = "inline-block";
  closeMenuBtn.style.display = "none";
}

// Optional: Listen for screen size changes (for dynamic resizing)
isMobileView.addEventListener("change", () => {
  if (!isMobileView.matches) {
    // Reset navigation styles for larger screens
    nav.style.left = "0";
    nav.style.opacity = "1";
    openMenuBtn.style.display = "none";
    closeMenuBtn.style.display = "none";
  }
});


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal ({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 300,
  // reset: true,
})

sr.reveal('.hero')
sr.reveal('.services-section',{interval: 100})
sr.reveal('.testimonial-card',{delay: 500, interval: 100})
sr.reveal('.services-header, .footer',{interval: 100})