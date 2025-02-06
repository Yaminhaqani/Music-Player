const express = require("express");
const { isAuthorised } = require("../middleware/isAuth");
const { User } = require("../models/user");



const router = express.Router();

router.get("/user/details", isAuthorised, async (req, res) => {
    try {
      const user = await User.findById(req.user._id).select("-password"); // Exclude password
      if (!user) return res.status(404).json({ message: "User not found" });
  
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  });
  
  module.exports = router;