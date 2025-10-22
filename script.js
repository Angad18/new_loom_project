window.addEventListener('scroll', function() {
  const nav = document.getElementById('nav_bar');
  if (window.pageYOffset > 5) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
