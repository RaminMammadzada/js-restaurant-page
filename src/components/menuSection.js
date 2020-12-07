import menuItem from "../components/menuItem";

const menuSection = (dishInSection) => {

    const menuSection = document.createElement("div");

    const sectionHeader = document.createElement("h3");
    sectionHeader.textContent = dishInSection[0].sectionName;
    menuSection.appendChild(sectionHeader);

    for(let i = 0; i < dishInSection[0].items.length; i++){
        const $menuItem = menuItem(dishInSection[0].items[i]);
        menuSection.appendChild($menuItem);
    }
    return menuSection;
};

export default menuSection;