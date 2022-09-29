import _ from 'lodash';
import './style.css';

const List = [
  {
    description: 'Finish Project',
    completed: true,
    index: 1,
  },
  {
    description: 'Read a book',
    completed: true,
    index: 2,
  },
  {
    description: 'Work out',
    completed: false,
    index: 3,
  },
];

const forms = document.querySelector('.todo-form');

List.forEach((item) => {
  forms.innerHTML += `<div class="todo-form-group r-div ${item.index}">
  <div>
  <input class="checkbox" type="checkbox">
  <label>${item.description}</label>
  </div>
  <i class="fa-solid fa-arrows-to-dot"></i>
</div>`;
});