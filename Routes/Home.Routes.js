const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({
    status: 1,
    message: "Server is Running 👻",
  });
});

module.exports = router;
