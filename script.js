function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("hidden");
  }
  
  // Optional: Close menu when clicking a link (for smooth UX)
  document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById("mobileMenu").classList.add("hidden");
    });
  });