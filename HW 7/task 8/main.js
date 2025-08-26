class Cinderella{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let cinnderellas = [
    new Cinderella('Anna', 19, 35),
    new Cinderella('Olena', 21, 36),
    new Cinderella('Kateryna', 22, 37),
    new Cinderella('Iryna', 20, 38),
    new Cinderella('Sofiia', 23, 40),
    new Cinderella('Mariia', 18, 34),
    new Cinderella('Natalia', 24, 39),
    new Cinderella('Viktoria', 25, 37),
    new Cinderella('Oksana', 20, 41),
    new Cinderella('Yulia', 21, 38)
];
class Price{
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}
const prince = new Price('Ivan', 20, 36);
for(const cinderella of cinnderellas){
    if(cinderella.footSize === prince.slipper){
        prince.wife = cinderella
    }
}
console.log(prince.wife);