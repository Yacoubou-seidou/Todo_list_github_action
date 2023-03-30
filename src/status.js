export default (array, index, value) => {
  array[index].completed = value;
  localStorage.setItem('todoArray', JSON.stringify(array));
};