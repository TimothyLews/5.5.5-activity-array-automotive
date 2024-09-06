const VehicleModule = require("./vehicleBaseClass");

// Define the Car subclass extending the Vehicle class
class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);  // Call the parent class constructor
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    // Method to load passengers
    loadPassenger(num) {
        if (this.passengers + num <= this.maximumPassengers) {
            this.passengers += num;
            console.log(`${num} passengers loaded. Current passengers: ${this.passengers}`);
        } else {
            console.log("Not enough room to load all passengers.");
        }
    }

    // Method to start the car
    start() {
        if (this.fuel > 0) {
            this.started = true;
            console.log("Car started!");
        } else {
            this.started = false;
            console.log("Not enough fuel to start the car.");
        }
    }

    // Method to check if service is needed based on mileage
    scheduleServiceCheck(mileage) {
        if (mileage > 30000) {
            this.scheduleService = true;
            console.log("Service required!");
        } else {
            console.log("No service needed.");
        }
    }
}

// Test the Vehicle instance from the base class
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "black", 50000);
console.log(`Vehicle Make: ${v.make}`);  // Output: Mercury

// Create instances of the Car class and test them
let car1 = new Car("Toyota", "Corolla", 2021, "blue", 15000);
let car2 = new Car("Honda", "Civic", 2020, "red", 32000);

// Testing car1 instance
car1.start();                      // Output: Car started!
car1.loadPassenger(4);             // Output: 4 passengers loaded. Current passengers: 4
car1.scheduleServiceCheck(car1.mileage);  // Output: No service needed.

// Testing car2 instance
car2.start();                      // Output: Car started!
car2.loadPassenger(6);             // Output: Not enough room to load all passengers.
car2.scheduleServiceCheck(car2.mileage);  // Output: Service required!