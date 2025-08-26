let nums = [11,21,3];

function sortNums(nums, direction){
    if (direction === 'ascending'){
        return nums.sort((a, b) => a - b);
    }else if (direction === 'descending'){
        return nums.sort((a, b) => b - a);
    }else{
        console.log('Wrong direction!');
    }
}

console.log(sortNums(nums, 'ascending'));