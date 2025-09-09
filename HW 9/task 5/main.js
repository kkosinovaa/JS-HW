let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
for (const course of coursesArray) {
    const divCourse = document.createElement('div');
    divCourse.classList.add('course');

    const divCourseTitle = document.createElement('div');
    divCourseTitle.classList.add('course-title');

    const divCourseMonthDuration = document.createElement('div');
    divCourseMonthDuration.classList.add('course-month-duration');

    const divDuration = document.createElement('div');
    divDuration.classList.add('course-duration');

    const divCourseHourDuration = document.createElement('div');
    divCourseHourDuration.classList.add('course-hour-duration');

    divDuration.append(divCourseMonthDuration, divCourseHourDuration);

    const divCourseModules = document.createElement('div');
    divCourseModules.classList.add('course-modules');

    divCourse.append(divCourseTitle, divDuration, divCourseModules);

    divCourseTitle.innerText = 'Course name: ' + course.title;
    divCourseMonthDuration.innerText = 'Month duration: ' + course.monthDuration;
    divCourseHourDuration.innerText = 'Hour duration: ' + course.hourDuration;
    const ul = document.createElement('ul');
    for (const module of course.modules) {
        const li = document.createElement('li');
        li.innerText = module;
        ul.append(li);
    }
    divCourseModules.append(ul);
    document.body.appendChild(divCourse);
}