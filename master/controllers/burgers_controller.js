const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.selectAll(data => {
    const hbsObject = {
      burgers: data
    };
    
    res.render("index", hbsObject);
  });
});

router.post("/", (req, res) => {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name,
    req.body.devoured
  ], function(data) {
    res.redirect("/");
  });
});
// api/burgers/:id
router.put("/:id", (req, res) => {
  let condition = "id = " + req.params.id;

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});
router.delete("/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect("/");
  });
});
// Export routes for server.js to use.
module.exports = router;
