exports.up = function(knex) {
    return knex.schema.createTable("locations", (table) => {
      table.increments().index();
  
      table.text("name").notNullable();
  
      table.text("imageURL");

      table.text("notes");
        
      //table.float("location");
    });
  };
  
  exports.down = function(knex, Promise) {};
  