const express = require("express")
const bodyParser = require('body-parser')
const server = express()
const port = 3000;


const users = [
  
  {
      id: "1",
      name: "john", 
      lastName: 'Doe',
      age: Math.floor(Math.random() * 99),
      email:"@email.com" 

  },
  {
      id: "2",
      name: "Nick", 
      lastName: 'Theo',
      age: Math.floor(Math.random() * 99),
      email:"@email.com"   
  },
  
]



server.get("/users", (req, res) => {
  res.send(users);
});

server.get("/users/:id", (req, res) => {
  res.send(users.find((user) =>{
    return req.params.id === user.id;
  }))
})


/*
server.use(bodyParser.json())

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
// put this all in a git repo
// add prettier
// multiple small commits (with each commit containing a group of changes)
// GET /users (returns all users)
// GET /user/:id (returns user with that id or returns undefined)
// POST /user (reads the body, and adds a new entry in the users array)
// PUT /user/:id (finds the user with that id, reads the body, and updates the user)
// DELETE /user/:id (finds the user with that id, and removes it from the users array)

/*
server.listen(3000, () => {
  console.log("Server Started")
  console.log(users);
})*/

server.listen(3000, () => console.log("listening on port" + port))


