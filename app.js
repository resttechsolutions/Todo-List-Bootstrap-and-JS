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
    
    getTask();
    
    document.getElementById('formTask').reset();

    e.preventDefault();
}

function getTask(){
    let tasks = JSON.parse(localStorage.getItem('tasks'));

    let tasksView = document.getElementById('tasks');

    tasksView.innerHTML ='';

    for (let i = 0; i < tasks.length; i++) {
        let title = tasks[i].title;
        let description = tasks[i].description;

        tasksView.innerHTML += `<div class="card">
            <div class="card-body">
                <p>${title} - ${description}</p>
                <a onclick="deleteTask('${title}')" class="btn btn-danger">Delete</a>
            </div>
        </div>`
        
    }
}

function deleteTask(title){
    let tasks = JSON.parse(localStorage.getItem('tasks'));

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].title == title) {
            tasks.splice(i, 1);
        }
        
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));

    getTask();
}