const fs = require("fs");
const db = require("../server/knex.js");
const path = require("path");

(async () => {
  try {
    const locations = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "./locations.json"))
    );
    for (const location of locations) {
      const name = location.name;
      const imageURL = location.imageURL;

      const result = await db("locations").insert({
        name,
        imageURL
      });
      console.log(result);
    }
  } catch (err) {
    console.error("Error inserting records", err);
  }
})();
