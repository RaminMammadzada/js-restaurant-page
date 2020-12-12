import renderNav from "../components/header";
import renderFooter from "../components/footer";



function renderMain() {

    if (document.getElementById("main") !== null){
        document.getElementById("main").outerHTML = "";
        document.querySelector("footer").outerHTML = "";
    }

    const $main = document.createElement("div");
    $main.setAttribute("id", "main");
    $main.setAttribute("class", "px-4 bg-info main");

    const $h2 = document.createElement("h2");
    $h2.innerHTML = "this is main part of contact page";
    $main.appendChild($h2);

    const $content = document.getElementById("content");
    $content.appendChild($main);
}


function renderContact() {


    renderMain();
    renderFooter();

}

export default renderContact;
