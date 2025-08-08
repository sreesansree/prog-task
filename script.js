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
