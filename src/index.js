import _ from 'lodash';
import './index.css';

const todoPlaceholder = document.querySelector('.todoPlaceholder');

const todoArray = [{ description: 'Wash Car', completed: false, index: 1 }, { description: 'Call Friends', completed: false, index: 2 }, { description: 'Submit Project', completed: false, index: 3 }];

const component = () => {
  const element = document.createElement('ul');
  const filteredArray = todoArray.sort((a, b) => a.index - b.index);
  let content = '';
  filteredArray.forEach((todo) => {
    content += `
    <li class='borderStyle'>
    <input checked=${todo.completed} type='checkbox' id='${todo.index}'/>
    <label for='${todo.index}'>${todo.description}</label>
    </li>
    `;
  });
  // Lodash, now imported by this script
  element.innerHTML = _.join([content], ' ');
  element.classList.add('listContent');
  return element;
};
const buttonElement = () => {
  const btnDelete = document.createElement('input');
  btnDelete.value = 'Clear all completed';
  btnDelete.classList.add('btn');
  btnDelete.classList.add('borderStyle');
  btnDelete.type = 'button';
  return btnDelete;
};
todoPlaceholder.appendChild(component());
todoPlaceholder.appendChild(buttonElement());