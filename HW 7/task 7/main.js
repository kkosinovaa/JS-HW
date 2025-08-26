class Car{

    constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info() {
        for (const key in this) {
            console.log(key, this[key]);
        }
    }
    increaseSpeed (newSpeed) {
        if (newSpeed > 0) {
            this.maxSpeed = this.maxSpeed + newSpeed;
        }
    }
    changeYear (newYear) {
        if(newYear > 1815){
            this.year = newYear;
        }
    }
    addDriver (driverObj) {
        if(driverObj){
            this.driver = driverObj;
        }
    }
}
const car = new Car('BMW', 'BMW', 2015, 200, 150);
car.info();
car.increaseSpeed(100);
car.changeYear(2016);
car.addDriver({ name: 'Ivan', age: 30, license: true });
car.info();
car.drive();