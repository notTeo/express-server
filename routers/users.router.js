const Router = require("express").Router;
const responses = require("../utils/responses")

const router = new Router();
const getSuccessResponse = responses.getSuccessResponse
const getErrorResponse = responses.getErrorResponse

const users = [
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

module.exports = {
  router,
};
