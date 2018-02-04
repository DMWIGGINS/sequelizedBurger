var express = require("express");
var db = require("../models");
var router = express.Router();


function readyBurgers(req, res) {
  console.log("I'm in function readyBurgers");
  var readyBurger = [];
  db.Burger.findAll({}).then(function (data, err) {
    if (err) {
      res.status(500).end();
    } else if (data[0]) {
      var burgerObject = [];
      for (let i = 0; i < data.length; i++) {
        burgerObject = {
          id: data[i].id,
          burger_name: data[i].burger_name,
        }
        readyBurger.push(burgerObject);
      }
      console.log(readyBurger);
      res.render("index", readyBurger);
    } else {
      res.render("index", {
        readyBurger: []
      });
    }
  });
}

function burgerCreate(req, res) {
  db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: false
    })
    .then(function (data, err) {
      if (data) {
        res.status(200).end();
      } else if (err) {
        res.status(500).end();
      }
    });
  readyBurgers(res);
}

function burgerEat(req, res) {
  db.Burger.update({
    devoured: true
  }, {
    where: {
      id: {
        $eq: req.body.id
      }
    }
  }).then(function (data, err) {
    console.log(data);
    if (err) {
      // If an error occurred, send a generic server failure
      console.log("an error occurred");
      console.log(err);
      res.status(500).end();
    } else if (data[0]) {
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

router.post("/api/burgers/new", function (req, res) {
  burgerCreate(req, res);
});

router.put("/api/burgers/:id", function (req, res) {
  console.log("made it to router");
  burgerEat(req, res);
});

module.exports = router;