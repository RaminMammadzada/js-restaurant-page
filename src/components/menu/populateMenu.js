import menuSection from "./menuSection";
import dishes from "./dishes"

const populateMenu = () => {

    const menu = document.createElement("div");



    for(const section in dishes) {
        // console.log(`${section}`);
        const $menuSection = menuSection(dishes[section]);
        console.log(dishes[section][0].sectionName);
        menu.appendChild($menuSection);
    }

    return menu;

};

export default populateMenu;