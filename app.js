const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");


const adminRoute = require("./routes/admin");
const usersRoute = require("./routes/users");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRoute);
app.use(adminRoute);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found!</h1>")
});

app.listen(3000);
