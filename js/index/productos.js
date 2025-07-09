/*const createFakeStore = () => {
    products.forEach((product) => {
        fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product)
        }).then(response => response.json())
            .then(data => console.log(data));
    });
}*/

const decrProdCount = (id) => {
    let elem = document.getElementById(id);
    if (elem.value > 1)
        elem.value -= 1;
}

const incrProdCount = (id) => {
    let elem = document.getElementById(id);
    if (elem.value < 10)
        elem.value = parseInt(elem.value) + 1;
}

// Usado en 'carrito.js' para manejar el estado del carrito.
let products_catalog;

const buildProductCards = (products) => {
    let i = 0;
    let html = ``;

    products_catalog = products;
    html = products.map(product => {
        return `
        <div class="producto">
            <img tabindex="0" src="${product.image}" alt="${product.alt}">
            <div class="producto-descripcion">
                <span>${product.name}</span>
                <h5>${product.description}</h5>
                <h4>$${product.price}</h4>
            </div>
            <div class="add-to-cart">
                <div class="qty-selector">
                    <button tabindex="0" class="qty-btn" onclick="decrProdCount('prod-count-${i}')">-</button>
                    <input tabindex="0" id="prod-count-${i}" class="product-qty" value="1">
                    <button tabindex="0" class="qty-btn" onclick="incrProdCount('prod-count-${i}')">+</button>
                </div>
                <a class="carrito" onclick="cartAddProduct(${i}, 'prod-count-${i++}')">
                    <i tabindex="0" class="small-fa-icon fa-solid fa-shopping-cart"></i>
                </a>
            </div>
        </div>`;
    }).join("");

    document.getElementById("productos-container").innerHTML = html;
}

const createProductsContent = () => {
    fetch("data/products.json")
        .then(response => response.json())
        .then(data => buildProductCards(data))
        .catch((error) => console.log("Error al obtener productos: ", error));
}

