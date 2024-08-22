const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function (event) {
	event.preventDefault();
	const newTask = todoInput.value;

	if (newTask === '') {
		alert('Please enter a task!');
		return;
	}

	addTask(newTask);

	todoInput.value = '';
});

function addTask(task) {
	const listItem = document.createElement('li');
	const taskText = document.createElement('span');
	taskText.textContent = task;
	listItem.appendChild(taskText);

	const checkBox = document.createElement('input');
	checkBox.setAttribute('type', 'checkbox');
	listItem.appendChild(checkBox);

	const deleteBtn = document.createElement('button');
	deleteBtn.textContent = 'Delete';
	listItem.appendChild(deleteBtn);

	todoList.appendChild(listItem);

	checkBox.addEventListener('change', function () {
		if (this.checked) {
			taskText.style.textDecoration = 'line-through';
		} else {
			taskText.style.textDecoration = 'none';
		}
	});

	deleteBtn.addEventListener('click', function () {
		todoList.removeChild(listItem);
	});
}