let todoList = JSON.parse(localStorage.getItem('todo')) || []
renderTodoList()

function renderTodoList() {
  let todoListHTML = ''
  
  for(let i=0; i<todoList.length; i++) {
    // const name = todoList[i].name
    // const dueDate = todoList[i].dueDate
    const {name, dueDate} = todoList[i]
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-button" onclick="removeTodo(${i})">Delete</button>`
    todoListHTML += html
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML
}

function addTodo(){
  const inputElement = document.querySelector('#js-name-input')
  const dateInputElement = document.querySelector('#js-due-date')
  const name = inputElement.value
  const dueDate = dateInputElement.value

  //todoList.push({"name": name, "dueDate": dueDate})
  todoList.push({name, dueDate})

  localStorage.setItem('todo', JSON.stringify(todoList))

  renderTodoList()

  inputElement.value = ''
}

function removeTodo(index) {
  todoList.splice(index, 1)
  todoList.length !== 0 ? localStorage.setItem('todo', JSON.stringify(todoList)) : localStorage.removeItem('todo')
  renderTodoList()
}