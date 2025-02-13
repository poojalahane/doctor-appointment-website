const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userCtrl");
// router object
const router = express.Router();

router.post("/login", loginController);
router.post("register", registerController);
//routes
module.exports = router;
