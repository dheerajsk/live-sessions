// Step 1: Create Prototype.
// Step 2: Create object/instance using prototype.
// Step 3: Assigned attributes to oject;
// Step 4: Call methods/perform actions.


class Environmentalist{
    // 1. Properties/attributes.
    // name, location
    constructor(name, location){
        // this keyword refers to object which has called the constructor.
        this.name = name;
        this.location = location;
    }
    // 2. Actions, methods, functions.
    surveyArea(){
        console.log("Area Surveyed by "+this.name);
        return 100;
    }

    showAlert(){
        //pushLibrary.call("Plant trees please");
        console.warn("Please plant more trees");
    }

    plantTrees(){
        console.log("10 trees planted");
    }
}

// new keyword is used to create new objects from a prototype.
// you can create infinite number of objects from a prototype.
const rohitObj = new Environmentalist("Rohit", "UK");
// how to call actions for an object.
rohitObj.surveyArea();
rohitObj.showAlert();
rohitObj.plantTrees();

const vivekObj = new Environmentalist("Vivek", "Pune");
// how to call actions for an object.
vivekObj.surveyArea();


// console.log(typeof rohitObj);


// // how to findout if rohitObj is object of Environmentatlist ?
// console.log(rohitObj instanceof Environmentalist);