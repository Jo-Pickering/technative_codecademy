const express = require("express");
const apiRouter = express.Router();

const minionsRouter = require("./routesMinions");
const ideasRouter = require("./routesIdeas");
const meetingsRouter = require("./routesMeetings");

apiRouter.use("/minions", minionsRouter);
apiRouter.use("/ideas", ideasRouter);
apiRouter.use("/meetings", meetingsRouter);

module.exports = apiRouter;
