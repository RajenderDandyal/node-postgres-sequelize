const express = require("express");
const app = express();
const Sequelize = require("sequelize");
const config = require("./config/config.json");
const sslrootcert = "./ca.pem";
// const sequelize = new Sequelize(
//   "postgres://hdmtneio:hanz-DLrk93rR2XeYerbNva1ebE6Wt3e@raja.db.elephantsql.com:5432/hdmtneio"
// );
//console.log(config);
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
    native: true,
    ssl: true,
    dialectOptions: {
      ssl: {
        sslmode: "verify-ca",
        sslrootcert
      }
    }
  }
);
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });
app.listen(8081, () => console.log("Listening on port 8081"));
