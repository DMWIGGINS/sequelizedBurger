var orm = require("../config/orm.js");


// create the code that will call the ORM functions using burger specific input for the ORM.



var burger = {
    all: function (cb) {
      orm.selectAll("burgers", function (res) {
        cb(res);
        console.log("result of burger specific is: " + JSON.stringify(res));
      });
    },

    insertOne: function (cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function (res) {
        cb(res);
      });
    },

      updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
          cb(res);
          console.log(JSON.stringify(res));
        });
      }
    };

    module.exports = burger;
    