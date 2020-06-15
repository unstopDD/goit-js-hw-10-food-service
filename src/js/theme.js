const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  input: document.querySelector('.js-switch-input'),
};

refs.input.addEventListener('change', changeTheme);

function changeTheme(event) {
  const classTheme = refs.body.classList;
  if (event.target.checked) {
    classTheme.add(Theme.DARK);
    classTheme.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    classTheme.add(Theme.LIGHT);
    classTheme.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const savedTheme = localStorage.getItem('theme');
refs.body.classList = savedTheme;
savedTheme === Theme.DARK ? (refs.input.checked = true) : false;
