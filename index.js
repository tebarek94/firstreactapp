import express from "express";
import mysql from "mysql";
const app = express();
const port = 5000;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "firstapp",
});
app.get("/api/data", (req, res) => {
  const sql = "SELECT * FROM users";
  connection.query(sql, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.get("/", (req, res) => {
  res.send("Hello from the Node.js backend!");
});

app.listen(port, () => {
  console.log(`Server is running on port number ${port}`);
});
