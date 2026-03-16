# Todo Backend with MongoDB

A simple **Todo Backend API** built using **Node.js, Express, MongoDB, and JWT Authentication**.
This project demonstrates how to build a basic backend service with user authentication and a database.

---

## Features

* User Signup
* User Login
* Password hashing using bcrypt
* JWT Authentication
* Protected Routes
* Create Todo
* Fetch Todos
* Mark Todo as Completed
* MongoDB Database Integration with Mongoose

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (Authentication)
* bcrypt (Password Hashing)
* dotenv (Environment Variables)

---

## 📂 Project Structure

```
project
│
├── db.js
├── Authentication.js
├── index.js
├── package.json
└── .env
```

---

## ⚙️ Installation

Clone the repository

```
git clone https://github.com/nikhilxbuilds-ship-it/Todo-Backend-withDatabase.git
```

Navigate to the project folder

```
cd Todo-Backend-withDatabase
```

Install dependencies

```
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add:

```
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## ▶️ Run the Server

```
node index.js
```

Server will start on:

```
http://localhost:4000
```

---

## 📌 API Endpoints

### Auth

**POST /signup**

Create a new user.

Example Body:

```
{
  "name": "Nikhil",
  "email": "nikhil@email.com",
  "password": "123456"
}
```

---

**POST /login**

Login user and receive a JWT token.

Example Body:

```
{
  "email": "nikhil@email.com",
  "password": "123456"
}
```

---

### Todos

**POST /todo**
Create a new todo (Protected Route)

Example Body:

```
{
  "title": "Learn MongoDB"
}
```

---

**GET /todo**
Fetch all todos of the authenticated user.

---

**PUT /todo/:id/completed**
Mark a todo as completed.

---

## 📖 What I Learned

* Building REST APIs with Express
* JWT-based authentication
* Password hashing with bcrypt
* Connecting Node.js with MongoDB
* Using Mongoose models
* Protecting routes using middleware

---

## 🔮 Future Improvements

* Delete Todo endpoint
* Update Todo title
* Input validation
* Better project folder structure
* Pagination for todos

---

## 💻 Author

Nikhil Kumar

GitHub:
https://github.com/nikhilxbuilds-ship-it

---

## ⭐ If you found this project helpful
Give it a **star on GitHub** ⭐
