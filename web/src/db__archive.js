const pg = require("pg");
const { Pool, Client } = require("pg");

pg.types.setTypeParser(1114, function (stringValue) {
  console.log(stringValue);
  return new Date(Date.parse(stringValue + "+0000"));
});

const client = new Client({
  user: "postgres",
  password: "postgres",
  host: "https://postgres-cluster-ip-service-nikfilias.cloud.okteto.net/",
  port: 5432,
  database: "stripe-example",
});

client
  .connect()
  .then(() => {
    console.log("Connected");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = client;
