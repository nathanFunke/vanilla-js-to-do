var todos = get_todos();

function get_todos() {
  var new_todos = new Array;
  var todos_str = localStorage.getItem('todo');
  
  if (todos_str !== null) {
     new_todos = JSON.parse(todos_str);
  };
  return new_todos;
}

function show() {
  var html    = '<ul>';
  
  for (var i=0; i < todos.length; i++) {
    html += '<li>' + '<button class="remove" id="' + i + '">x</button>' + ' ' + todos[i] + '</li>';
  };
  html += '</ul>';
  document.getElementById('todos').innerHTML = html;
  addListener();
}

function addListener() {
  var buttons = document.getElementsByClassName('remove');

  for (var i=0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', removeItem);
  };
}

function addItem() {
  var task  = document.getElementById('task').value;
  
  todos.push(task);
  localStorage.setItem('todo', JSON.stringify(todos));
  show();
  document.getElementById('task').value = '';
  return false;
}

function removeItem() {
  var id    = this.getAttribute('id');
  
  todos.splice(id, 1);
  localStorage.setItem('todo', JSON.stringify(todos));
  show();
  return false;
}


document.getElementById('add').addEventListener('click', addItem);
show();