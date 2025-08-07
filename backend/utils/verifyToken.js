const jwt = require("jsonwebtoken");
const config = require("../utils/config");


const JWT_SECRET = config.jwtSecret;

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  if (!token) return res.status(401).json({ message: "Token not found" });

  jwt.verify(token, JWT_SECRET, (err, userData) => {
    if (err) return res.status(403).json({ message: "Token invalid" });

    req.user = userData;
    next();
  });
};

module.exports = verifyToken;
