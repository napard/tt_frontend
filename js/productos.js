const products = [
    {
        name: "Bolso negro",
        description: "Bolso negro lindo para cosas",
        price: "1000,50",
        image: "img/prod/1.jpeg",
        alt: "producto 1"
    },
    {
        name: "Cosita que cuelga",
        description: "Cosita que podés llevar colgando",
        price: "2000,60",
        image: "img/prod/2.jpeg",
        alt: "producto 2"
    },
    {
        name: "Otra cosita colgante",
        description: "Otra cosita que vas a colgar",
        price: "5653,50",
        image: "img/prod/3.jpeg",
        alt: "producto 3"
    },
    {
        name: "Bolso marrón",
        description: "Bolso marrón con bolsillos para cosas",
        price: "20000,30",
        image: "img/prod/4.jpeg",
        alt: "producto 4"
    },
    {
        name: "Chaleco",
        description: "Chaleco verde a lo Rambo para que no te corcheen",
        price: "100000,20",
        image: "img/prod/5.jpeg",
        alt: "producto 5"
    },
    {
        name: "Bolso grandote",
        description: "Bolso grande para guardar un Dachshund",
        price: "5000,00",
        image: "img/prod/6.jpeg",
        alt: "producto 6"
    },
    {
        name: "Bolso azul",
        description: "Bolso azul fachero, que lindo...",
        price: "3200,80",
        image: "img/prod/7.jpeg",
        alt: "producto 7"
    },
    {
        name: "Bolso gris",
        description: "Bolso gris para guardar cosas que van en bolso",
        price: "6500,30",
        image: "img/prod/9.jpeg",
        alt: "producto 8"
    }
];

const productsContainer = document.getElementById("productos-container");

const productCards = () => {
    let i = 0;
    let html = ``;
    html = products.map(product => {
        return `
        <div class="producto">
            <img src="${product.image}" alt="${product.alt}">
            <div class="producto-descripcion">
                <span>${product.name}</span>
                <h5>${product.description}</h5>
                <h4>$${product.price}</h4>
            </div>
            <a class="carrito" onclick="cartAddProduct(${i++})">
                <i class="small-fa-icon fa-solid fa-shopping-cart"></i>
            </a>
        </div>`;
    }).join("");

    return html;
}

productsContainer.innerHTML = productCards();
