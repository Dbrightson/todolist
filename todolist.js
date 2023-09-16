document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task"); /* Gets the input element with the id "task". */
    const addTaskButton = document.getElementById("add-task"); /* Gets the button element with the id "add-task". */
    const taskList = document.getElementById("task-list"); /* Gets the <ul> element with the id "task-list". */

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); /* Gets the trimmed value from the input field. */
        if (taskText !== "") { /* Checks if the input is not empty. */
            const listItem = document.createElement("li"); /* Creates a new <li> element. */
            listItem.innerHTML = `
                <input type="checkbox" class="task-checkbox">
                <label>${taskText}</label>
                <button class="remove-task">Remove</button>
            `; /* Populates the <li> element with HTML including a checkbox, label, and remove button. */
            taskList.appendChild(listItem); /* Appends the new task item to the task list. */
            taskInput.value = ""; /* Clears the input field. */

            const removeButton = listItem.querySelector(".remove-task"); /* Finds the remove button in the newly created task item. */
            removeButton.addEventListener("click", function () {
                taskList.removeChild(listItem); /* Removes the task item when the remove button is clicked. */
            });

            const checkbox = listItem.querySelector(".task-checkbox"); /* Finds the checkbox in the newly created task item. */
            checkbox.addEventListener("change", function () {
                if (checkbox.checked) {
                    listItem.style.textDecoration = "line-through"; /* Strikes through the task text when the checkbox is checked. */
                    listItem.style.color = "green"; /* Changes the text color to green when the checkbox is checked. */
                } else {
                    listItem.style.textDecoration = "none"; /* Removes text decoration when the checkbox is unchecked. */
                    listItem.style.color = "black"; /* Resets text color to black when the checkbox is unchecked. */
                }
            });
        }
    }

    // Handle adding tasks on Enter key press
    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addTask(); /* Calls the addTask function when Enter key is pressed in the input field. */
        }
    });

    // Handle adding tasks on button click
    addTaskButton.addEventListener("click", addTask); /* Calls the addTask function when the "Add" button is clicked. */
});
