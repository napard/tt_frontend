const cartIncrementCount = () => {
    let celem = document.getElementById("carrito-count");
    celem.innerText = parseInt(celem.innerText) + 1;
}

const cartDecrementCount = () => {
    let celem = document.getElementById("carrito-count");
    let v = parseInt(celem.innerText)
    if (v > 0)
        celem.innerText = parseInt(celem.innerText) - 1;
}

const cartAddProduct = (index) => {
    cartIncrementCount();
}

