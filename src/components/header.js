import events from "../functions/events";

function renderNav() {
    const navItems = ["home", "menu", "contact"];

    const $ul = document.createElement("ul");
    $ul.setAttribute("id", "headerNavbar");
    $ul.setAttribute("class", "navbar-nav mr-auto");
    navItems.forEach((item) => {
            const $li = document.createElement("li");
            $li.setAttribute("class", "nav-item");
            const $link = document.createElement("a");
            $link.href = "#";
            $link.setAttribute("class", "nav-link");
            $link.innerHTML = item;
            $li.appendChild($link);
            $ul.appendChild($li);

        }
    );

    const $nav = document.createElement("nav");
    $nav.appendChild($ul);
    $nav.setAttribute("class", "navbar navbar-expand-sm");

    const $logo = document.createElement("h1");
    $logo.innerHTML = "KEBAB HOUSE";


    const headerTag = document.createElement("header");
    headerTag.appendChild($logo);
    headerTag.appendChild($nav);
    headerTag.setAttribute("class", "d-flex justify-content-between px-5 py-2");

    const $content = document.getElementById("content");
    $content.setAttribute("class", "");
    $content.appendChild(headerTag);

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