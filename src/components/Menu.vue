<template>
  <div class="Menu">
    <h1>Menu</h1>
    <div id="search-box">
      <input
        v-on:click="[searchByName($event), find($event)]"
        ref="searchForm"
        id="search"
        type="form"
        placeholder="Input a name"
      />
      <button v-on:click="[searchByName($event), find($event)]" type="submit">
        Search
      </button>
      <br />
    </div>
    <ul className="list-of-locations">
      <li><a v-on:click="[clickOnLink($event), find($event)]">Kenchoji</a></li>
      <li><a v-on:click="[clickOnLink($event), find($event)]">Hasedera</a></li>
      <li><a v-on:click="[clickOnLink($event), find($event)]">Kōtoku-in</a></li>
      <li><a v-on:click="[clickOnLink($event), find($event)]">Hokokuji</a></li>
      <li>
        <a v-on:click="[clickOnLink($event), find($event)]">Meigetsuin</a>
      </li>
      <li><a v-on:click="[clickOnLink($event), find($event)]">Engakuji</a></li>
      <li><a v-on:click="[clickOnLink($event), find($event)]">Tokeiji</a></li>
      <li><a v-on:click="[clickOnLink($event), find($event)]">Zuisen-ji</a></li>
      <li><a v-on:click="[clickOnLink($event), find($event)]">Jōchi-ji</a></li>
      <li><a v-on:click="[clickOnLink($event), find($event)]">Jufuku-ji</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: [],
  data: () => ({
    searchRequest: "",
  }),
  methods: {
    searchByName: function (event) {
      const searchForm = this.$refs.searchForm;
      this.searchRequest = searchForm.value;
      searchForm.value = "";
    },

    clickOnLink: function (event) {
      console.log(event.target.innerText);
      this.searchRequest = event.target.innerText;
    },

    find: async function (event) {
      try {
        if (!this.searchRequest) {
          alert("Please enter a name");
        } else {
          //get locations by name
          const getLocations = await fetch(
            `/api/locations/${this.searchRequest}`,
            {
              method: "GET",
            }
          );
          const locations = await getLocations.json();

          //get posts by location
          const getPosts = await fetch(`/api/posts/${this.searchRequest}`, {
            method: "GET",
          });
          const posts = await getPosts.json();

          const data = { locations: locations, posts: posts };
          this.$emit("search", data);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  emits: ["search"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#search-box {
  box-shadow: 0 1px 2px rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  width: 950px;
  height: 80px;
  margin-right: auto;
  margin-left: auto;
}
#search {
  margin-top: 30px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.list-of-locations {
  cursor: pointer;
  text-decoration: underline;
}
button {
  cursor: pointer;
}
</style>
