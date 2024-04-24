const User = require("../Model/User.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.signup = async (req, res) => {
  const { username, email, password, confirmpassword } = req.body;
  try {
    const exist = await User.findOne({ email });

    const hashedPassword = bcryptjs.hashSync(password, 10);

    if( !username || !email || !password || !confirmpassword){
      return res.status(400).json({ message: "Fill the form" });
    }
    if (exist) {
      return res.status(400).json({ message: "email already exist" });
    }
    if (password !== confirmpassword) {
      return res.status(400).json({ message: "password not match" });
    }
    const newuser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newuser.save();
    return res.status(200).json({ message: "sucessfully signUp" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "server error" });
  }
};
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const exist = await User.findOne({ email });
    if (!exist) {
      return res.status(400).json({ message: "email not exist" });
    }
    const validpassword = bcryptjs.compareSync(password, exist.password);
    if (!validpassword) {
      return res.status(400).json({ message: "password not match" });
    }
    const payload = {
      user: {
        id: exist._id,
      },
    };
    //console.log(payload);
    jwt.sign(payload, "jwt", { expiresIn: "70h" }, (err, token) => {
      if (err) throw err;
      return res.json({ token });
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "server error" });
  }
};

exports.all = async (req, res) => {
  try {
    const exist = await User.find();
    return res.status(200).json(exist);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "server error" });
  }
};
