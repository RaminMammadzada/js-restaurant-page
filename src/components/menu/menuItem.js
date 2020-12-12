function menuItem({name, ingredient, price}) {
    const $menuItem = document.createElement('div');
    $menuItem.setAttribute("class", "d-flex flex-row justify-content-between px-5");

    const $itemNamenAndIngredient = document.createElement('div');
    // $itemNamenAndIngredient.setAttribute("class", "d-flex flex-column");

    const $itemName = document.createElement('h4');
    $itemName.setAttribute('class', "text-danger");
    $itemName.innerText = name;

    const $itemIngredient = document.createElement("p");
    $itemIngredient.setAttribute('class', "text-light");
    $itemIngredient.innerText = ingredient;

    $itemNamenAndIngredient.appendChild($itemName);
    $itemNamenAndIngredient.appendChild($itemIngredient);

    const $itemPrice = document.createElement("h4");
    $itemPrice.setAttribute("class", "text-light d-flex justify-content-end align-self-center");
    $itemPrice.innerText = price;

    $menuItem.appendChild($itemNamenAndIngredient);
    $menuItem.appendChild($itemPrice);

    return $menuItem;
}

export default menuItem;