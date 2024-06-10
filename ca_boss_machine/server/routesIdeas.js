const express = require("express");
const ideasRouter = express.Router();

const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require("./db");

const checkMillionDollarIdea = require("./checkMillionDollarIdea");

ideasRouter.param("ideaId", (req, res, next, id) => {
  const idea = getFromDatabaseById("ideas", id);
  if (idea) {
    req.idea = idea;
    next();
  } else {
    res.status(404).send();
  }
});

//Returns an array of ideas
ideasRouter.get("/", (req, res) => {
  const ideas = getAllFromDatabase("ideas");
  if (ideas) {
    res.status(200).send(ideas);
  } else {
    res.status(404).send("Do you have any brain cells?");
  }
});

//Creates a new idea
ideasRouter.post("/", checkMillionDollarIdea, (req, res) => {
  const newIdea = addToDatabase("ideas", req.body);
  if (newIdea) {
    res.status(201).send(newIdea);
  } else {
    res.status(400).send("Computer says no.");
  }
});

//Gets a idea by it's id
ideasRouter.get("/:ideaId", (req, res) => {
  const getIdea = getFromDatabaseById("ideas", req.params.ideaId);
  if (getIdea) {
    res.status(200).send(getIdea);
  } else {
    res.status(404).send("Nope. That is not a thought.");
  }
});

//Updates an idea by it's id
ideasRouter.put("/:ideaId", checkMillionDollarIdea, (req, res) => {
  const getIdea = getFromDatabaseById("ideas", req.params.ideaId);
  console.log("getIdea", getIdea);
  if (getIdea) {
    const updateIdea = updateInstanceInDatabase("ideas", req.body);
    res.status(200).send(updateIdea);
  } else {
    res.status(404).send("Something went wrong!");
  }
});

//Deletes an idea by it's id
ideasRouter.delete("/:ideaId", (req, res, next) => {
  const getIdea = getFromDatabaseById("ideas", req.params.ideaId);
  if (getIdea) {
    deleteFromDatabasebyId("ideas", req.params.ideaId);
    res.status(204).send("Buh Bye!");
  } else {
    res.status(404).send("Could not find minion to throw out the window...");
  }
});

module.exports = ideasRouter;
