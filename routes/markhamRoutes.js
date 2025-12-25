const express = require("express");
const router = express.Router();

const {homePage,noticePage,registerPage,loginPage} = require('../controllers/markhamControllers');

router.route('/').get(homePage);

router.route("/notices").get(noticePage);

router.route("/register").get(registerPage);

router.route("/login").get(loginPage);

module.exports = router;