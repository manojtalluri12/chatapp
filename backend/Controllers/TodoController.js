const Todo = require("../Model/Todo");
const User = require("../Model/User");

exports.gettodo = async (req, res) => {
  try {
    const data = await Todo.find();
    return res.json({ data });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "server error" });
  }
};
exports.deletetodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "sucessfully delete message" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "server error" });
  }
};
exports.todouser = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.user);
    console.log(req.params.user);
    return res
      .status(200)
      .json({ message: "sucessfully deleted chat and account" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "server error" });
  }
};
