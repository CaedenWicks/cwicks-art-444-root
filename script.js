function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("hidden");
}
document.querySelectorAll('#mobileMenu a').forEach(link => {
  const targetId = link.getAttribute('data-target');
  const icon = document.getElementById(targetId);

  link.addEventListener('mouseenter', () => {
    if (icon) icon.classList.add('visible');
  });

  link.addEventListener('mouseleave', () => {
    if (icon) icon.classList.remove('visible');
  });
});

document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("mobileMenu").classList.add("hidden");
  });
});

// --- dark mode toggle comes AFTER ---
document.getElementById('darkModeToggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');

  
});
