Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

Array.prototype.myFilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

let numbers = [1, 2, 3, 4, 5];

numbers.myForEach((num, index) => {
    console.log(`Елемент ${index}: ${num}`);
});

let even = numbers.myFilter(num => num % 2 === 0);
console.log(even);

