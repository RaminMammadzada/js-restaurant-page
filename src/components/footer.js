function renderFooter() {

    const $footer = document.createElement("p");
    $footer.innerHTML = "made by love by Ramin Mammadzada";

    const $content = document.getElementById("content");
    $content.appendChild($footer);
}

export default renderFooter;