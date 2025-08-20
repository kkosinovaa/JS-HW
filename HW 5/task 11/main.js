let sum = (arr)=> {
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }
    console.log(sum);
}
sum([1, 2, 3, 4, 5]);