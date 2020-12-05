function renderNav() {
    const navItems = ["home", "menu", "about"];
    const $ul = document.createElement("ul");

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
}

export default renderNav;