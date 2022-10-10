

class Employee{
    id="";
    name="";
    dept="";
    manager="";

    // initializing values to the properties.
    // employee.
    init(id, name, dept, manager){
        this.id=id;
        this.dept = dept;
        this.name = name;
        this.manager = manager;
    }
}

var e1 = new Employee();
// e1.init(1, "John Doe", "IT", "Manager");