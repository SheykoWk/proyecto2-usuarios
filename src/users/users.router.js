const userServices = require("./users.services");
const router = require("express").Router();

router.get("/users", userServices.getAllUsers);
router.post("/users", userServices.postNewUser);
router.get("/users/:id", userServices.getUserById);

module.exports = router;
