
import jQuery from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';

import "popper.js";

window.$ = window.jQuery = jQuery;

function carousel() {

    const numOfPictures = 3;

    const $carouselDiv = document.createElement("div");
    $carouselDiv.setAttribute("id", "carouselExampleIndicators");
    $carouselDiv.setAttribute("class", "carousel slide mt-4 pt-4");
    $carouselDiv.setAttribute("data-ride", "carousel");

    const $ol = document.createElement("ol");
    $ol.setAttribute("class", "carousel-indicators");
    for(let i = 0; i < 3; i++) {
        const $li = document.createElement("li");
        $li.setAttribute("data-target", "carouselExampleIndicators");
        $li.setAttribute("data-slide-to", `${i}`);
        if( i === 0) {
            $li.setAttribute("class", "active");
        }

        $ol.appendChild($li);
    }
    $carouselDiv.appendChild($ol);

    const $carouselInner = document.createElement("div");
    $carouselInner.setAttribute("class", "carousel-inner");
    for(let i = 0; i < 3; i++) {
        const $carouselItem = document.createElement("div");
        $carouselItem.setAttribute("class", "carousel-item");

        const $img = document.createElement("img");
        $img.src = "images/home/img1.jpg";
        $carouselItem.appendChild($img);

        const $carouselCaption = document.createElement("div");
        $carouselCaption.setAttribute("class", "carousel-caption d-none d-md-block");

        const $h5 =  document.createElement("h5");
        $h5.innerHTML = "hello";

        const $p =  document.createElement("p");
        $p.innerHTML = "small text";

        $carouselCaption.appendChild($h5);
        $carouselCaption.appendChild($p);
        $carouselItem.appendChild($carouselCaption);
        $carouselInner.appendChild($carouselItem);
    }
    $carouselDiv.appendChild($carouselInner);

    ["prev", "next"].forEach( (button) => {

        const $buttonLink = document.createElement("a");
        $buttonLink.setAttribute("class", `carousel-control-${button}`);
        $buttonLink.href = "#carouselExampleIndicators";
        $buttonLink.setAttribute("role", "button");
        $buttonLink.setAttribute("data-slide", `${button}`);

        const $span1 = document.createElement("span");
        $span1.setAttribute("class", `carousel-control-${button}-icon`);
        $span1.setAttribute("aria-hidden","true" );
        $buttonLink.appendChild($span1);

        const $span2 = document.createElement("span");
        $span2.setAttribute("class", "sr-only");
        $span2.innerHTML = ( button === "prev" ? "Previous" : "Next" );
        $buttonLink.appendChild($span2);

        $carouselDiv.appendChild($buttonLink);

    });



    console.log($carouselDiv);


    return $carouselDiv
}

export default carousel;