import add from "./pages/lib"
import renderHome from "./pages/home"
import renderContact from "./pages/contact";
import renderMenu from "./pages/menu";
import renderNav from "./components/header";
import renderFooter from "./components/footer";
import events from "./functions/events"

const result = add(4, 4);
console.log(result);

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
events.emit("currentPageChanged", "home");


