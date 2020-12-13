import menuSection from './menuSection';
import dishes from './dishes';

const populateMenu = () => {
  const menu = document.createElement('div');


  Object.keys(dishes).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(dishes, key)) {
      const $menuSection = menuSection(dishes[key]);
      menu.appendChild($menuSection);
    }
  });

  return menu;
};

export default populateMenu;