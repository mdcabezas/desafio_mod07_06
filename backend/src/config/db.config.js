const { Pool } = require("pg");
const pool = new Pool({
  host: "127.0.0.1",
  user: "postgres",
  password: "miclavesecreta",
  database: "softjobs",
  allowExitOnIdle: true
})

pool.connect((err, _) => err
  ?
  console.error("ERROR connect DB:", err)
  :
  console.log("OK connect DB"));

module.exports = { pool };