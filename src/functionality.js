const addForm = document.querySelector('.addForm');
const addNewTask = (array, value) => {
  array.push(value);
  localStorage.setItem('todoArray', JSON.stringify(array));
  addForm.reset();
};

const deleteTask = (array, id) => {
  array.splice(id, 1);
  for (let index = 0; index < array.length; index += 1) {
    array[index].index = index + 1;
  }
  localStorage.setItem('todoArray', JSON.stringify(array));
};

const editTask = (array, id, value) => {
  const edit = {
    description: value, completed: false, index: id,
  };
  array.splice(id, 1, edit);
  localStorage.setItem('todoArray', JSON.stringify(array));
};
export { addNewTask, deleteTask, editTask };