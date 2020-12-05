import renderHome from "./pages/home"
import renderContact from "./pages/contact";
import renderMenu from "./pages/menu";
import renderNav from "./components/header";
import events from "./functions/events";
import "./assets/style/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "popper.js";

function renderPage(currentPage){

    switch(currentPage) {
        case "home":
            renderHome();
            break;
        case "menu":
            renderMenu();
            break;
        case "contact":
            renderContact();
    }
}

document.getElementById("content")
        .setAttribute("class", "container");

events.on("currentPageChanged", renderPage);

renderNav();
events.emit("currentPageChanged", "home");


