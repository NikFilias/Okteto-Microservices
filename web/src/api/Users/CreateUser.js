const app = require("../../app");
const Client = require("../../../../db/db.js");
const date = require("date-and-time");

CreateUser = () => {
  const now = new Date();

  Client.query(
    `INSERT INTO users\
   VALUES ('1','Nikolas','test-1234','nikfilias7@gmail.com','${date.format(
     now,
     "YYYY/MM/DD HH:mm:ss"
   )}','${date.format(now, "YYYY/MM/DD HH:mm:ss")}')`
  )
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = CreateUser;
