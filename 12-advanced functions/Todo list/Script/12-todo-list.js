const todoList = JSON.parse(localStorage.getItem('todo')) || []
renderTodoList()

document.querySelector('.js-add-button').addEventListener('click', () => {
    addTodo()
  })

function renderTodoList() {
  let todoListHTML = ''
  
  todoList.forEach((TodoObject, index) => {
    const {name, dueDate} = TodoObject
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-button js-delete-button">Delete</button>`
    todoListHTML += html
  })

  document.querySelector('.js-todo-list').innerHTML = todoListHTML

  document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      removeTodo(index)
    })
  })

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