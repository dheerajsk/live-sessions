

function handleToDoFormSubmit(){
    console.log("Form submitted");

    // 1. Get The Text box.
    const txtTodo = document.getElementById("txtTodo");
    console.log(txtTodo);

    // 2. Get data from text box.
    const todoTextValue = txtTodo.value;
    console.log(todoTextValue);
    createTodoListItem(todoTextValue);
}

function createTodoListItem(text){
    const li="<li><label>"+text+"</label><button>Edit</button><button>Delete</button></li>"
    // Find the ul where we need to add created li.
    const ul = document.getElementById("todoList");

    // Append li to innerhtml of ul.
    ul.innerHTML= ul.innerHTML+li;

}