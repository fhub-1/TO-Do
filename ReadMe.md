Here's a breakdown of what each part of the code does:

    HTML Elements:
        taskInput: Represents the input field where users can enter new tasks.
        addButton: Represents the button to add a new task.
        taskList: Represents an unordered list where tasks are displayed.

    Loading Tasks on Page Load:
        The window.addEventListener("load", loadTasks) line ensures that when the page loads, it will call the loadTasks function to retrieve and display any previously saved tasks from localStorage.

    Adding a Task:
        The addButton has an event listener that calls the addTask function when clicked.
        The taskInput field also has an event listener that calls addTask when the Enter key is pressed.
        The addTask function:
            Gets the task text from the input field, trims any leading/trailing whitespace, and checks if it's empty.
            Creates a new list item (<li>) element to represent the task.
            Appends a "Delete" button to each task item.
            Appends the task item to the task list.
            Saves the task to localStorage using the saveTask function.
            Clears the input field.
            Attaches a delete event to each task's "Delete" button.

    Storing and Removing Tasks:
        The saveTask function:
            Retrieves the current tasks from localStorage.
            Pushes the new task into the tasks array.
            Stores the updated tasks array back in localStorage as a JSON string.
        The removeTask function:
            Retrieves the current tasks from localStorage.
            Filters the tasks to remove the specified task.
            Stores the updated tasks array back in localStorage as a JSON string.

    Loading Tasks from localStorage:
        The loadTasks function retrieves tasks from localStorage, parses them from JSON, and adds each task to the task list.
        It also attaches a delete event to each loaded task's "Delete" button to enable task deletion.
