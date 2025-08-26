function User(id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    new User(1, 'Ivan', 'Ivanov', '<EMAIL>', '+380991234567'),
    new User(2, 'Petya', 'Petrov', '<EMAIL>', '+380991234567'),
    new User(3, 'Vasya', 'Pupkin', '<EMAIL>', '+380991234567'),
    new User(4, 'Masha', 'Kuznetsova', '<EMAIL>', '+380991234567'),
    new User(5, 'Oleg', 'Ivanov', '<EMAIL>', '+380991234567'),
    new User(6, 'Vladimir', 'Ivanov', '<EMAIL>', '+380991234567'),
    new User(7, 'Andrey', 'Ivanov', '<EMAIL>', '+380991234567'),
    new User(8, 'Vladislav', 'Ivanov', '<EMAIL>', '+380991234567'),
    new User(9, 'Alexander', 'Ivanov', '<EMAIL>', '+380991234567'),
    new User(10, 'Vladislav', 'Ivanov', '<EMAIL>', '+380991234567')
];
users.filter(user => user.id % 2===0).forEach(user => console.log(user));