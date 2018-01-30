module.exports = function (sequelize, DataTypes) {

  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 250]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    // timestamp: {
    //   createdAt: Sequelize.DATE,
    //   allowNull: false
    // },
  });
  return Burger;
};



module.exports = Burger;



// var burger = {
//     all: function (cb) {
//       orm.selectAll("burgers", function (res) {
//         cb(res);
//         console.log("result of burger specific is: " + JSON.stringify(res));
//       });
//     },

//     insertOne: function (cols, vals, cb) {
//       orm.insertOne("burgers", cols, vals, function (res) {
//         cb(res);
//       });
//     },

//       updateOne: function (objColVals, condition, cb) {
//         orm.updateOne("burgers", objColVals, condition, function (res) {
//           cb(res);
//           console.log(JSON.stringify(res));
//         });
//       }
//     };