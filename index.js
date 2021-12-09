const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", require("./routes/admin"));
app.use("/", require("./routes/product"));

app.listen(port, () => {
  console.log(`port : ${port}`);
});