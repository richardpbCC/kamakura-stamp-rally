exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("locations")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("locations").insert([
        {
          name: "Kenchoji",
          position: "35.331656369053356, 139.5548743622458",
          imageURL: "https://lh5.googleusercontent.com/p/AF1QipNNe3uvCn8u1ynmEjcY9u-za2BHK07cVjWtHuGm=w408-h544-k-no",
          visited: true,
          notes: "I visited Kenchoji in November 2018, the kouyou were beautiful that time of year."
      },
      {
        name: "Hasedera",
        position: "35.31266582293801, 139.53303658295624",
        imageURL: "https://lh5.googleusercontent.com/p/AF1QipNAW7RUZF_H-mwx-DvY3ZdC5A0ZRCrm2o1etTDS=w408-h272-k-no",
        visited: false,
        notes: "" 
      }
      ]);
    });
};
