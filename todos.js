var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
  listElement.innerHTML = '';

  for(todo of todos){
    var todoElement = document.createElement('li');
    var linkElement = document.createElement('a');

    var todoText = document.createTextNode(todo);
    var linkText = document.createTextNode('Excluir');

    var index = todos.indexOf(todo);

    linkElement.setAttribute('href', '#');
    linkElement.setAttribute('onclick', 'removeTodo('+index+')');
    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo(){
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = '';
  
  storeLocally();
  renderTodos();
}

function removeTodo(index){
  todos.splice(index, 1);
  renderTodos();
}

function storeLocally(){
  localStorage.setItem('list_todos', JSON.stringify(todos))
}

buttonElement.onclick = addTodo;