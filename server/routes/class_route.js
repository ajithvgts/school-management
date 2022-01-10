const express = require("express");
const router = express.Router();
const validate = require("../validation/validate");
const validateClass = require("../validation/validate_class");
const {
  getClass,
  getAllClass,
  addClass,
  updateClass,
  deleteClass,
} = require("../controller/class_controller");

router
  .get("/", getAllClass)
  .get("/:uuid", getClass)
  .post("/", validateClass(), validate, addClass)
  .put("/", updateClass)
  .delete("/", deleteClass);

module.exports = router;
