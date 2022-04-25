const express = require("express");
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
app.use(express.json());

//get all locations
app.get("/api/locations", async (req, res) => {
  try {
    const locations = await db.select().table("locations");
    res.status(200).json(locations);
  } catch (err) {
    console.error("Error loading locations", err);
    res.sendStatus(500);
  }
});

//get location by name
app.get("/api/locations/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const locations = await db.select().table("locations");
    const found = await locations.filter((location) => {
      return location.name.toLowerCase() === name.toLowerCase();
    });
    res.status(200).json(found);
  } catch (err) {
    console.error("No matching result", err);
    res.sendStatus(500);
  }
});

//get all posts
app.get("/api/posts", async (req, res) => {
  try {
    const posts = await db.select().table("posts");
    res.status(200).json(posts);
  } catch (err) {
    console.error("Error loading posts", err);
    res.sendStatus(500);
  }
});

//get posts by location
app.get("/api/posts/:location", async (req, res) => {
  const { location } = req.params;
  try {
    const posts = await db.select().table("posts");
    const postsByLocation = posts.filter((post) => {
      return post.location.toLowerCase() === location.toLowerCase();
    });
    res.status(200).json(postsByLocation);
  } catch (error) {
    console.error("Error loading posts", err);
    res.sendStatus(500);
  }
});

//new post
app.post("/api/posts/:location", async (req, res) => {
  const post = req.body;
  try {
    const posted = await db.insert(post).into("posts");
    res.status(200).json(posted);
  } catch (err) {
    console.error("No matching result", err);
    res.sendStatus(500);
  }
});

//edit post
app.patch("/api/posts/", async (req, res) => {
  console.log("patch recieved");

  try {
    const edit = req.body.notes;
    const postId = req.body.id;
    const edited = await db("posts").where({ id: postId }).update({
      notes: edit,
    });
    res.status(200).json(edited);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
});

//delete post by id
app.delete("/api/posts/", async (req, res) => {
  const postId = req.body.id;
  try {
    const deleted = await db("posts").where({ id: postId }).del();
    res.status(200).json(deleted);
  } catch (error) {
    console.error(error);
  }
});

// Always return the main index.html, since we are developing a single page application
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});

module.exports = app;
