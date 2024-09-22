const express = require("express");
const Student = require("../model/student.model.js");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const varStudents = await Student.find({});
    res.status(200).json(varStudents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const varStudents = await Student.findById(req.params.id);
    res.status(200).json(varStudents);
    if (!VarStudent) {
      return res.status(404).json({ message: "The document does not exist" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post("/", async (req, res) => {
  try {
    const varStudent = await Student.create(req.body);
    res.status(200).json(varStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const varStudent = await Student.findByIdAndUpdate(id, req.body);

    if (!varStudent) {
      return res.status(404).json({ message: "The document does not exist" });
    }
    const updatedStudent = await Student.findById(req.params.id);
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const varStudent = await Student.findByIdAndDelete(req.params.id);
    if (!varStudent) {
      return res.status(404).json({ message: "The document does not exist" });
    }
    res
      .status(200)
      .json({ message: "The Student is deleted from the Database" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
