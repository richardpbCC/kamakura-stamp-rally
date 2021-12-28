<template>
  <div class="Menu" v-if="displayList.length > 0">
    <h1>Post</h1>
    <div id="input-area">
      <textarea
        ref="postForm"
        id="input-post"
        type="input"
        placeholder="Input your post here..."
      />
      <br />
      <input
        type="datetime-local"
        id="visited-time"
        name="visited-time"
        ref="timeForm"
        placeholder="dd/mm/yyyy --:--"
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
        const visitTime = this.$refs.timeForm;

        if (!postRequest) {
          alert("Please enter a post and click submit");
        } else {
          //post to database
          const location = this.displayList[0].name;
          postForm.value = "";

          const makePost = await fetch(`/api/posts/${location}`, {
            method: "POST",
            body: JSON.stringify({ 
              location: location,
              notes: postRequest,
              //timestamp: visitTime
             }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });

          const posted = await makePost.json();
                    
          //get posts by location
          const getPosts = await fetch(`/api/posts/${location}`, {
            method: "GET",
          });

          const posts = await getPosts.json();          
          this.$emit("updatePosts", posts);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  emits: ["updatePosts"],
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
