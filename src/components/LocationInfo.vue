<template>
  <div v-if="displayList.length > 0" class="LocationInfo">
    <h1>{{displayList[0].name}}</h1>    
        <br/>
    <div>    
      <img class="pic" v-bind:src="displayList[0].imageURL"/> 
      <p v-if="postsByLocation.length > 0">{{postsByLocation}}</p>     
    </div>        
  </div>
</template>
<script>

export default {
  name: 'LocationInfo',
  props: ["displayList", "postsByLocation", "renderPosts"],
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pic {
    height: 500px;
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
