const express = require("express");
const minionsRouter = express.Router();

const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require("./db");


//Returns an array of minions
minionsRouter.get("/", (req, res) => {
  const minions = getAllFromDatabase("minions");
  if (minions) {
    res.status(200).send(minions);
  } else {
    res.status(404).send("No minions found!");
  }
});

//Creates a new minion
minionsRouter.post("/", (req, res) => {
  const newMinion = addToDatabase("minions", req.body);
  if (newMinion) {
    res.status(201).send(newMinion);
  } else {
    res.status(400).send();
  }
});

//Gets a minion by it's id
minionsRouter.get("/:minionId", (req, res) => {
  const getMinion = getFromDatabaseById("minions", req.params.minionId);
  if (getMinion) {
    res.status(200).send(getMinion);
  } else {
    res.status(404).send("Minion not found.");
  }
});

//Updates a minion by it's id
minionsRouter.put("/:minionId", (req, res) => {
  const getMinion = getFromDatabaseById("minions", req.params.minionId);
  if (getMinion) {
    const updateMinion = updateInstanceInDatabase("minions", req.body);
    res.status(200).send(updateMinion);
  } else {
    res.status(404).send("Something went wrong!");
  }
});

//Deletes a minion by it's id
minionsRouter.delete("/:minionId", (req, res, next) => {
  const getMinion = getFromDatabaseById("minions", req.params.minionId);
  if (getMinion) {
    deleteFromDatabasebyId("minions", req.params.minionId);
    res.status(204).send("Buh Bye!");
  } else {
    res.status(404).send("Could not find minion to throw out the window...");
  }
});

module.exports = minionsRouter;
