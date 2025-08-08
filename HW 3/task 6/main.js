let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://purepng.com/public/uploads/large/purepng.com-milkmilkliquidnutritioncow-14115279570641c5j7.png',
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg',
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74',
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://us-east-1-shared-usea1-02.graphassets.com/A2lCPH6tTelhrsostvMQpz/auto_image/resize=fit:max,width:1080/quality=value:75/01n1sh7CTRWsWeDTD2ZM',
    }
];

for (let item of products) {
    let title = item.title;
    let price = item.price;
    let image = item.image;
    document.write(` <div class="product-card">

        <h3 class="product-title">${title}. Price – ${price}</h3>

        <img src="${image}" alt="" class="product-image">

</div>`)
}