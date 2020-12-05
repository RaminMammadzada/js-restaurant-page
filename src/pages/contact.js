import renderNav from "../components/header";
import renderFooter from "../components/footer";
import "../assets/style/style.css";

function renderMain() {

    if (document.getElementById("main") !== null){
        document.getElementById("main").outerHTML = "";
        document.querySelector("footer").outerHTML = "";

    }

    const $main = document.createElement("div");
    $main.setAttribute("id", "main");

    const $h1 = document.createElement("h1");
    $h1.innerHTML = "this is main part of contact page";
    $main.appendChild($h1);

    const $content = document.getElementById("content");
    $content.appendChild($main);
}


function renderContact() {


    renderMain();
    renderFooter();

}

export default renderContact;
