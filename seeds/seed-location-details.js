exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {
          name: "Kenchoji"    
      },
      {
        name: "Hasedera"  
      }
      ]);
    });
  };