import renderNav from "../components/header";
import renderFooter from "../components/footer";
import carousel from "../components/carousel";


function renderMain() {

    if (document.getElementById("main") !== null){
        document.getElementById("main").outerHTML = "";
        document.querySelector("footer").outerHTML = "";
    }
    const $main = document.createElement("div");
    $main.setAttribute("id", "main");
    $main.setAttribute("class", "px-4 bg-info main");


    // create carousel
    const $carouselDiv = carousel();
    
    $main.appendChild($carouselDiv);

    const $content = document.getElementById("content");
    $content.appendChild($main);
}


function renderHome() {


    renderMain();
    renderFooter();

}

export default renderHome;