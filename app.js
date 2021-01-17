const express = require("express");
const app = express();
const { port } = require("./settings.json");

app.use(express.static("./dist"));

app.listen(port, () => {
  console.log(`Listening on ${port}.`);
});
