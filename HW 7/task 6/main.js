function Car(model, manufacturer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    }
    this.increaseSpeed = function (newSpeed) {
        if (newSpeed > 0) {
            this.maxSpeed = this.maxSpeed + newSpeed;
        }
    }
    this.changeYear = function (newYear) {
        if(newYear > 1815){
            this.year = newYear;
        }
    }
    this.addDriver = function(driverObj) {
        if(driverObj){
            this.driver = driverObj;
        }
    }
}
const car = new Car('BMW', 'BMW', 2015, 200, 150);
car.info();
car.increaseSpeed(100);
car.info();
car.changeYear(2016);
car.info();
car.addDriver({ name: 'Ivan', age: 30, license: true });
car.info();
car.drive();
