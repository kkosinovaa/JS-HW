let printArr = (users) =>{
    for (const user of users) {
        document.write(`<div>${user.id}, ${user.name}, ${user.age}</div>`)
    }
};
printArr([{name: 'Ivan', id: 1, age: 20}, {name: 'Petya', id: 2, age: 25}]);