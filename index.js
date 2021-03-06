const express = require("express");
const bodyParser = require("body-parser");
const e = require("express");
const usersRouter = require("./routers/users.router").router
const server = express();
const port = 3000;

server.use("/users", usersRouter)

// original
// server.get("/users/:id", (req, res) => {
//   res.send(users.find((user) =>{
//     return req.params.id === user.id;
//   }))
// });

// defensive programming



// server.get("/users/:id", (req, res) => {
//   res.send(users.find((user) =>{
//     if (id = true) {
//       return req.params.id === user.id;
//     }else {
//       res.send(UndefinedUser);
//     }
//   }))
// });

/*

server.post("/hi", (request, response) => {
//  if (!request.headers || request.headers["secret-key"] !== key) {
//    throw new Error("I don't know you")
//  }
  console.log({body: request.body})
  const name = request.body["name"]
  const lastname = request.body["lastname"]
  console.log({ name })
  console.log({ lastname })
  response.send(`Hi ${name} ${lastname}`)
})*/

// TODOS:
// put this all in a git repo  CHECK!!
// add prettier
// multiple small commits (with each commit containing a group of changes)CHECK!!
// GET /users (returns all users)CHECK!!
// GET /user/:id (returns user with that id or returns undefined)CHECK!!
// POST /user (reads the body, and adds a new entry in the users array)CHECK!!
// PUT /user/:id (finds the user with that id, reads the body, and updates the user)CHECK!!
// DELETE /user/:id (finds the user with that id, and removes it from the users array) CHECK!!

/*
server.listen(3000, () => {
  console.log("Server Started")
  console.log(users);
})*/

server.listen(3000, () => console.log("listening on port" + port + " Another day in the hustle"));