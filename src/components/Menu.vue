<template>
  <div class="Menu">
    <h1>This is the Menu</h1>
    <div id="search-box">
      <input
        ref="searchForm"
        id="search"
        type="form"
        placeholder="Input a name"
      />
      <button v-on:click="getData" type="submit">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {},
  methods: {
    submitSearch: function (event) {
      const searchForm = this.$refs.searchForm;
      const searchRequest = searchForm.value;
      searchForm.value = "";
    },
    getData: async function () {
      try {
        const response = await this.$http.get(
          "/api/locations"
        );
        console.log("response", res)
        this.posts = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#search-box {
  box-shadow: 0 1px 2px rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  min-width: 150px;
  height: 80px;
  margin: auto;
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
</style>
