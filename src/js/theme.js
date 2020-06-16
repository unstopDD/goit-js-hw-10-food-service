const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  input: document.querySelector('.js-switch-input'),
};

refs.input.addEventListener('change', changeTheme);

const classTheme = refs.body.classList;

function changeTheme(event) {
  if (event.target.checked) {
    checkTheme('LIGHT', 'DARK');
  } else {
    checkTheme('DARK', 'LIGHT');
  }
}

function checkTheme(oldTheme, newTheme) {
  classTheme.add(Theme[newTheme]);
  classTheme.remove(Theme[oldTheme]);
  localStorage.setItem('theme', Theme[newTheme]);
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === null) {
  refs.body.classList = Theme.LIGHT;
} else {
  refs.body.classList = savedTheme;
}

if (savedTheme === Theme.DARK) {
  refs.input.checked = true;
} else {
  refs.input.checked = false;
}
