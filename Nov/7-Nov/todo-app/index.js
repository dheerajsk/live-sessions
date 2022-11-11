
let todos=[];

function handleToDoFormSubmit(){
    // console.log("Form submitted");

    // 1. Get The Text box.
    const txtTodo = document.getElementById("txtTodo");
    // console.log(txtTodo);

    // 2. Get data from text box.
    const todoTextValue = txtTodo.value;
    txtTodo.value="";
    // console.log(todoTextValue);
    createTodoListItem(todoTextValue);
}

function createTodoListItem(text){
    todos.push(text);

    // const li="<li id=listItem"+todos.length+"><label id=todo"+todos.length+" style='width:80%'>"+text+"</label><button id=editBtn"+todos.length+" onclick='handleEditClick(event)' class='btn btn-primary'>Edit</button>&nbsp;&nbsp;&nbsp;<button class='btn btn-danger'>Delete</button></li>"
   
    // 1. create li.
    // 2. add a label to li.
    // 3. add edit button
    // 4. add delete button.
    // 5. add li to ul.

    //1. Create li.
    const li = document.createElement("li");
    li.id="listItem"+todos.length;
    
    // 2. create label
    const label = document.createElement("label");
    label.id="todo"+todos.length;
    label.style.width="80%";
    label.innerText=text;

    // create edit button/
    const ebtn = document.createElement("button");
    ebtn.id="editBtn"+todos.length;
    ebtn.classList.add("btn");
    ebtn.classList.add("btn-primary");
    ebtn.innerText="Edit";
    ebtn.addEventListener("click",handleEditClick)

    // create delete button/
    const dbtn = document.createElement("button");
    dbtn.id="dBtn"+todos.length;
    dbtn.classList.add("btn");
    dbtn.classList.add("btn-danger");
    dbtn.innerText="Delete";
    dbtn.addEventListener("click",deleteToDo)

    li.appendChild(label);
    li.appendChild(ebtn);
    let span = document.createElement("span");
    span.innerHTML="&nbsp;&nbsp;"
    li.appendChild(span);
    li.appendChild(dbtn);

    // Find the ul where we need to add created li.
    const ul = document.getElementById("todoList");
    // Append li to innerhtml of ul.
    ul.appendChild(li);

}

function handleEditClick(event){
   
    // 1. Get ID of button.
    // 2. using id of button get id of label.
    // 3. get label.
    // 4. create text box.
    // 5. assign value of textbox to label text.
    // 6. get li.
    // 7. add textbox to li.

    // event object contains information related to the event.
    // event.target => points to the element which has raised event.
    
    const button = document.getElementById(event.target.id);
    const tb = document.getElementById("txtbUpdate");
    console.log(tb);
    if(tb){
        console.log("On edit mode");
        updateToDo(event);
        button.innerText="Edit";
        return;
    }

    const labelID=event.target.id.replace("editBtn","todo");
    const label = document.getElementById(labelID);

    button.innerText="Save";
    // label.style.display="none";

    // Create a text box and add it to li.
    const txtBox = document.createElement("input");
    txtBox.type="text";
    txtBox.id="txtbUpdate";
    txtBox.value=label.innerText;
    txtBox.classList.add("form-control");

    console.log("textbox created");
    label.style.display="none";
    const liID=event.target.id.replace("editBtn","listItem");
    const li = document.getElementById(liID);
    console.log(li);
    li.prepend(txtBox);
    
}

function updateToDo(event){

    // 1. To read data of text box
    const textb = document.getElementById("txtbUpdate");
    // 2. Create a label.
    const label = document.createElement("label");
    // 3. Add data to label.
    label.innerText=textb.value;
    label.id="todo"+event.target.id.replace("editBtn","");
    label.style.width="80%";
    // 4. Add label to li.
    const liID=event.target.id.replace("editBtn","listItem");
    const li = document.getElementById(liID);
    li.replaceChild(label, textb);
    

}

function deleteToDo(event){
    // 1. Get Delete button and its id.
    const button = document.getElementById(event.target.id);
    // 2. Get parent li.
    const li = button.parentElement;
    // 3. remove li.
    document.getElementById("todoList").removeChild(li);
}
