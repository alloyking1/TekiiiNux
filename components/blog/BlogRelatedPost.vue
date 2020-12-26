<template>
  <div>
    <h2>Related Post</h2>
    <div v-for="(eachPost, index) in relatedPost.posts" :key="index">
      <NuxtLink
        class="noRouterLink"
        :to="{ name: 'single-id', params: { id: eachPost.id } }"
      >
        <BlogPostCard :content="eachPost" />
      </NuxtLink>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  props: ["slug"],
  data() {
    return {
      relatedPost: "",
    };
  },
  async mounted() {
    this.fetchPost();
  },

  methods: {
    async fetchPost(page = null) {
      await axios
        .get(
          `${this.$Api}/api/get_tag_posts/?slug=${this.slug}&count=2&page=${page}`
        )
        .then((res) => {
          this.relatedPost = res.data;
          console.log(this.relatedPost);
        });
    },
  },
};
</script>