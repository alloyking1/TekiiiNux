<template>
  <div class="container">
    <div v-for="(eachPost, index) in recentPost.posts" :key="index">
      <NuxtLink
        class="noRouterLink"
        :to="{ name: 'singlepost-id', params: { id: eachPost.id } }"
      >
        <BlogPostCard :content="eachPost" />
      </NuxtLink>
    </div>
    <BlogPostPagination
      :PageCount="this.recentPost.pages"
      @next-page="nextPageFetch"
    />
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
  async fetch() {
    this.fetchPost();
  },

  methods: {
    async fetchPost(page = null) {
      const id = this.$route.params.postlist;
      await axios
        .get(`${this.$Api}/api/get_recent_posts/?count=6&page=${page}`)
        .then((res) => {
          this.recentPost = res.data;
          console.log(this.recentPost);
        });
    },

    async nextPageFetch(e) {
      await this.fetchPost(e);
    },
  },

  fetchOnServer: true,
};
</script>