var express = require("express");

var router = express.Router();


var burger = require("../models/burger.js");



router.get("/", function (req, res) {
  burger.all(function (data) {
    console.log("what is data" + data);
    var burgerList = {
      burgers: data
    }

    console.log("data is: " + res);
    console.log(burgerList);
    res.render("index", burgerList);
  });
});

router.post("/api/burgers", function (req, res) {
  
  burger.insertOne(["burger_name"], [req.body.name], function (result) {
    res.json({
      id: result.insertId
    });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  console.log("made it to router");
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;