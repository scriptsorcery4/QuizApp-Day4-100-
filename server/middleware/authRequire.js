const jwt = require("jsonwebtoken");
const User = require('../modules/userModule');

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Authorizatione" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);

    req.user = await User.findOne({ _id });
    next();
  } catch (error) {
    res.status(401).json({ error: "Authorizatione is not" });
  }
};

module.exports = requireAuth;