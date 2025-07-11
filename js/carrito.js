document.addEventListener("DOMContentLoaded", () => {
    updateCartContent();
    updateCartTotal();
});

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

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let carr_index = carrito.findIndex(item => item.id === products_catalog[index].id);
    if (carr_index != -1)
        carrito[carr_index].count += count;
    else {
        carrito.push({
            count: count,
            id: products_catalog[index].id,
            name: products_catalog[index].name,
            price: products_catalog[index].price,
            image: products_catalog[index].image
        });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    updateCartCounter();
}

const cartDelProd = (id) => {
    let cart_content = document.getElementById("cart-content");
    let children = cart_content.children;
    if (children.length > 0) {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        let carr_index = carrito.findIndex(item => item.id === id);

        if (carr_index != -1) {
            carrito.splice(carr_index, 1);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            updateCartContent(carrito);
            updateCartTotal();
        }
    }
}

const buildCartItems = (items) => {
    let html = ``;

    html = items.map(item => {
        return `
        <li class="cart-item">
            <div class="cart-prod"><img src="${item.image}"></img>${item.name} <em>(x${item.count})</em></div>
            <div class="price">
                <div class="value">$${(parseFloat(item.price.replace(",", ".")) * item.count).toFixed(2).replace(".", ",")}</div>
                <div class="btn btn-carrito" onclick="cartDelProd(${item.id})">Eliminar</div>
            </div>
        </li>`;
    }).join("");

    document.getElementById("cart-content").innerHTML = html;
}

const updateCartCounter = () => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let total_count = 0;
    carrito.map(product => {
        total_count += product.count;
    });

    document.getElementById("carrito-count").innerText = total_count;
    document.getElementById("carrito-count-mob").innerText = total_count;
}

const updateCartTotal = () => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let total = 0;
    carrito.map(product => {
        total += product.count * parseFloat(product.price.replace(",", "."));
    });

    document.getElementById("cart-total").innerText = "Total: $" + total.toFixed(2);
}

const updateCartContent = () => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    buildCartItems(carrito);

    let elem = document.getElementById("cart-content");
    if(carrito.length == 0) {
        elem.style.fontSize = "1.5rem";
        elem.innerText = "El carrito está vacío ¯\\_(ツ)_/¯";

        elem = document.getElementById("empty-cart-btn");
        elem.style.display = "none";
    }
}

const emptyCart = () => {
    localStorage.removeItem("carrito");
    updateCartContent();
    updateCartTotal();
}

