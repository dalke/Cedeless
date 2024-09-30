function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
    return;
  }
  document.addEventListener('DOMContentLoaded', fn);
}

ready(function() {
  const toggles = document.querySelectorAll('.toggle');

  Array.from(toggles).forEach(toggler => {
    toggler.addEventListener('click', function(event) {
      event.preventDefault();
      toggler.parentNode.classList.toggle('closed');
      toggler.parentNode.classList.toggle('open');
    });
  });
});