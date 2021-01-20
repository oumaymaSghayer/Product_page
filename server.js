const express = require("express");

const app = express();
app.use(express.static(`./`));
app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "./" });
});
app.listen(process.env.PORT || 8080);
