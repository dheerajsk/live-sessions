
// Parent/Super
class Car{
    engine="";
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

    build(){
        console.log("Building car with common tools...");
    }
}


// Child/Dervied/Sub class.
class SportsCar extends Car{
    speedLimit="";
    hp="";
    nitro="";

    constructor(engine, seats, airBags, price, speedLimit, hp, nitro){
        // call base class constructor.
        super(engine, seats, airBags, price);
        this.speedLimit = speedLimit;
        this.hp = hp;
        this.nitro = nitro;
    }

    race(){
        console.log("Racing...");
    }

    // overridden logic of base class build method.
    build(){
        console.log("Building with special tools for sports car...");
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

    build(){
        super.build(); // build of car.
        console.log("building better entertainment");
    }
}


class BudgetFamilyCar extends FamilyCar{

    build(){
        super.build(); // build of family car.
        console.log("reducing number of seats");
    }
}

// var scar = new SportsCar("Tata", 7, 4, 5000000, 250, 5000, true);
// scar.drive();// parent
// scar.race(); // its own
// scar.build(); // parent


// var fcar = new FamilyCar("Tata", 5, 4, 500000, 4, true);
// fcar.build();

var bfcar = new BudgetFamilyCar();
bfcar.build();

// fcar.race(); // invalid