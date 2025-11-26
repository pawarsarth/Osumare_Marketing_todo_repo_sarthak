
Task Manager API
This project is a simple REST API built using Node.js and Express. It performs basic CRUD operations on a list of tasks and also supports pagination. The data is stored in an in-memory array for demonstration.

---

API Endpoints

1. Get all tasks 
   Method: GET
   URL: /tasks
   Description: Returns a list of tasks.

2. Get a single task
   Method: GET
   URL: /tasks/:id
   Description: Returns a specific task using its ID.

3. Create a task
   Method: POST
   URL: /tasks
   Body example:
   {
   "task": "Learn Node.js"
   }
   Description: Creates a new task.

4. Update a task
   Method: PUT
   URL: /tasks/:id
   Body example:
   {
   "task": "Updated task content"
   }
   Description: Updates an existing task.

5. Delete a task
   Method: DELETE
   URL: /tasks/:id
   Description: Deletes the task with the specified ID.

---

How It Works (Explanation)

1. Data Storage
   All tasks are stored in an array named "todo".
   Each task object contains:

* id: number
* task: string

3. Updating a Task
   The API uses the find() method to locate the correct task object and then updates its content.

4. Deleting a Task
   Deletion uses findIndex() to locate the task and splice() to remove it from the array.

5. Error Handling
   The API checks for invalid IDs and returns appropriate status codes such as 404 for "not found" and 500 for server errors.

---

How to Run the Project

1. Install dependencies
   npm install

2. Start the server
   node src/index.js

The server runs on:
[http://localhost:3000](http://localhost:3000)


