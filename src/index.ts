import "./enviroments.js";
import express from "express";
import debug from "debug";

const app = express();
const logger = debug("cusetes:root");
const port = process.env.PORT ?? 4000;

app.get("/cusetes", (req, res) => {
  logger("Hello World");
});

app.listen(port, () => {
  logger(`Listen from port ${port}`);
});
