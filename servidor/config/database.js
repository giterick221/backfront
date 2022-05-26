import mysql from "mysql2";
const db = mysql.createConnection({
  host: "192.168.0.194",
  user: "root",
  password: "root-root",
  database: "conminatorias",
});

db.connect(function (err) {
  if (err) {
    return console.error("---- ERROR CONEXION ---- " + err.message);
  }
  console.log("---- CONECTADO A MYSQL ----");
});
export default db;
