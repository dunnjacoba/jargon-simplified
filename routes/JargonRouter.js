const express = require("express");
const jargonRouter = express.Router();
const Jargon = require("../Models/Jargon");

jargonRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const jargon = await Jargon.findAll();
      res.status(200);
      res.send({ jargon });
    } catch (err) {
      res.send(err.message);
    }
  })
  .post(async (req, res) => {
    const { jargon, definition } = req.body;
    try {
      const {
        dataValues: { id },
      } = await Jargon.create({ jargon, definition });
      res.status(201);
      res.send(`Created at id: ${id}`);
    } catch (err) {
      res.send(err.message);
    }
  })
  .put(async (req, res) => {
    res.send("Got a PUT request at /jargon");
  })
  .delete(async (req, res) => {
    res.send("Got a DELETE request at /jargon");
  });

module.exports = jargonRouter;
