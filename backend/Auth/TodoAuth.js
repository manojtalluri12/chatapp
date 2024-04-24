const express = require("express");
const { middleware } = require("../Middleware/Middleware");
const {
  gettodo,
  deletetodo,
  todouser,
} = require("../Controllers/TodoController.js");

const router = express.Router();

router.get("/gettodo", middleware, gettodo);
router.delete("/deletetodo/:id", deletetodo);
router.delete("/todouser/:user",middleware, todouser);
module.exports = router;
