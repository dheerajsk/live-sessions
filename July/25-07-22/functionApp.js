

var countOfobjects=0;

class FunctionApp{

    count;
    // whenever object is created, constructor is invoked.
    // it is invoked as soon as object is created.
    constructor(){
        countOfobjects++;
    }

    countOjects(){
        console.log("Count of Objects = "+countOfobjects);
    }

    doLogic2(){
        console.log("Performing logic 2");
    }

    doLogic3(){
        console.log("Performing logic 3");
        console.log(this);
        // calling another method using same object.
        this.doLogic2();
    }
}

const obj1 = new FunctionApp();
const obj2 = new FunctionApp();
const obj3 = new FunctionApp();
obj1.countOjects();
obj1.doLogic3();
