<template>
  <div class="Menu" v-if="displayList.length > 0">
    <h1>Post</h1>
    <div id="input-area">
      <textarea
        ref="postForm"
        id="input-post"
        type="input"
        placeholder="Input your post"
      />
      <br />
      <button v-on:click="submitPost" type="submit">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: ["displayList"],
  methods: {

    submitPost: async function (event) {
      try {
        const postForm = this.$refs.postForm;
        const postRequest = postForm.value;
        
        if (!postRequest) {
          alert("Please enter a post and click submit");
        } else {
          const location = this.displayList[0].name;
          postForm.value = "";

          const res = await fetch(`/api/locations/${location}`, {
            method: "PATCH",
            body: JSON.stringify({ notes: postRequest }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });

          const data = await res.json();
          //this.$emit("post", data);
          //this.posts = response.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  emits: ["search"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#input-post {
  box-shadow: 0 1px 2px rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  width: 750px;
  height: 100px;
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
