const express = require("express");
const router = express.Router();

const {getAllUsers,getOneUser,registerUser,loginUser,updateUser,deleteUser} = require('../controllers/markhamControllers');

router.route('/').get(getAllUsers);

router.route("/:id").get(getOneUser);

router.route("/register/:id").post(registerUser);

router.route("/login/:id").get(loginUser);

router.route("/update/:id").put(updateUser);

router.route("/delete/:id").delete(deleteUser);

module.exports = router;