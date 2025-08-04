let users = [
    { name: 'Ivan', username: 'Ivanov', password: 1234567},
    { name: 'Olga', username: 'helga', password: 2222222},
    { name: 'Iryna', username: 'irina', password: 33333333},
    { name: 'Vika', username: 'vikysia', password: 44444444},
    { name: 'Tanya', username: 'ttania', password: 2579304},
    { name: 'Kate', username: 'katerinka', password: 999999},
    { name: 'Olena', username: 'helena', password: 111111111},
    { name: 'Max', username: 'mmax', password: 8888888888},
    { name: 'Ariana', username: 'arianagrande', password: 10101101101},
    { name: 'Billie', username: 'billieeilish', password: 666666666},
];
for (let i in users){
    console.log(users[i].password);
}