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
          visited: false
      },
      {
        name: "Hasedera",
        position: "35.31266582293801, 139.53303658295624",
        imageURL: "https://lh5.googleusercontent.com/p/AF1QipNAW7RUZF_H-mwx-DvY3ZdC5A0ZRCrm2o1etTDS=w408-h272-k-no",
        visited: false,
      },
      {
        name: "Kōtoku-in",
        position: "35.3174873959071, 139.5360677684792",
        imageURL: "https://lh5.googleusercontent.com/p/AF1QipMlrH64VWpf3vUYEtnJV9dogzpZvCWWMM2xghVd=w408-h725-k-no",
        visited: false,
      },
      {
        name: "Hokokuji",
        position: "35.3209550447374, 139.56915206830092",
        imageURL: "https://lh6.googleusercontent.com/proxy/9rlND67DPdt2w-xezYNeHRnm5QG6_6DLEqROwfoxQff1kB4Zxa9be21erB3SdN5DklOQOqt53LApcI2Y9xM9fVMjIFv6Y2SB6tpJ1pqR_LlKzggANHs9CkOuCWi_f1Frnue8hZilhr4PnE8e7cvG9axawiamDw=w408-h272-k-no",
        visited: false,
      },
      {
        name: "Meigetsuin",
        position: "35.33603510503722, 139.55100630553562",
        imageURL: "https://lh5.googleusercontent.com/p/AF1QipP6d9Fyym2oG6SxWbpr_SYlRvO0Dn1hcGaMS70=w408-h306-k-no",
        visited: false,
      },
      {
        name: "Engakuji",
        position: "35.33874269756299, 139.54761418419142",
        imageURL: "https://lh5.googleusercontent.com/p/AF1QipMT6Kt-KXWi2mHn1S9OVO7d4WS704s0pGqBJLwD=w408-h272-k-no",
        visited: false,
      },
      {
        name: "Tokeiji",
        position: "35.33613897332111, 139.54600644286066",
        imageURL: "https://lh5.googleusercontent.com/p/AF1QipNdFlEpTSW3Bk1ip2zGMikj7hDVisDqlDHjRcHf=w426-h240-k-no",
        visited: false,
      },
      {
        name: "Zuisen-ji",
        position: "35.327654323974485, 139.57532111580983",
        imageURL: "https://lh5.googleusercontent.com/p/AF1QipMJicuWjDqrNcPh3TbIQ9b7xL0nB_fB_jl1tluW=w408-h272-k-no",
        visited: false,
      },
      {
        name: "Jōchi-ji",
        position: "35.334209132914395, 139.54643794732567",
        imageURL: "https://lh5.googleusercontent.com/p/AF1QipNI3sC6kSKcNJiUbDcJlwfUFKuGbJHIgpoxRDwY=w408-h306-k-no",
        visited: false,
      },
      {
        name: "Jufuku-ji",
        position: "35.3250440930371, 139.54907779999485",
        imageURL: "https://lh5.googleusercontent.com/p/AF1QipPWv4MQa6KDY_DNfJ4SaC0Elazn89vbAXsnJX0l=w408-h272-k-no",
        visited: false,
      },
      ]);
    });
};
