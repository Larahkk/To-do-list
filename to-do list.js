const tasks = document.getElementById('task-list');
const addButton = document.getElementById('add');

addButton.addEventListener('click', function () {
    const taskInput = document.getElementById('task');
    const descriptionInput = document.getElementById('description');
    const dateInput = document.getElementById('date');
    

    if (
        taskInput.value.trim() === '' ||
        descriptionInput.value.trim() === '' ||
        dateInput.value === ''
    ) {
        alert('Preencha todos os campos.');
        return;
    }

    const taskItem = document.createElement('li');

    taskItem.innerHTML = `
        <strong>${taskInput.value}</strong>
        <p>${descriptionInput.value}</p>
        <small>Data: ${dateInput.value}</small>
        <button class="remove">Remover</button>
    `;

    tasks.appendChild(taskItem);
    

    taskItem.querySelector('.remove').addEventListener('click', function () {
        taskItem.remove();
    });

    taskInput.value = '';
    descriptionInput.value = '';
    dateInput.value = '';
});