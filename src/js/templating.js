import menuTemolate from '../menu-items.hbs';
import menu from '../menu.json';

const markup = menuTemolate(menu);
const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);
