import './style.css';
import clearCompletedTasks from './addRemove.js';
import interactive from './interactive.js';

class ToDoItem {
    constructor(description) {
        this.description = description;
        this.completed = false;
        this.index = 0;
    }
}

class ToDoList {
    constructor(taskArr = [], container ) {
        this.taskArr = taskArr;
        this.container = document.querySelector(container);
    }
    addToDo(toDo) {
        const newToDo = new ToDoItem(toDo);
        this.taskArr.push(newToDo);
        this.taskArr = this.taskArr.map((toDo, index = 1) => {
            toDo.index = index;
            return toDo;
        });
        this.displayToDo();
        this.setToLocalStorage(this.taskArr);
        console.log(this.taskArr);
        window.location.reload();
    }
    removeToDo(todoId) {
        const filterToDo = this.taskArr.filter((todo) => parseInt((todoId), 10) !== todo.index);
        this.taskArr = filterToDo;
         // update index
         this.taskArr = this.taskArr.map((todo, index = 1) => {
           todo.index = index;
           return todo;
         });
         this.displayToDo();
         this.setToLocalStorage(this.toDoTasksArray);
         window.location.reload();
       }
    setArray(newArr) {
        this.taskArr = newArr;
        this.setToLocalStorage(this.taskArr);
    }
    getArray() {
        return this.taskArr;
    }
    setToLocalStorage() {
        console.log(this.taskArr);
        localStorage.setItem('lists', JSON.stringify(this.taskArr));
    }
    getFromLocalStorage() {
        const getList = localStorage.getItem('lists');
        if (getList) {
            this.taskArr = JSON.parse(getList);
        }
        this.displayToDo();
    }
    displayToDo() {
        this.taskArr.sort((a, b) => a.index - b.index);
    
        this.container.innerHTML = this.taskArr.map((todo) => `
            <article id=${todo.index}>
            <div>
            <input ${todo.completed ? 'checked' : ''} type="checkbox">
            <textarea class = "${todo.completed ? 'complete' : ''} text-area-class" rows="1" cols="30">${todo.description}</textarea> 
            <button id=${todo.index} class="todo-btn" > &#128465;</button></div>
            <hr class="line-break">
            </article>`).join('');
    }
}
const myToDo = new ToDoList([], '.todo-form');
const inputField = document.querySelector('.todo-input');
const inputTodo = document.getElementById('input-todo');

inputField.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    myToDo.addToDo(inputTodo.value);
    inputTodo.value = '';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  myToDo.getFromLocalStorage();
  myToDo.displayToDo();
  clearCompletedTasks();

  const btn = document.getElementsByClassName('todo-btn');

  for (let i = 0; i < btn.length; i += 1) {
    btn[i].addEventListener('click', (e) => {
      const remove = e.target.id;
      myToDo.removeToDo(remove);
    }, false);
  }
});

document.addEventListener('click', (e) => {
    interactive(e);
    const todoId = e.target.parentElement.parentElement.id;
    if (e.target.checked) {
      const upDatedToDo = myToDo.getArray().map((todo) => {
        if (todo.index === parseInt((todoId), 10)) {
          const newTodo = { ...todo };
          newTodo.completed = true;
          return newTodo;
        }
        return todo;
      });
      myToDo.setArray(upDatedToDo);
    } else {
      const upDatedToDo = myToDo.getArray().map((todo) => {
        if (todo.index === parseInt((todoId), 10)) {
          const newTodo = { ...todo };
          newTodo.completed = false;
          return newTodo;
        }
        return todo;
      });
      myToDo.setArray(upDatedToDo);
    }
  });

export default myToDo;