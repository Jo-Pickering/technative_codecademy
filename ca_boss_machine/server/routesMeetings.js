const express = require("express");
const meetingsRouter = express.Router();

const {
  getAllFromDatabase,
  addToDatabase,
  deleteAllFromDatabase,
  createMeeting,
} = require("./db");

//Returns an array of meetings
meetingsRouter.get("/", (req, res) => {
  const meetings = getAllFromDatabase("meetings");
  if (meetings) {
    res.status(200).send(meetings);
  } else {
    res.status(404).send("No meetings found!");
  }
});

//Creates a new meeting
meetingsRouter.post("/", (req, res) => {
  const newMeeting = addToDatabase("meetings", createMeeting());
  if (newMeeting) {
    res.status(201).send(newMeeting);
  } else {
    res.status(400).send("Naaa. I don't want that one.");
  }
});

//Deletes all meetings
meetingsRouter.delete("/", (req, res, next) => {
  deleteAllFromDatabase("meetings");
  res.status(204).send("No more meetings. Buh bye!");
});

module.exports = meetingsRouter;
