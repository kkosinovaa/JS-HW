function arrayMin(array) {
    let min = array[0];
    for (const item of array) {
        if (item < min) {
            min = item;
        }
    }
    console.log(min);
}
arrayMin([11, 21, 3, 4, 5]);