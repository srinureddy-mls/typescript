class Vehicle{
    honk(): void{
        console.log("Vehicle Honks");
    }
}
class Car extends Vehicle{
    display(): void{
        console.log("This is a Car");
    }
}
let car = new Car();
car.honk();
car.display();
