import renderNav from "../components/header";
import renderFooter from "../components/footer";
import populateMenu from "../functions/populateMenu";


function renderMain() {

    if (document.getElementById("main") !== null){
        document.getElementById("main").outerHTML = "";
        document.querySelector("footer").outerHTML = "";


    }
    const $main = document.createElement("div");
    $main.setAttribute("id", "main");
    $main.setAttribute("class", "px-4 bg-info main");



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