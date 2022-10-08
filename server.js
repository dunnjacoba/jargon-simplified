const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const sequelize = require("./database");
const jargonRouter = require("./routes/JargonRouter");

const app = express();

const port = process.env.PORT || 50001;

app.use(cors());
app.use(bodyParser.json());
app.use("/jargon", jargonRouter);

sequelize.sync().then(() => console.log("db is ready"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
