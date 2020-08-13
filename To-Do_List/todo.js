//JavaScript code for to To-Do list project
var mylist = document.getElementById('todolist');


var createToDo = function(todo) {
    var todoitem = document.createElement('li');
    var input = document.createElement('input');
    var label = document.createElement('label');
    var button = document.createElement('button');

    input.type = 'checkbox';
    label.innerHTML = todo;
    button.className = 'delete';
    button.innerHTML = "Delete";

    todoitem.appendChild(input);
    todoitem.appendChild(label);
    todoitem.appendChild(button);

    button.onclick = function() {
        var parent = this.parentNode;
        var mparent = parent.parentNode;
        mparent.removeChild(parent);
    }

    return todoitem;

}

var addButton = document.getElementById('add');

addButton.onclick = function() {
  // store the button's parent element (.addTodo <div>) in a variable
    var parent = this.parentNode;
    // store the input, which is the *first* child element of the .addTodo <div>
    var input = parent.children[0];
  
  // write your event listener code here
    // get the input's value
    // if input isn't empty, create a new element and add it to the unordered list
    var mylist = document.getElementById('todoList');

    if(input.value != '') {
        var todo = createToDo(input.value);
        mylist.appendChild(todo);
    }
};