/*const cartIncrementCount = (incr = 1) => {
    let celem = document.getElementById("carrito-count");
    celem.innerText = parseInt(celem.innerText) + incr;
}

const cartDecrementCount = (decr = 1) => {
    let celem = document.getElementById("carrito-count");
    let v = parseInt(celem.innerText)
    if (v > 0)
        celem.innerText = parseInt(celem.innerText) - decr;
}*/

const cartAddProduct = (index, count_id) => {
    let count = parseInt(document.getElementById(count_id).value);
    /*cartIncrementCount(count);*/
    openToast("Productos agregados al carrito...");

    let product = {
        name: products[index].name,
        count: count,
        price: parseFloat(products[index].price.replace(",", "."))
    };

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(product);
    localStorage.setItem("carrito", JSON.stringify(carrito));

    updateCartCounter();
}

const updateCartCounter = () => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let total_count = 0;
    carrito.map(product => {
        total_count += product.count;
    });

    document.getElementById("carrito-count").innerText = total_count;
}
