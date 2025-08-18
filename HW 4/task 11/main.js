function sumArray(array){
    let sum = 0;
    for (const item of array) {
        sum += item;
    }
    console.log(sum);
    return sum;
}
sumArray([1, 2, 3, 4, 5]);