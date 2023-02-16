import "./enviroments.js";
import express from "express";
import debug from "debug";
import cusetes from "./data/cusetes.js";

const app = express();
const logger = debug("cusetes:root");
const port = process.env.PORT ?? 4001;

app.get("/cusetes", (req, res) => {
  res.status(200).json({ cusetes });
});

app.listen(port, () => {
  logger(`Listen from port ${port}`);
});
