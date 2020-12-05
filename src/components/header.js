import events from "../functions/events";

function renderNav() {
    const navItems = ["home", "menu", "contact"];
    const headerTag = document.createElement("header");
    const $ul = document.createElement("ul");
    headerTag.appendChild($ul);
    $ul.setAttribute("id", "headerNavbar")

    navItems.forEach((item) => {
            const $li = document.createElement("li");
            $li.innerHTML = item;
            $ul.appendChild($li);

        }
    );

    const $nav = document.createElement("nav");
    $nav.appendChild($ul);

    const $content = document.getElementById("content");
    $content.appendChild($nav);

    function getEventTarget(e) {
        e = e || window.event;
        return e.target || e.srcElement;
    }

    var ul = document.getElementById('headerNavbar');
    ul.onclick = function(event) {
        var target = getEventTarget(event);
        events.emit("currentPageChanged", target.innerHTML);
    };



}


export default renderNav;