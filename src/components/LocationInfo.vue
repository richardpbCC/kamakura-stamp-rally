<template>
  <div v-if="displayList.length > 0" class="LocationInfo">
    <h1>{{ displayList[0].name }}</h1>
    <br />
    <div>
      <img class="pic" v-bind:src="displayList[0].imageURL" />
      <div v-if="postsByLocation.length > 0">
        <div
          class="post-box"
          v-for="post in postsByLocation"
          :key="post.id"
          :id="post.id"
          :location="post.location"
        >
          <p class="post">{{ post.notes }}</p>
          <div class="post-controls">
            <button v-on:click="selectPost" class="edit-button">
              Edit Post
            </button>
            <button v-on:click="deletePost" class="delete-button">
              Delete Post
            </button>
            <div class="time">{{ formatDate(post.timestamp) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="selectedPostId > -1" class="LocationInfo">
    <div>          
        <div class="post-box">
          <p class="post">{{}}</p>
          <div class="post-controls">
            <button class="save-edit-button">
              Confirm Edit
            </button>                        
          </div>
        </div>      
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "LocationInfo",
  props: [
    "displayList",
    "postsByLocation",
    "selectedPostId",
    "currentLocation",
  ],
  methods: {
    selectPost: async function (event) {
      try {
        const selectedPostId = event.target.parentElement.parentElement.id;
        this.$emit("selectedPostId", selectedPostId);
      } catch (error) {
        console.error(error);
      }
    },

    editPost: async function () {
      try {
      } catch (error) {
        console.error(error);
      }
    },

    deletePost: async function (event) {
      if (confirm("Are you sure you want to delete this post?")) {
        try {
          const selectedPostId = event.target.parentElement.parentElement.id;
          const selectedPostLocation = this.currentLocation.name;

          //delete post from database
          const deletePost = await fetch(`/api/posts/`, {
            method: "DELETE",
            body: JSON.stringify({
              id: selectedPostId,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });
          this.resetPosts(selectedPostLocation);
        } catch (error) {
          console.error(error);
        }
      }
    },

    resetPosts: async function (selectedPostLocation) {
      //reset posts after delete
      try {
        const getPosts = await fetch(`/api/posts/${selectedPostLocation}`, {
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

    formatDate: function (date) {
      return moment(date).format("dddd, MMMM Do YYYY, h:mm a");
    },
  },
  emits: ["selectedPostId", "updatePosts"],
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
.post-controls {
  display: inline;
}
.edit-button {
  float: left;
  margin-left: 5px;
}
.delete-button {
  float: left;
  margin-left: 5px;
}
.save-edit-button {
  float: left;
  margin-left: 5px;
}
.time {
  float: right;
  margin-right: 5px;
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
