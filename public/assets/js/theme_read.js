function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
    return;
  }
  document.addEventListener('DOMContentLoaded', fn);
}

ready(function() {      
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (e.matches && !localStorage.theme) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  });
  
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
    if (e.matches && !localStorage.theme) {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  });
  
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
  } else {
    document.documentElement.classList.add('light')
    document.documentElement.classList.remove('dark')
  }
});