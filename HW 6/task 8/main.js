let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

function sortDescending(a, b) {
    return b.monthDuration - a.monthDuration;
}
console.log(coursesAndDurationArray.sort(sortDescending));


function filterByDuration(a) {
    return a.monthDuration > 5;
}
let filtered = coursesAndDurationArray.filter(filterByDuration);
console.log(filtered);


let mapped = coursesAndDurationArray.map((value, index) => {
    return {
        ...value,       // копіюємо всі властивості
        id: index + 1   // додаємо нову
    };
});
console.log(mapped);
