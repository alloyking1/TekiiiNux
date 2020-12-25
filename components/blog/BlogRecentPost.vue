<template>
  <div class="container">
    <div v-for="(eachPost, index) in recentPost.posts" :key="index">
      <NuxtLink
        class="noRouterLink"
        :to="{ name: 'single-id', params: { id: eachPost.id } }"
      >
        <BlogPostCard :content="eachPost" />
      </NuxtLink>
    </div>
    <BlogPostPagination
      :currentPage="this.recentPost.pages"
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
  async mounted() {
    this.fetchPost();
  },

  methods: {
    async fetchPost(page = null) {
      const id = this.$route.params.postlist;
      await axios
        .get(`${this.$Api}/api/get_recent_posts/?count=4&page=${page}`)
        .then((res) => {
          this.recentPost = res.data;
        });
    },

    async nextPageFetch(e) {
      await this.fetchPost(e);
    },
  },
};
</script>