const Router = require("express").Router;
const responses = require("../utils/responses")

const router = new Router();
const getSuccessResponse = responses.getSuccessResponse;
const getErrorResponse = responses.getErrorResponse;
const express = require("express");

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

let users = [
  {
    id: "1",
    name: "john",
    lastName: "Doe",
    age: Math.floor(Math.random() * 99),
    email: "000001@email.com",
  },
  {
    id: "2",
    name: "Nick",
    lastName: "Theo",
    age: Math.floor(Math.random() * 99),
    email: "000002@email.com",
  },
  {
    id: "3",
    name: "Mahmed",
    lastName: "Ali",
    age: Math.floor(Math.random() * 99),
    email: "000003@email.com",
  },
  {
    id: "4",
    name: "Tony",
    lastName: "Stark",
    age: Math.floor(Math.random() * 99),
    email: "000004@email.com",
  },
  {
    id: "5",
    name: "Mc'",
    lastName: "Gragor",
    age: Math.floor(Math.random() * 99),
    email: "000005@email.com",
  },
];

// In the future i want to make it 100% costom
const newUser = {
  id: "newId",
  name: "New",
  lastName: "user",
  age: Math.floor(Math.random() * 99),
  email: "000new@email.com"
}

router.get("/", (req, res) => {
  res.send(getSuccessResponse(users));
});

router.get("/:id", (req, res) => {
  try {
    const user = users.find((user) => user.id === req.params.id);
    if (user) res.send(getSuccessResponse(user));
    else res.send(getErrorResponse("User not found"));
  } catch (e) {
    res.send(getErrorResponse(e.message));
  }
});

router.delete("/del/:id", (req, res) => {
  try {
    const user = users.find((user) => user.id === req.params.id);
    if (user) {
      res.send(users = users.filter((user) => user.id != req.params.id));
      res.status(200).send("User Deleted")
    }
  } catch (e) {
    res.send(getErrorResponse(e.message));
  }
});

router.post("/post", (req, res) => {
  const user = newUser;
  users.push(user);
  res.status(200).send("User Created")
});


module.exports = {
  router,
};

//users.slice( 0, newUser)