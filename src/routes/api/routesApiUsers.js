const express = require("express");
const router = express.Router();



const usersApiController = require("../../controllers/api/usersApiController");


router.get("/users", usersApiController.list);
router.get("/users/search",usersApiController.searchUserByName)
router.get("/users/:id", usersApiController.showOne)
router.post("/users",usersApiController.register)
router.delete("/users/:id",usersApiController.delete)

module.exports = router