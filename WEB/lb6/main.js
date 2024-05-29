const taskButton = document.querySelector('.to_do_list_button');
const filterSelect = document.querySelector('.to_do_list_filter');
const todo_display = document.querySelector('.to_do_list_display')

todo_display.addEventListener("click", (event) => removeTask(tasksList, event));
todo_display.addEventListener("click", (event) => checkTask(tasksList, event));
filterSelect.addEventListener("change", filter);
taskButton.addEventListener("click", () => addTask(tasksList));

const tasksList = [];

function addTask(array) {
    const taskTitle = document.querySelector(".to_do_list_input").value.trim();

    const taskbody = {
        "title" : taskTitle,
        "completed": false
    }

    array.push(taskbody)

    renderTasks(array)
}

function removeTask(array, event) {
    if (!event.target.classList.contains("to_do_delete_img")) return;
    const taskConteiner = event.target.closest(".to_do_task");
    const taskTitle = taskConteiner.querySelector('.to_do_title').textContent;
    const taskIndex = array.findIndex(item => item.title === taskTitle);
    array.splice(taskIndex, 1);


    renderTasks(array);
}

function checkTask(array, event) {
    if (!event.target.classList.contains("to_do_check_img")) return;
    const taskConteiner = event.target.closest(".to_do_task");
    const taskTitle = taskConteiner.querySelector('.to_do_title').textContent;
    const taskIndex = array.findIndex(item => item.title === taskTitle);


    array[taskIndex].completed = (array[taskIndex].completed === true) ? false : true;


    renderTasks(array);
}

function renderTasks(array) {
    const TasksConteiner = document.querySelector(".to_do_list_display");
    TasksConteiner.innerHTML = "";
    array.forEach( (element, index) => {
        TasksConteiner.insertAdjacentHTML(
            "afterbegin",
            `  <div class='to_do_task'>
        <span>${index + 1})</span>
        <div class='to_do_title'>${element.title}</div> 
        <div class='to_do_check'><img src="ico/check.png" alt="check" class="to_do_check_img"></div>
        <div class='to_do_delete'><img src="ico/trash.png" alt="check" class="to_do_delete_img"></div>   
        </div>`
        )
        if (element.completed === true) {
            const taskItem = TasksConteiner.querySelector('.to_do_task');
            taskItem.classList.add('completed');
        }
    });

}
function filter() {
    const filterValue = document.querySelector('.to_do_list_select').value;
    const tasksList = [...document.getElementsByClassName('to_do_task')];

    tasksList.forEach(task => {
        switch(filterValue) {
            case 'completed':
                if (!task.classList.contains('completed')) {
                    task.style.display = 'none';
                } else {
                    task.style.display = 'flex';
                }
                break;
            case 'incomplete':
                if (task.classList.contains('completed')) {
                    task.style.display = 'none';
                } else {
                    task.style.display = 'flex';
                }
                break;
            case 'all':
                task.style.display = 'flex';
                break;
        }
    });
}

window.addEventListener('beforeunload', () => {
    localStorage.setItem("tasks", JSON.stringify(tasksList));
});

window.addEventListener('load', () => {
    const raw = localStorage.getItem("tasks");
    const tasks = JSON.parse(raw);
    if (tasks) {
        tasksList.push(...tasks);
        renderTasks(tasksList);
    }
});
