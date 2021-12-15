<template>
  <img alt="Vue logo" src="./assets/logo.png" />
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
  }),
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
</style>
