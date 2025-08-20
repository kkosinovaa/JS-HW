let printArr = (arr) => {
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
}
printArr([1, 'str', true, false, NaN, null, undefined])