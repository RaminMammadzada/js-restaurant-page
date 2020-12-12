import renderNav from "../components/header";
import renderFooter from "../components/footer";
import populateMenu from "../components/menu/populateMenu";


function renderMain() {

    if (document.getElementById("main") !== null){
        document.getElementById("main").outerHTML = "";
        document.querySelector("footer").outerHTML = "";
    }
    const $main = document.createElement("div");
    $main.setAttribute("id", "main");
    $main.setAttribute("class", "px-4 bg-info main");


    // create menu page
    const $menu = populateMenu();
    $main.appendChild($menu);

    const $content = document.getElementById("content");
    $content.appendChild($main);
}


function renderMenu() {
    renderMain();
    renderFooter();
}

export default renderMenu;