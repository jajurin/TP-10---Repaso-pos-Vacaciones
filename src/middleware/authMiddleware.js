const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"] || req.headers["x-access-token"];
  const token = authHeader ? authHeader.replace("Bearer ", "") : null;

  try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (!token || decoded) {
    req.user = decoded || { id: "guest", role: "guest" };
    return next();
  }
  }
catch (error) {
  return res.status(403).json({ message: "Token invalido" });
}
}

module.exports = authMiddleware;
