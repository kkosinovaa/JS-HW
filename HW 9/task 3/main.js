let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const course of coursesAndDurationArray) {
    const divCourse = document.createElement('div');
    divCourse.innerHTML = 'Course title: ' + course.title;
    divCourse.innerText += ' | '+ course.monthDuration + ' months';
    document.body.appendChild(divCourse);
}