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

  <div v-if="selectedPostId > -1" class="LocationInfo">
    <h1>{{ currentLocation.name }}</h1>
    <img class="pic" v-bind:src="currentLocation.imageURL" />
    <h1>Edit Post</h1>
    <div>
      <div class="edit-post-box">
        <textarea
          ref="postForm"
          id="input-post"
          type="input"
          v-model="selectedPost[0].notes"
        >
        </textarea>
        <div class="post-controls">
          <button
            v-on:click="submitEdit"
            type="submit"
            class="save-edit-button"
          >
            Confirm Edit
          </button>
          <button v-on:click="resetPosts" type="submit" class="cancel-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: ["displayList", "selectedPost", "selectedPostId", "currentLocation"],
  methods: {
    submitPost: async function (event) {
      try {
        const postForm = this.$refs.postForm;
        const postRequest = postForm.value;
        const visitTimeForm = this.$refs.timeForm;
        const timeSelected = visitTimeForm.value;

        if (!postRequest) {
          alert("Please enter a post and click submit");
        } else if (!timeSelected) {
          alert("Please enter a time and click submit");
        } else {
          //post to database
          const location = this.displayList[0].name;
          postForm.value = "";

          const makePost = await fetch(`/api/posts/${location}`, {
            method: "POST",
            body: JSON.stringify({
              location: location,
              notes: postRequest,
              timestamp: timeSelected,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });

          const posted = await makePost.json();

          this.resetPosts();
        }
      } catch (error) {
        console.error(error);
      }
    },

    submitEdit: async function () {
      try {
        const postForm = this.$refs.postForm;
        const postRequest = postForm.value;     
        console.log(postRequest); 
      } catch (error) {
        console.error(error);
      }
    },   

    //get posts by location
    resetPosts: async function () {
      try {
        const currentLocation = this.currentLocation;

        const location = currentLocation.name;
        const getPosts = await fetch(`/api/posts/${location}`, {
          method: "GET",
        });

        const posts = await getPosts.json();

        this.$emit("updatePosts", {
          posts: posts,
          location: this.currentLocation,
        });
      } catch (error) {
        console.error(error);
      }
    },
     
  },
  emits: ["updatePosts"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.edit-post-box {
  margin-right: auto;
  margin-left: auto;
  width: 600px;
  min-height: 100px;
  padding: 5px 5px 5px 5px;
}
#search {
  margin-top: 30px;
}
.save-edit-button {
  float: left;
  margin-left: 5px;
}
.cancel-button {
  float: left;
  margin-left: 5px;
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
