const express = require("express");
const router = require("./routes/myRouter");
const app = express();
const port = 3000;
const path = require("path");
const cookieParser = require("cookie-parser");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(router);
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`server is started at port ${port}`);
});
