import renderHome from "./pages/home"
import renderContact from "./pages/contact";
import renderMenu from "./pages/menu";
import renderNav from "./components/shared/header";
import events from "./functions/events";
import "jquery";
import "popper.js";
import "./style/style.css";


import "jquery/dist/jquery.slim.min.js"
import "popper.js/dist/popper.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';

window.$ = window.jQuery = jQuery;

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

events.on("currentPageChanged", renderPage);

renderNav();
events.emit("currentPageChanged", "contact");


