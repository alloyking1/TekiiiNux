<template>
  <div class="container">
    <div v-for="(eachPost, index) in recentPost.posts" :key="index">
      <router-link
        class="noRouterLink"
        :to="{ name: 'blog_single', params: { id: eachPost.id } }"
      >
        <BlogPostCard :content="eachPost" />
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      recentPost: "",
    };
  },
  async mounted() {
    await axios
      .get(`${this.$Api}/api/get_recent_posts/?count=3&page=1`)
      .then((res) => {
        this.recentPost = res.data;
        console.log(this.recentPost);
      });
  },
};
</script>