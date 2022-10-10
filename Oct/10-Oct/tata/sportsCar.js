

// Parent/Super
class Car{
    engine=""
    seats="";
    airBags = "";
    price="";

    constructor(engine, seats, airBags, price){
        console.log("... parent constructor called");
        this.engine = engine;
        this.seats = seats;
        this.airBags = airBags;
        this.price = price;
    }

    drive(){
        console.log("Driving...")
    }
}


// Child/Dervied/Sub class.
class SportsCar extends Car{
    speedLimit="";
    hp="";
    nitro="";

    constructor(engine, seats, airBags, price, speedLimit, hp, nitro){
        super(engine, seats, airBags, price);
        this.speedLimit = speedLimit;
        this.hp = hp;
        this.nitro = nitro;
    }

    race(){
        console.log("Racing...");
    }
}


class FamilyCar extends Car{
    comfortLevel = "";
    childSafety="";

    constructor(engine, seats, airBags, price, comfortLevel, childSafety){
        super(engine, seats, airBags, price);
        this.comfortLevel = comfortLevel;
        this.childSafety = childSafety;
    }

    driveSafe(){
        console.log("Driving safe....");
    }
}

var scar = new SportsCar("Tata", 7, 4, 5000000, 250, 5000, true);
scar.drive();// parent
scar.race(); // its own


var fcar = new FamilyCar("Tata", 5, 4, 500000, 4, true);
fcar.drive(); // parent
fcar.driveSafe(); // own 
// fcar.race(); // invalid