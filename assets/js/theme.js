const light = document.querySelector('.theme-control-light');
const dark = document.querySelector('.theme-control-dark');
const system = document.querySelector('.theme-control-system');

if (localStorage.theme) {
  const activeTheme = localStorage.theme;
  const themeRadio = document.querySelector('#theme-select-' + activeTheme);
  themeRadio.setAttribute('checked', '');
} else {
  document.querySelector('#theme-select-system').setAttribute('checked', '');
}

light.addEventListener('click', function() {
  document.documentElement.classList.add('light');
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('theme', 'light');
});

dark.addEventListener('click', function() {
  document.documentElement.classList.add('dark');
  if (document.documentElement.classList.contains('light')) {
    document.documentElement.classList.remove('light');
  }
  localStorage.setItem('theme', 'dark');
});

system.addEventListener('click', function() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
  }
  localStorage.removeItem('theme');
});

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