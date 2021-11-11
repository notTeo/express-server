const Router = require("express").Router;
const responses = require("../utils/responses")

const router = new Router();
const getSuccessResponse = responses.getSuccessResponse
const getErrorResponse = responses.getErrorResponse

let users = [
  {
    id: Math.floor(Math.random() * 9999),
    name: "john",
    lastName: "Doe",
    age: Math.floor(Math.random() * 99),
    email: "000001@email.com",
  },
  {
    id: Math.floor(Math.random() * 9999),
    name: "Nick",
    lastName: "Theo",
    age: Math.floor(Math.random() * 99),
    email: "000002@email.com",
  },
  {
    id: Math.floor(Math.random() * 9999),
    name: "Mahmed",
    lastName: "Ali",
    age: Math.floor(Math.random() * 99),
    email: "000003@email.com",
  },
  {
    id: Math.floor(Math.random() * 9999),
    name: "Tony",
    lastName: "Stark",
    age: Math.floor(Math.random() * 99),
    email: "000004@email.com",
  },
  {
    id: Math.floor(Math.random() * 9999),
    name: "Mc'",
    lastName: "Gragor",
    age: Math.floor(Math.random() * 99),
    email: "000005@email.com",
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

router.delete("/delete/:id", (req, res) => {
  try {
    const user = users.find((user) => user.id === req.params.id);
    if (user) {
      res.send(users = users.filter((user) => user.id != req.params.id));
    }
  } catch (e) {
    res.send(getErrorResponse(e.message));
  }
});

// router.post("/", (req, res) => {
//   res.send(users.slice( 0, getSuccessResponse({name : "NewUsersName", age: "69" })))
// });


module.exports = {
  router,
};
