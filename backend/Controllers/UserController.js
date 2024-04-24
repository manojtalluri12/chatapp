const Todo = require("../Model/Todo");
const User = require("../Model/User");

exports.myprofile = async (req, res) => {
  try {
    let exist = await User.findById(req.user.id);
    return res.json({ exist });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "server error" });
  }
};

exports.todo = async (req, res) => {
  try {
    const { task } = req.body;
    const exist=await User.findById(req.user.id)
    if(!task){
      return res.status(400).json({message:"Enter message please"})
    }
    const newuser = new Todo({
      user: req.user.id,
      username:exist.username,
      task,
    });
    await newuser.save();
    return res.status(200).json({ message: "message addeded" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "server error" });
  }
};
exports.deleteAccount = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "sucessfully delete Your Account" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "server error" });
  }
};
