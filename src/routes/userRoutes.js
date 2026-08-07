const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { getProfile, updateMe } = require("../controllers/userController");
const { orders } = require("../data/db");
const router = express.Router();

router.get("/me",authMiddleware, getProfile);
router.put("/me", authMiddleware, updateMe);

router.get("/orders", (req, res) => {
  return res.status(200).json({
    orders
  });
});

module.exports = router;
