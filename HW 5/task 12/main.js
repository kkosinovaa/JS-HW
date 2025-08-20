let swap = (arr, i1, i2) =>{
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
    console.log(arr);
}
swap([1,2,3,4,5],0,1);