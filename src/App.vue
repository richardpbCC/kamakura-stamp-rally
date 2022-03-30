<template>
  <img id="logo" alt="Kamakura city logo" src="./assets/kamakura_logo.png" />
  <h1 id="app-title">Kamakura Stamp Rally App</h1>
  <Menu v-on:search="showResults" />
  <LocationInfo
    v-bind:displayList="displayList"
    v-bind:postsByLocation="postsByLocation"
    v-bind:currentLocation="currentLocation"
    v-bind:selectedPostId="selectedPostId"
    v-on:selectedPostId="setSelectedPost"
    v-on:updatePosts="updatePosts"
  />
  <Post
    v-bind:selectedPostId="selectedPostId"
    v-bind:selectedPost="selectedPost"
    v-bind:displayList="displayList"
    v-bind:currentLocation="currentLocation"
    v-on:updatePosts="updatePosts"
  />
  <Map v-bind:displayList="displayList" />
</template>

<script>
import Menu from "./components/Menu";
import LocationInfo from "./components/LocationInfo";
import Map from "./components/Map";
import Post from "./components/Post";

export default {
  name: "App",
  components: {
    Menu,
    LocationInfo,
    Post,
    Map,
  },
  data: () => ({
    view: "home",
    currentLocation: "",
    displayList: [],
    postsByLocation: [],
    selectedPostId: -1,
    selectedPost: [],
  }),
  methods: {
    showResults: function (data) {
      this.displayList = data.location;
      this.currentLocation = data.location[0];
      this.postsByLocation = data.posts;
    },
    updatePosts: function (data) {      
      this.selectedPostId = -1;
      this.displayList = data.posts;
      this.postsByLocation = data.posts;
      this.currentLocation = data.location;
    },
    setSelectedPost: function (data) {
      this.selectedPostId = Number(data);
      const posts = this.postsByLocation;
      this.selectedPost = posts.filter(
        (post) => post.id === this.selectedPostId
      );      
      this.displayList = [];
    },
  },
};
</script>

<style>
#app-title {
  color: green;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#logo {
  width: 250px;
}
#input-post {
  box-shadow: 0 1px 2px rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  min-width: 550px;
  min-height: 80px;
  margin-right: auto;
  margin-left: auto;
}
.post-box {
  box-shadow: 0 1px 2px rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  margin-right: auto;
  margin-left: auto;
  width: 600px;
  min-height: 100px;
  padding: 5px 5px 5px 5px;
}
.pic {
  height: 500px;
  padding: 10px 10px 10px 10px;
}
</style>
