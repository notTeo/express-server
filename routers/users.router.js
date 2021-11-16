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
    name: "john",
    lastName: "Doe",
    age: Math.floor(Math.random() * 99),
    email: "000001@email.com",
    id: "1"
  },
  {
    name: "Nick",
    lastName: "Theo",
    age: Math.floor(Math.random() * 99),
    email: "000002@email.com",
    id: "2",
  },
  {
    name: "Mahmed",
    lastName: "Ali",
    age: Math.floor(Math.random() * 99),
    email: "000003@email.com",
    id: "3",
  },
  {
    name: "Tony",
    lastName: "Stark",
    age: Math.floor(Math.random() * 99),
    email: "000004@email.com",
    id: "4",
  },
  {
    name: "Mc'",
    lastName: "Gragor",
    age: Math.floor(Math.random() * 99),
    email: "000005@email.com",
    id: "5",
  },
];


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

router.delete("/:id", (req, res) => {
  try {
    const user = users.find((user) => user.id === req.params.id);
    if (user) {
      users = users.filter((user) => user.id != req.params.id);
      res.status(200).send(getSuccessResponse("User deleted successfully"))
    }
  } catch (e) {
    res.send(getErrorResponse(e.message));
  }
});

router.post("/post", (req, res) => {
  const user = req.body;
  if(user){
    if(!req.body.name || !req.body.lastName || !req.body.age || !req.body.email) {
      res.send(getErrorResponse("Please enter your all data to continue..."));
    }
    else {
      user["id"] = "8";
      users.push(user);
      res.status(200).send(getSuccessResponse("User Created"));
    }
    // if(user["lastName"] = "" )getErrorResponse("Please enter your last name to continue...");
    // if(user["age"] = "" )getErrorResponse("Please enter your age to continue...");
    // if(user["email"] = "" )getErrorResponse("Please enter your email to continue...");
  }
});

router.put("/:id", (req, res) => {
  const user = users.find((user) => user.id === req.params.id);
  const userbody = req.body;
  if (user){ 
    userbody['name'] = req.body.name
    res.status(200).send(getSuccessResponse("User was edited"))
  }
  else res.send(getErrorResponse("User not found"));
})


module.exports = {
  router,
};

//users.slice( 0, newUser)