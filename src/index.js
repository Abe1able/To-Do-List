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
    index: 3,
  },
  {
    description: 'Work out',
    completed: false,
    index: 2,
  },
  {
    description: 'Work in',
    completed: false,
    index: 0,
  },
];

const forms = document.querySelector('.todo-form');

List.sort((a,b) => a.index-b.index);

List.forEach((item) => {
  forms.innerHTML += `<div class="todo-form-group r-div ${item.index}">
  <div>
  <input class="checkbox" type="checkbox">
  <label>${item.description}</label>
  </div>
  <i class="fa-solid fa-arrows-to-dot"></i>
</div>`;
});