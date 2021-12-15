<template>
  <img id="logo" alt="Kamakura city logo" src="./assets/kamakura_logo.png"/>
  <Menu />
  <LocationInfo />
  <Map />
</template>

<script>
import Menu from "./components/Menu";
import Map from "./components/Map";
import LocationInfo from "./components/LocationInfo";

export default {
  name: "App",
  components: {
    Menu,
    LocationInfo,
    Map,
  },
  data: () => ({
    view: "home",
    list: []
  }),
  methods: {
    
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#logo {
  width:250px;
} 
</style>
