const { myprofile, todo, deleteAccount } = require("../Controllers/UserController.js");
const { middleware } = require("../Middleware/Middleware");
const express = require("express");
const router = express.Router();
router.get("/profile", middleware, myprofile);
router.post("/todo", middleware, todo);
router.delete("/delete/:id",deleteAccount);
module.exports = router;
