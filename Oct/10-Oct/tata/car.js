

// Parent/Super
class Car{
    engine=""
    seats="";
    airBags = "";
    price="";

    constructor(engine, seats, airBags, price){
        this.engine = engine;
        this.seats = seats;
        this.airBags = airBags;
        this.price = price;
    }

    drive(){
        console.log("Driving...")
    }
}

