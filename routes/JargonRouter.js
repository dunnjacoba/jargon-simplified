const express = require("express");
const jargonRouter = express.Router();
const { Op } = require("sequelize");
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
  });

jargonRouter
  .route("/:id")
  .put(async (req, res) => {
    const { jargon, definition } = req.body;
    const { id } = req.params;
    let newEntry = {};

    const { dataValues: prevJargon } = await Jargon.findOne({ where: { id } });
    if (jargon) newEntry.jargon = jargon;
    if (definition) newEntry.definition = definition;

    await Jargon.update({ ...newEntry }, { where: { id } });

    try {
      res.status(200);
      res.send(`Successfully updated ${id}`);
    } catch (err) {
      res.send(err.message);
    }
  })
  .delete(async (req, res) => {
    const id = req.params;

    await Jargon.destroy({ where: id });
    try {
      res.status(200);
      res.send(`Successfully deleted ${id}`);
    } catch (err) {
      res.send(err.message);
    }
  });

jargonRouter.route("/:query").get(async (req, res) => {
  const { query } = req.params;

  try {
    const jargon = await Jargon.findAll({
      where: { jargon: { [Op.like]: `%${query}%` } },
    });
    res.status(200);
    res.send({ jargon });
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = jargonRouter;
