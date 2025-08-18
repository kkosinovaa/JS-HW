function foobar(text, amount){
    document.write(`<ul>`);
    for (let i = 0; i < amount; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
foobar('text', 5);