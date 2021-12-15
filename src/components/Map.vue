<template>
  <div v-if="displayList.length > 0">
    <h1>Map</h1> 
    <img id="map" src="https://mapandnews-japan.com/kanagawa/kamakura/imgs/map_en.png"/>
  </div>
</template>

<script>
export default {
  name: "Map",
  props: ["displayList"],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  background-color: blue;
    width: 700px;
    margin-left: auto;
    margin-right: auto;

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
