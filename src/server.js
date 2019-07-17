require("dotenv/config");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const server = require("http").Server(app);

const env = process.env;

mongoose.connect(`mongodb+srv://${env.DB_USER}:${env.DB_PASS}@${env.DB_CONN}`, {
  useNewUrlParser: true
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(require("./routes"));

server.listen(env.PORT);
