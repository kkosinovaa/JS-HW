function Client(id, name, surname , email, phone, ...products){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = products;
}

function Product(name, price){
    this.name = name;
    this.price = price;
}

let clients = [
    new Client(1, 'Ivan', 'Ivanov', '<EMAIL>', '+380991234567',
        new Product('Milk', 100), new Product('Bread', 200)),

    new Client(2, 'Petro', 'Petrenko', '<EMAIL>', '+380931112233',
        new Product('Butter', 150)),

    new Client(3, 'Olena', 'Shevchenko', '<EMAIL>', '+380671234567',
        new Product('Eggs', 80), new Product('Sugar', 120), new Product('Flour', 90)),

    new Client(4, 'Oksana', 'Koval', '<EMAIL>', '+380501112244',
        new Product('Apples', 90)),

    new Client(5, 'Andriy', 'Bondar', '<EMAIL>', '+380931223344',
        new Product('Tomatoes', 110), new Product('Cucumbers', 130), new Product('Onions', 70), new Product('Potatoes', 60)),

    new Client(6, 'Natalia', 'Hrytsenko', '<EMAIL>', '+380991445566',
        new Product('Meat', 400), new Product('Fish', 350)),

    new Client(7, 'Maksym', 'Tkachenko', '<EMAIL>', '+380661556677',
        new Product('Juice', 70)),

    new Client(8, 'Kateryna', 'Lysenko', '<EMAIL>', '+380931667788',
        new Product('Chocolate', 90), new Product('Cookies', 120), new Product('Candy', 50)),

    new Client(9, 'Serhiy', 'Danylenko', '<EMAIL>', '+380991778899',
        new Product('Coffee', 250), new Product('Tea', 200)),

    new Client(10, 'Yulia', 'Melnyk', '<EMAIL>', '+380501889900',
        new Product('Rice', 180), new Product('Pasta', 160), new Product('Oil', 220))
];

console.log(clients);