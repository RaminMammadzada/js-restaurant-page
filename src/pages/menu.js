import renderNav from "../components/header";
import renderFooter from "../components/footer";

function renderMain() {

    if (document.getElementById("main") !== null){
        document.getElementById("main").outerHTML = "";
        document.querySelector("footer").outerHTML = "";


    }
    const $main = document.createElement("div");
    $main.setAttribute("id", "main");

    $main.innerHTML = "this is main part of menu page";

    const $content = document.getElementById("content");
    $content.appendChild($main);
}


function renderMenu() {
    renderMain();
    renderFooter();
}

export default renderMenu;