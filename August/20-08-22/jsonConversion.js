
class Student{

}

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

const rohitObj = new Environmentalist("Rohit", "UK");
console.log(rohitObj);
console.log(rohitObj instanceof Environmentalist);

// converts a Javascript obj to json string.
const rohitJsonObj = JSON.stringify(rohitObj);

console.log(rohitJsonObj);
console.log(typeof rohitJsonObj);
console.log(rohitJsonObj instanceof Environmentalist);

const parsedRohitObj = JSON.parse(rohitJsonObj);
console.log(parsedRohitObj);
console.log(Object.keys(parsedRohitObj));
