exports.up = function (knex) {
  return knex.schema.createTable("posts", (table) => {
    table.increments();

    table.text("location").notNullable();

    table.text("notes");

    table.datetime("timestamp");
  });
};

exports.down = function (knex, Promise) {
  return knex.dropTable("posts");
};
