class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);  // Call the parent class constructor
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num) {
        if (this.passengers + num <= this.maximumPassengers) {
            this.passengers += num;
            console.log(`${num} passengers loaded. Current passengers: ${this.passengers}`);
        } else {
            console.log("Not enough room to load all passengers.");
        }
    }

    start() {
        if (this.fuel > 0) {
            this.started = true;
            console.log("Car started!");
        } else {
            this.started = false;
            console.log("Not enough fuel to start the car.");
        }
    }

    scheduleServiceCheck(mileage) {
        if (mileage > 30000) {
            this.scheduleService = true;
            console.log("Service required!");
        } else {
            console.log("No service needed.");
        }
    }
}
