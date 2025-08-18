function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return sumUAH / item.value;
        }
    }
    return 'Unknown currency';
}
console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'EUR'));