const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel, TodoModel } = require("./db");
const { Authentication } = require("./Authentication");
const { mongoose } = require("mongoose");
const app = express();
const JWT_SECRET = "Hello123";
app.use(express.json());

mongoose.connect(
  "mongodb+srv://nk9959745_db_user:hNq1Ip7Wag5DA4Cf@cluster0.bulzd8c.mongodb.net/Todo-app-database",
);

app.post("/signup", async function (req, res) {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const hashedPassword = await bcrypt.hash(password, 10);

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Enter the complete credentials please!",
      });
    }
    await UserModel.create({
      email: email,
      password: hashedPassword,
      name: name,
    });

    res.status(201).json({
      message: "You are signed up!",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      Error: error,
    });
  }
});

app.post("/login", async function (req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Enter the complete credentials please!",
      });
    }
    const user = await UserModel.findOne({
      email: email,
    });

    if (!user) {
      return res.status(403).json({
        message: "Invalid Email or password!",
      });
    }
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res.status(403).json({
        message: "Invalid credentials",
      });
    }
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_SECRET,
    );

    res.status(201).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      Error: error,
    });
  }
});

app.post("/todo", Authentication, async function (req, res) {
  try {
    const userId = req.userId;
    const title = req.body.title;
    const completed = req.body.completed;
    if (!title || completed === undefined) {
      return res.status(400).json({
        message: "Pls fill all the credentials",
      });
    }
    await TodoModel.create({
      userId: userId,
      title: title,
      completed: completed,
    });

    res.status(201).json({
      message: "New Todo added",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error,
    });
  }
});

app.get("/todo", Authentication, async function (req, res) {
  try {
    const userId = req.userId;
    const todos = await TodoModel.find({
      userId,
    });
    if (!todos) {
      return res.status(401).json({
        message: "Cannot find any Todo!",
      });
    } else {
      res.status(200).json({
        todos,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error,
    });
  }
});

app.listen(4000, () => {
  console.log("Listing at post 4000");
});
