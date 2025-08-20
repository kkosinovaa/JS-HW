let minNumOfArr = (arr) =>{
    let minNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minNum) {
            minNum = arr[i];
        }
    }
    console.log(minNum);
}
minNumOfArr([11, 42, 3, 34, 5]);