document.getElementById("menu-icon").addEventListener("click", function () {
  const nav = document.getElementById("nav");
  const icon = document.getElementById("menu-icon");
  nav.classList.toggle("mobile-menu-active");
  // Toggle between hamburger and close icon
  // if (nav.classList.contains('mobile-menu-active')) {
  //     icon.innerHTML = '&times;'; // Close icon
  // } else {
  //     icon.innerHTML = '&#9776;'; // Hamburger icon
  // }
  icon.innerHTML = nav.classList.contains("mobile-menu-active")
    ? "&times;"
    : "&#9776;";
});

/* Animation */
const sections = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Trigger animation
        observer.unobserve(entry.target); // Animate only once
      }
    });
  },
  {
    threshold: 0.2, // Trigger when 20% of section is visible
  }
);
sections.forEach((section) => {
  observer.observe(section);
});

/* Gallery Navigation button */

const gallery = document.querySelector(".gallery");
const prevBtn = document.querySelector(".nav-btn--ghost");
const nextBtn = document.querySelector(".nav-btn--solid");

// Get the width of the first card (including gap)

function getCardWidth() {
  const firstCard = gallery.querySelector("*");
  const style = window.getComputedStyle(firstCard);
  const gap = parseInt(style.marginRight || 0) || parseInt(style.gap || 0) || 0;
  return firstCard.offsetWidth + gap;
}

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  gallery.scrollBy({ left: getCardWidth(), behavior: "smooth" });
});

prevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  gallery.scrollBy({ left: -getCardWidth(), behavior: "smooth" });
});
