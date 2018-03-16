var express = require("express");
var db = require("../models");
var router = express.Router();
var sequelize = require("sequelize");

function readyBurgers(req, res) {
  console.log("I'm in function readyBurgers");
  var readyBurger = [];
  db.Burger.findAll({order: sequelize.col('burger_name')}).then(function (data, err) {
    if (err) {
      res.status(500).end();
    } else if (data[0]) {
      var burgerList = {
        burgers: data
      }
    }
    res.render("index", burgerList);
  });
}


function burgerCreate(req, res) {
  console.log("I'm in burgerCreate");
  console.log(req.body.name);
  db.Burger.create({
      burger_name: req.body.name,
      devoured: false
    })
    .then(function (data, err) {
      console.log(data);
      if (data) {
        res.status(200).end();
      } else if (err) {
        res.status(500).end();
      }
    });
  readyBurgers(res);
}

function burgerEat(req, res) {
  console.log("I'm in burgerEat");
  db.Burger.update({
    devoured: true
  }, {
    where: {
      id: req.params.id
    }
  }).then(function (data, err) {
    console.log("I'm out of the database");
    console.log(data);
    console.log(data[0]);
    if (err) {
      // If an error occurred, send a generic server failure
      console.log("an error occurred");
      console.log(err);
      res.status(500).end();
    } else if (data) {
      console.log("burger is updated");
      readyBurgers(req, res);
      // res.status(200).end();
    }
  });
}

router.get("/", function (req, res) {
  readyBurgers(req, res);
});

router.get("/burgers", function (req, res) {
  readyBurgers(req, res);
});

router.post("/api/burgers", function (req, res) {
  burgerCreate(req, res);
});

router.put("/api/burgers/:id", function (req, res) {
  console.log("made it to router");
  burgerEat(req, res);
});

module.exports = router;