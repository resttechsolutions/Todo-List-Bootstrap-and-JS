document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e){
    
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    
    const task = {
        title,
        description
    }

    // localStorage.setItem('tasks', JSON.stringify(task));

    // JSON.parse(localStorage.getItem('tasks'));

    if (localStorage.getItem('tasks') === null) {
        let tasks = [];
        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        let tasks = JSON.parse(localStorage.getItem('tasks'));

        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    epreventDefault();
}