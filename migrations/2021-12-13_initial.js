exports.up = function (knex) {
  return knex.schema.createTable("locations", (table) => {
    table.increments().index();

    table.text("name").notNullable();

    table.text("position");

    table.text("imageURL");    

    table.boolean("visited");

    table.text("notes");
  });
};

exports.down = function (knex, Promise) {
  return knex.dropTable("locations");
};
