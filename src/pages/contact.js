import renderNav from "../components/header";
import renderFooter from "../components/footer";
import populateContact from "../components/contact/populateContact";
// import populateHome from "../components/home/populateHome";



function renderMain() {

    if (document.getElementById("main") !== null){
        document.getElementById("main").outerHTML = "";
        document.querySelector("footer").outerHTML = "";
    }

    const $main = document.createElement("div");
    $main.setAttribute("id", "main");
    $main.setAttribute("class", "px-4 main contact");



    const $h2 = document.createElement("h2");
    $h2.innerHTML = "this is main part of contact page";


    $main.appendChild(populateContact());


    const $content = document.getElementById("content");
    // $content.setAttribute("class", "bg-dark");
    $content.appendChild($main);
}


function renderContact() {


    renderMain();
    renderFooter();

}

export default renderContact;
