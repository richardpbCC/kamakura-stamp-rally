exports.up = function (knex) {
  return knex.schema.createTable("locations", (table) => {
    table.increments();

    table.text("name").notNullable();

    table.text("position");

    table.text("imageURL");    

    table.boolean("visited");    
  });
};

exports.down = function (knex, Promise) {
  return knex.dropTable("locations");
};
