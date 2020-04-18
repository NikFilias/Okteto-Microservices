const app = require("../../app");
const Client = require("../../../../db/db.js");

GetUsers = () => {
  Client.query("select * from users")
    .then((result) => {
      console.table(result);
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = GetUsers;
