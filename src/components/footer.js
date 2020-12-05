function renderFooter() {

    const $footer = document.createElement("footer");
    $footer.setAttribute("class", "px-4");
    $footer.innerHTML = "made by love by Ramin Mammadzada";

    const $content = document.getElementById("content");
    $content.appendChild($footer);
}

export default renderFooter;