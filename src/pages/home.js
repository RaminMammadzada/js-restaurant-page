import renderNav from "../components/shared/header";
import renderFooter from "../components/shared/footer";
import populateHome from "../components/home/populateHome";

function renderMain() {

    if (document.getElementById("main") !== null){
        document.getElementById("main").outerHTML = "";
        document.querySelector("footer").outerHTML = "";
    }
    const $main = document.createElement("div");
    $main.setAttribute("id", "main");
    $main.setAttribute("class", "main mt-10");


    // create home page
    $main.appendChild(populateHome());

    const $content = document.getElementById("content");
    $content.appendChild($main);
}


function renderHome() {

    
    renderMain();
    renderFooter();

}

export default renderHome;