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
