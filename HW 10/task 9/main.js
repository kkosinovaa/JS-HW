const priceBlock = document.getElementById('price');

let currentPrice = localStorage.getItem('price');
let lastUpdate = localStorage.getItem('lastUpdate');


if (!currentPrice) {
    currentPrice = 100;
    lastUpdate = Date.now();
    localStorage.setItem('price', currentPrice);
    localStorage.setItem('lastUpdate', lastUpdate);
}else{
    currentPrice= +currentPrice;
    lastUpdate = +lastUpdate;
}

const now = Date.now();

const diff = (now - lastUpdate) / 1000;

if (diff >= 10) {
    currentPrice += 10;
    localStorage.setItem('price', currentPrice);
    localStorage.setItem('lastUpdate', now);
}

priceBlock.textContent = currentPrice + 'грн';