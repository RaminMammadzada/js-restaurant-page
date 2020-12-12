import menuItem from './menuItem';

const menuSection = (dishInSection) => {
  const menuSection = document.createElement('div');

  const sectionHeader = document.createElement('h3');
  sectionHeader.textContent = dishInSection[0].sectionName;
  sectionHeader.setAttribute('class', 'd-flex justify-content-center text-light pt-4');
  menuSection.appendChild(sectionHeader);

  for (let i = 0; i < dishInSection[0].items.length; i += 1) {
    const $menuItem = menuItem(dishInSection[0].items[i]);
    menuSection.appendChild($menuItem);
    const $separaterLine = document.createElement('hr');
    menuSection.appendChild($separaterLine);
    menuSection.setAttribute('class', 'bg-gray1 mx-5 my-5');
  }
  return menuSection;
};

export default menuSection;