var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_toDoList"
});

con.connect(function (err) {
  if (err) throw err;
});

module.exports = con;