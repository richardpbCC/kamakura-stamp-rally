<template>
  <div v-if="displayList.length > 0" class="LocationInfo">
    <h1>{{ displayList[0].name }}</h1>
    <br />
    <div>
      <img class="pic" v-bind:src="displayList[0].imageURL" />
      <div v-if="postsByLocation.length > 0">
        <div class="post-box" v-for="post in postsByLocation" :key="post.id">
        <p class="post">{{ post.notes }}</p>
        <p class="time">{{ displayList[0].visited }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LocationInfo",
  props: ["displayList", "postsByLocation", "renderPosts"],
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pic {
  height: 500px;
  padding: 10px 10px 10px 10px;
}
.post-box {
  box-shadow: 0 1px 2px rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  margin-right: auto;
  margin-left: auto;
  width: 600px;
  min-height: 80px;
}
.post {
  text-align: left;
  padding: 10px 10px 10px 10px;
  }
.time {
  text-align: right;
  padding: 10px 10px 10px 10px;
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
