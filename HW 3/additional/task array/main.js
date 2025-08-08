let arr = [];
for (let i = 0; i < 100; i+=2) {
    arr.push(i);
}
console.log(arr);
arr = [];
for (let i = 1; i < 100; i+=2) {
    arr.push(i);
}
console.log(arr);
arr = [];
for (let i = 0; i < 20; i++) {
    arr.push(Math.floor(Math.random()*100));
}
console.log(arr);
arr = [];
for (let i = 0; i < 20; i++) {
    arr.push(Math.floor(Math.random()*732-8+1)+8);
}
console.log(arr);

// for (let i = 2; i < arr.length-1; i+=3 {
//     console.log(arr[i]);
// }
// for (let i = 2; i < arr.length; i+=3) {
//     if (arr[i]%2===0){
//         console.log(arr[i]);
//     }
// }
//
// for (let i = 2; i < arr.length; i+=3) {
//     if (arr[i]%2===0){
//         let newArr = [];
//         newArr.push(arr[i]);
//         console.log(newArr);
//     }
// }

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i+1]%2===0){
//         console.log(arr[i]);
//     }
// }
//
// let receipt = [100,250,50,168,120,345,188];
// let sum = 0;
// for (let i = 0; i < receipt.length; i++) {
//     sum += receipt[i];
// }
// let average = sum/receipt.length;
// console.log('Average: ',average);


array = [];
for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random()*100));
}
console.log(array);
let newArray = [];
for (let i = 0; i < array.length; i++) {
    array[i]=array[i]*5;
    newArray.push(array[i]);
}
console.log(newArray);

let array1 = [1,4,true,false, 'string', 2, 'okten'];
for (let i = 0; i < array1.length; i++) {
    let newArray1 = [];
    if (typeof array1[i] === 'number'){
        newArray1.push(array1[i]);
    }
}