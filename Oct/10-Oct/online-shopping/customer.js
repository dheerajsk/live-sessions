

// Creating a bluepreint of customer for program to understand who is a customer.
class Customer{
    // Properties.
    name="";
    age="";
    address="";
    userid="";
    mobile="";
    email="";

    // Assign values to the properties.
    constructor(_name, _age, _address, _userid, _mobile, _email){
        this.name = _name;
        this.age = _age;
        this.address = _address;
        this.userid = _userid;
        this.mobile = _mobile;
        this.email = _email;
        console.log(this.name);
    }

    // Methods.
    placeOrder(){
        this.trackOrder();
        console.log("Placed Order for "+this.name);
    }

    trackOrder(){

    }

    search(){

    }
}

// To create an object.
// creating an object using customer blueprint.
var customer1 = new Customer("John Doe", 20, "Mumbai", 1, 9988776655, "john.doe@gmail.com");
customer1.placeOrder();

var customer2 = new Customer("John Doe 2", 20, "Mumbai", 1, 9988776655, "john.doe@gmail.com");
customer2.placeOrder();
