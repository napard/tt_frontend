const resenas = [
    {
        name: "Carlos Fernández",
        opinion: "\"Calidad y seguridad, cumplen con lo que prometen.\"",
        stars: "★★★★★"
    },
    {
        name: "Valeria Bitt",
        opinion: "\"Excelentes productos!! Amo mi mochila!!\"",
        stars: "★★★★★"
    },
    {
        name: "Marcos Ramirez",
        opinion: "\"Excelentes productos, el envío tardó más de lo esperado.\"",
        stars: "★★★★☆"
    },
    {
        name: "Oscar Tévez",
        opinion: "\"Perfecta marroquinería y materiales de verdadera calidad.\"",
        stars: "★★★★★"
    },
    {
        name: "Mónica Castagna",
        opinion: "\"Buenos productos a precio inigualable.\"",
        stars: "★★★★☆"
    }
];

const resenasContainer = document.getElementById("resenas-container");

const resenasHtml = () => {
    let i = 0;
    let html_start = `
        <div class="carousel">
        <div class="carousel-inner">`;
    let html_end = `
        </div>
        <button class="carousel-prev">❮</button>
        <button class="carousel-next">❯</button>`;

    let inner = ``;
    inner = resenas.map(resena => {
        return `
        <div class="review">
            <h3>${resena.name}</h3>
            <p>${resena.opinion}</p>
            <div class="stars">${resena.stars}</div>
        </div>`;
    }).join("");

    return html_start + inner + html_end;
}

resenasContainer.innerHTML = resenasHtml();


