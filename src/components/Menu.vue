<template>
  <div class="Menu">
    <h1>Menu</h1>
    <div id="search-box">
      <input
        ref="searchForm"
        id="search"
        type="form"
        placeholder="Input a name"
      />
      <button v-on:click="submitSearch" type="submit">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {},
  methods: {
    submitSearch: async function (event) {
      try {
        // const response = await this.$http.get(
        //   "http://api/locations?=kenchoji"
        // );
        const searchForm = this.$refs.searchForm;
        const searchRequest = searchForm.value;
        searchForm.value = "";
        if (!searchRequest) {
          alert("Please enter a name");
        } else {
          const res = await fetch(`/api/locations/${searchRequest}`, {
            method : "GET"
          });
          const data = await res.json();
          this.$emit("search", data);
          //this.posts = response.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  emits: ["search"]
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
</style>
