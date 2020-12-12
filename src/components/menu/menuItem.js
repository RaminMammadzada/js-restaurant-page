function menuItem({name, ingredient, price}) {
    const $menuCard = document.createElement('div');
    $menuCard.setAttribute('className', "bg-dark");

    const $itemName = document.createElement('h4');
    $itemName.setAttribute('class', "text-danger");
    $itemName.innerText = name;

    const $itemIngredient = document.createElement("h6");
    $itemIngredient.setAttribute('class', "text-light");
    $itemIngredient.innerText = ingredient;

    const $itemPrice = document.createElement("h4");
    $itemPrice.setAttribute("class", "text-light d-flex justify-content-end");
    $itemPrice.innerText = price;

    $menuCard.appendChild($itemName);
    $menuCard.appendChild($itemIngredient);
    $menuCard.appendChild($itemPrice);

    return $menuCard;
}

export default menuItem;