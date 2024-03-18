const express = require('express');
const app = express();
const { readdirSync } = require("fs");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./db");
const bodyParser = require('body-parser');

connectDB();


app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

app.listen(5000, () => console.log("Server Running port 5000"));