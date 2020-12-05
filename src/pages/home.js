import renderNav from "../components/header";
import renderFooter from "../components/footer";

function renderMain() {
    const $main = document.createElement("p");
    $main.innerHTML = "this is main part of homepage";

    const $content = document.getElementById("content");
    $content.appendChild($main);
}


function renderHome() {
    renderNav();

    renderMain();

    renderFooter();
}

export default renderHome;