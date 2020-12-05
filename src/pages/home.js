import renderNav from "../components/header";
import renderFooter from "../components/footer";

function renderMain() {

    if (document.getElementById("main") !== null){
        document.getElementById("main").outerHTML = "";
        document.querySelector("footer").outerHTML = "";

    }
    const $main = document.createElement("div");
    $main.setAttribute("id", "main");

    $main.innerHTML = "this is main part of homepage";

    const $content = document.getElementById("content");
    $content.appendChild($main);
}


function renderHome() {


    renderMain();
    renderFooter();

}

export default renderHome;