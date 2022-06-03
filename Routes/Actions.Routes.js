const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const response = require("../Logic/index");
const {
  SIM_URL,
  SIM_ID,
  SIM_TOKEN,
  BEU_TOKEN,
  BEU_ID,
  BEU_URL,
} = require("../Config/");

router.get("/sim_frontend", async (req, res, next) => {
  try {
    const { action, workflow_run, repository, sender } = req.body;
    const sending = await response(
      SIM_TOKEN,
      action,
      workflow_run,
      repository,
      sender,
      SIM_ID,
      "FrontEnd",
      SIM_URL
    );
    res.status(201).send(sending);
  } catch (error) {
    next(createError(500));
  }
});

router.get("/beu_admin", async (req, res, next) => {
  try {
    const { action, workflow_run, repository, sender } = req.body;
    const sending = await response(
      BEU_TOKEN,
      action,
      workflow_run,
      repository,
      sender,
      BEU_ID,
      "FrontEnd",
      BEU_URL
    );
    res.status(201).send(sending);
  } catch (error) {
    next(createError(500));
  }
});

module.exports = router;

// url, action, workflow_run, repository, sender, channelId, name, sampleURL;
