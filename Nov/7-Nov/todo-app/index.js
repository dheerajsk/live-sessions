
let todos=[];

function handleToDoFormSubmit(){
    console.log("Form submitted");

    // 1. Get The Text box.
    const txtTodo = document.getElementById("txtTodo");
    console.log(txtTodo);

    // 2. Get data from text box.
    const todoTextValue = txtTodo.value;
    txtTodo.value="";
    console.log(todoTextValue);
    createTodoListItem(todoTextValue);
}

function createTodoListItem(text){
    todos.push(text);

    const li="<li><label id=todo"+todos.length+" style='width:80%'>"+text+"</label><button id=editBtn"+todos.length+" onclick='handleEditClick(event)' class='btn btn-primary'>Edit</button>&nbsp;&nbsp;&nbsp;<button class='btn btn-danger'>Delete</button></li>"
    // Find the ul where we need to add created li.
    const ul = document.getElementById("todoList");

    // Append li to innerhtml of ul.
    ul.innerHTML= ul.innerHTML+li;

}

function handleEditClick(event){
    console.log(event.target.id);
    const labelID=event.target.id.toString().replace("editBtn","todo");
    const label = document.getElementById(labelID);
    label.style.display="none";
    // label.style.display="none";

    console.log(label);
    console.log("handling edit click");
}