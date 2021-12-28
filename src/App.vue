<template>
  <img id="logo" alt="Kamakura city logo" src="./assets/kamakura_logo.png" />
  <h1 id="app-title">Kamakura Stamp Rally App</h1>
  <Menu v-on:search="showResults" />
  <LocationInfo v-bind:displayList="displayList" v-bind:postsByLocation="postsByLocation" />
  <Post v-bind:displayList="displayList" v-on:updatePosts="showPosts"/>
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
    displayList: [],
    postsByLocation: [],    
  }),
  methods: {
    showResults: function (data) {
      this.displayList = data.locations;
      this.postsByLocation = data.posts;      
    },    
    showPosts: function (data) {
      this.postsByLocation = data;      
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
