var mysql = require("mysql");
const express = require('express');
var path = require('path');

const app = express();

app.set("view engine", "html");

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname + '/home.html'));
});

app.get("/req", async (req, res) => {
var con = mysql.createConnection({
    host: "3.15.180.1",
    user: "team15",
    password: "@CodeForGood2019",
    database: 'Not_A_Prison'
});
res.send("hit!");
console.log("hit");
con.connect(function(err, result) {
    if (err) throw err;
    con.query('UPDATE Not_A_Prison.Users SET monthly_payment=500 where user_id="1"');
    con.end();

   });
});

app.listen(3001, () => console.log('litening'));

