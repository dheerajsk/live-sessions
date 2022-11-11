
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

    const li="<li id=listItem"+todos.length+"><label id=todo"+todos.length+" style='width:80%'>"+text+"</label><button id=editBtn"+todos.length+" onclick='handleEditClick(event)' class='btn btn-primary'>Edit</button>&nbsp;&nbsp;&nbsp;<button class='btn btn-danger'>Delete</button></li>"
    // Find the ul where we need to add created li.
    const ul = document.getElementById("todoList");

    // Append li to innerhtml of ul.
    ul.innerHTML= ul.innerHTML+li;

}

function handleEditClick(event){
   
    // 1. Get ID of button.
    // 2. using that get id of label.
    // 3. get label.
    // 4. create text box.
    // 5. assign value of textbox to label text.
    // 6. get li.
    // 7. add textbox to li.


    // event object contains information related to the event.
    // event.target => points to the element which has raised event.
    const button = document.getElementById(event.target.id);
    const labelID=event.target.id.replace("editBtn","todo");
    const label = document.getElementById(labelID);
    
    
    button.innerText="Save";
    // label.style.display="none";

    // Create a text box and add it to li.
    const txtBox = "<input value='"+label.innerText+"' class='form-control' type='text' id='txtBoxToDoUpdate' />";
    label.style.display="none";
    const liID=event.target.id.replace("editBtn","listItem");
    const li = document.getElementById(liID);
    li.innerHTML=txtBox+li.innerHTML;

    
}