const express = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/user-controller");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/current-user").get(currentUser);

module.exports = router;
