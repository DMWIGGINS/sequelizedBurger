// var mysql = require("mysql");
// var connection;

//   if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
//   } else {
//     connection = mysql.createConnection({
//       port: 3306,
//       host: "localhost",
//       user: "root",
//       password: "root",
//       database: "burgers_db"
//     });
//   };

// connection.connect(function (err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// module.exports = connection;

var Sequelize = require("sequelize");
// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("sequelize_burgers", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
// Exports the connection for other files to use
module.exports = sequelize;