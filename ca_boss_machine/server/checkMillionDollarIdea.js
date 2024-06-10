const checkMillionDollarIdea = (req, res, next) => {
  const weeks = req.body.numWeeks;
  const revenue = req.body.weeklyRevenue;
  if (
    weeks * revenue < 1000000 ||
    isNaN(weeks) ||
    isNaN(revenue) ||
    !weeks ||
    !revenue
  ) {
    res.status(400).send("Not enough gold!");
  } else {
    next();
  }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
