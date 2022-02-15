<template>
  <img id="logo" alt="Kamakura city logo" src="./assets/kamakura_logo.png" />
  <h1 id="app-title">Kamakura Stamp Rally App</h1>
  <Menu v-on:search="showResults" />
  <LocationInfo
    v-bind:displayList="displayList"
    v-bind:postsByLocation="postsByLocation"
    v-bind:currentLocation="currentLocation"
    v-on:selectedPostId="setSelectedPost"
    v-on:updatePosts="showPosts"
  />
  <Post v-bind:displayList="displayList" v-on:updatePosts="showPosts" />
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
    selectedPostId: 0,
  }),
  methods: {
    showResults: function (data) {
      this.displayList = data.location;
      this.currentLocation = data.location[0];
      this.postsByLocation = data.posts;
      console.log(this.currentLocation)
    },
    showPosts: function (data) {
      this.postsByLocation = data.posts;
      this.currentLocation = data.location;
    },
    setSelectedPost: function (data) {
      this.selectedPostId = data;
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
</style>
