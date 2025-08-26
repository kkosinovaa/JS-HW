function User(id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    new User(11, 'Ivan', 'Ivanov', '<EMAIL>', '+380991234567'),
    new User(2, 'Petya', 'Petrov', '<EMAIL>', '+380991234567'),
    new User(32, 'Vasya', 'Pupkin', '<EMAIL>', '+380991234567'),
    new User(41, 'Masha', 'Kuznetsova', '<EMAIL>', '+380991234567'),
    new User(5, 'Oleg', 'Ivanov', '<EMAIL>', '+380991234567'),
    new User(62, 'Vladimir', 'Ivanov', '<EMAIL>', '+380991234567'),
    new User(71, 'Andrey', 'Ivanov', '<EMAIL>', '+380991234567'),
    new User(82, 'Vladislav', 'Ivanov', '<EMAIL>', '+380991234567'),
    new User(9, 'Alexander', 'Ivanov', '<EMAIL>', '+380991234567'),
    new User(101, 'Vladislav', 'Ivanov', '<EMAIL>', '+380991234567')
];
console.log(users.sort((a, b) => a.id - b.id));