const express = require("express");
const router = express.Router();

const { addUser } = require("../controllers/userController");

router.post("/contact", addUser);

module.exports = router;