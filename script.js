const addBtn = document.getElementById('add-btn');
const taskListDiv = document.getElementById('task-list');
const clearBtn = document.getElementById('clear-btn');
const taskCount = document.getElementById('task-count');
const noTask = document.getElementById('no-task');
const taskInput = document.getElementById('task-input');


function addTask() {
    {
        const newTask = document.getElementById('task-input');
        // check if the task input is empty
        if (newTask.value !== '') {
            // increment task counter                     
            taskCount.innerText++;
            // create an element that contains task and a tick icon
            const taskAndTick = document.createElement('div');
            // create a task div
            const taskDiv = document.createElement('div');
            // create a tick icon div
            const tick = document.createElement('div');
            tick.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
            tick.style.color = 'white';
            // add classes to the created divs for styling 
            taskAndTick.classList.add('task-list-element');
            tick.classList.add('tick');
            // 
            tick.addEventListener('click', () => {
                const currentColor = tick.style.color;
                // if the color is white (incomplete task) change its color to black
                if (currentColor === 'white') {
                    // decrement the no of tasks remaining 
                    taskCount.innerText--;
                    tick.style.color = 'black';
                    // just a transition effect
                    tick.classList.toggle('rotate');
                }
                else {
                    // if the color is black (completed task) change its color to white 
                    taskCount.innerHTML++;
                    tick.style.color = 'white';
                    tick.classList.toggle('rotate');
                }
            });
            // append the taskAndTick to the list of tasks 
            taskListDiv.appendChild(taskAndTick);
            // the text inside the div should be the task that is input by user
            taskDiv.innerText = newTask.value;
            // now append the taskDiv and tick to taskAndTick
            taskAndTick.appendChild(taskDiv);
            taskAndTick.appendChild(tick);
            // as a task is added the heading no tasks should be removed
            noTask.innerHTML = '';
            // clear the input field 
            newTask.value = "";
            // a clear button will appear as its display is none when there are no tasks 
            clearBtn.style.display = 'inline';
        }
    }

}

addBtn.addEventListener('click', addTask);

// clear button funciton 
clearBtn.addEventListener('click', () => {
    // it will basically reset everything as it was in the beginning 
    noTask.innerHTML = 'No Tasks Yet';
    taskCount.innerText = 0;
    taskListDiv.innerHTML = '';
    // hide the clear button again 
    clearBtn.style.display = 'none'
})


taskInput.addEventListener('keydown', (e) => {
    // console.log(e)
    if (e.key === 'Enter') {
        addTask();
    }
})
