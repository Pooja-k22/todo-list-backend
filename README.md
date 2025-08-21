# ToDo List frontend

To-Do application that allows users to manage tasks efficiently. Users can add, update, mark as complete, and delete tasks. The app provides a simple, responsive interface and persists data using a backend server.

---

## Tech Stack

Frontend: React.js, Tailwind, Axios, React Icons, Context Api |
Backend: Node.js, Express.js |
Database:  MongoDB |
Authentication: JWT  |

## Setup Instructions

1. **Clone the repository**
   ```sh
   git clone https://github.com/Pooja-k22/todo-list-backend.git
   cd todo-list-backend
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Create a .env file and add environment variables**

 ```sh
 DATABASE = <your_mongo_uri>
 JWT_SECRET = <your_jwt_secret>
   ```

4. **Start the backend server**
   ```sh
   npm start
   ```


   
  


---

## API Routes

| Method | Route                      | Description               |
|--------|----------------------------|----------------------------|
| POST   | `/register`                | Register a new user        |
| POST   | `/login`                   | User login                 |
| POST   | `/add-item`                | Add a new todo item        |
| GET    | `/get-item`                | Get all todo items         |
| GET    | `/get-item-one/:id`        | Get details of a item      |
| PUT    | `/edit-item/:id`           | Edit item                  |
| PUT    | `/status-update/:id`       | Update status              |
| DELETE | `/delete/:id`              | Delete item                |
---



