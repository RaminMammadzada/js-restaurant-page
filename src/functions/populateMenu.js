import menuSection from "../components/menuSection";

const dishes = {
    meals: [
        {sectionName: "Meals Section",
         items: [{
                name: "Kebab",
                ingredient: "Greatest food ever",
                price: "32$",
            },
            {
                name: "Kebab",
                ingredient: "Greatest food ever",
                price: "49$",
            },
            {
                name: "Kebab",
                ingredient: "Greatest food ever",
                price: "26$",
            },
            {
                name: "Kebab",
                ingredient: "Greatest food ever",
                price: "80$",
            }]
        }
    ],
    drinks: [
        {sectionName: "Drinks Section",
         items: [{
                    name: "Tea",
                    ingredient: "Greatest food ever",
                    price: "4$",
                },
                {
                    name: "Water",
                    ingredient: "Greatest food ever",
                    price: "3$",
                },
                {
                    name: "Bear",
                    ingredient: "Greatest food ever",
                    price: "7$",
                },
                {
                    name: "Ayran",
                    ingredient: "Greatest food ever",
                    price: "5$",
                }]
        }
    ],
};

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