var mysql = require("mysql");

var con = mysql.createConnection({
    host: "3.15.180.1",
    user: "team15",
    password: "@CodeForGood2019",
    database: 'Not_A_Prison'
});

con.connect(function(err, result) {
    if (err) throw err;
    con.query('UPDATE Not_A_Prison.Users SET monthly_payment=200 where user_id="1"');
    con.end();
   });

module.exports = con;