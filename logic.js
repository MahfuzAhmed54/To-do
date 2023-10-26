// Define an array to store tasks
const tasks = [];

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task");
        taskItem.innerHTML = `
            <p>${task.task}</p>
            <p>Priority: ${task.priority}</p>
            <p>Deadline: ${task.deadline}</p>
            <button class="mark-done">Mark Done</button>
            <button class="delete-task">Delete</button>
            <button class="edit-task">Edit</button>
        `;

        // Attach event listeners for the buttons
        const markDoneButton = taskItem.querySelector(".mark-done");
        markDoneButton.addEventListener("click", () => markTaskDone(index));

        const deleteButton = taskItem.querySelector(".delete-task");
        deleteButton.addEventListener("click", () => deleteTask(index));

        const editButton = taskItem.querySelector(".edit-task");
        editButton.addEventListener("click", () => editTask(index));

        taskList.appendChild(taskItem);
    });
}

// Function to add a task
function addTask() {
    const taskInput = document.getElementById("task");
    const priorityInput = document.getElementById("priority");
    const deadlineInput = document.getElementById("deadline");

    const task = taskInput.value;
    const priority = priorityInput.value;
    const deadline = deadlineInput.value;

    // Add the task to the tasks array
    tasks.push({ task, priority, deadline });

    // Render the updated tasks
    renderTasks();

    // Clear input fields
    taskInput.value = "";
    priorityInput.value = "top";
    deadlineInput.value = "";
}

// Function to mark a task as done
function markTaskDone(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Function to edit a task
function editTask(index) {
    const taskInput = document.getElementById("task");
    const priorityInput = document.getElementById("priority");
    const deadlineInput = document.getElementById("deadline");

    const { task, priority, deadline } = tasks[index];
    taskInput.value = task;
    priorityInput.value = priority;
    deadlineInput.value = deadline;

    tasks.splice(index, 1);
    renderTasks();
}

// Add a click event listener to the "Add Task" button
const addTaskButton = document.getElementById("add-task");
addTaskButton.addEventListener("click", addTask);

// Render the initial tasks
renderTasks();
