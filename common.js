// =========================
// Mobile Navigation Toggle
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

// Create Close Button
const closeBtn = document.createElement("div");

closeBtn.innerHTML = "✕";

closeBtn.classList.add("close-menu");

navbar.prepend(closeBtn);

// Open Menu
// Toggle Menu Open & Close
menuToggle.addEventListener("click", (e) => {

  e.stopPropagation();

  navbar.classList.toggle("active");

});

// Close Menu Button
closeBtn.addEventListener("click", () => {

  navbar.classList.remove("active");

});

// Close Menu When Clicking Outside
document.addEventListener("click", (e) => {

  const isClickInsideMenu = navbar.contains(e.target);

  const isClickOnToggle = menuToggle.contains(e.target);

  if (!isClickInsideMenu && !isClickOnToggle) {

    navbar.classList.remove("active");

  }

});

// Close Menu When Clicking Navigation Links
const navLinks = navbar.querySelectorAll("a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navbar.classList.remove("active");

  });

});
