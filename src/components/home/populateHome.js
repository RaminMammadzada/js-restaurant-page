import img1 from "../../images/home/img1.jpg";

const populateHome = () => {

    const $homeMain = document.createElement("div");
    $homeMain.setAttribute("class", "");
    
    const $textInCenter =  document.createElement("h1");
    $textInCenter.innerText = "The Best Kebab Ever You Have Tasted!";
    $textInCenter.setAttribute("class", "text-white d-flex justify-content-center align-items-center")

    $homeMain.appendChild($textInCenter)

    return $homeMain;
}

export default populateHome;


