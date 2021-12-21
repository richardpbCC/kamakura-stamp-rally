const express = require("express");
const { rmSync } = require("fs");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex");

const app = express();

// Setup logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

//setup static assets
app.use(express.static(path.resolve(__dirname, "..", "dist")));

app.get("/api/locations", async (req, res) => {
  try {
    const locations = await db.select().table("locations");
    res.json(locations);
  } catch (err) {
    console.error("Error loading locations", err);
    res.sendStatus(500);
  }
});

app.get("/api/locations/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const locations = await db.select().table("locations");
    const found = await locations.filter((location) => {
      return location.name.toLowerCase() === name.toLowerCase();
    });
    res.json(found);
  } catch (err) {
    console.log("No matching result", err);
    res.sendStatus(500);
  }
});

//TODO: add post feature
app.post("/api/locations//:name/:post", async (req, res) => {
  const { name } = req.params;
  const { post } = req.params;
  try {
    const locations = await db.select().table("locations");
    const found = await locations.filter((location) => {
      return location.name.toLowerCase() === name.toLowerCase();
    });
    console.log(found);
    res.json(found);
  } catch (err) {
    console.log("No matching result", err);
    res.sendStatus(500);
  }
});

// Always return the main index.html, since we are developing a single page application
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});

module.exports = app;
