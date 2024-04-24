const jwt = require("jsonwebtoken");

exports.middleware = async (req, res, next) => {
  try {
    const token = req.header("x-token");
    if (!token) {
      return res
        .status(400)
        .json({ message: "without login unable to see this page " });
    }
    const decode = jwt.verify(token, "jwt");
    req.user = decode.user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "server error" });
  }
};
