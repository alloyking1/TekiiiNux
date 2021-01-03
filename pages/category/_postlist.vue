<template>
  <!-- Page content-->
  <div class="container py-4 mb-2 mb-sm-0 pb-sm-5">
    <div class="row justify-content-center">
      <div class="col-lg-9">
        <nav aria-label="breadcrumb">
          <ol class="py-1 my-2 breadcrumb">
            <NuxtLink class="breadcrumb-item" to="/">Home</NuxtLink>
            <NuxtLink class="breadcrumb-item" to="/blog">Blog</NuxtLink>
            <li class="breadcrumb-item active" aria-current="page">
              {{ category ? category.category.title : "Loading..." }}
            </li>
          </ol>
        </nav>
        <h1 class="mb-5">
          {{ category ? category.category.title : "Loading..." }}
        </h1>
        <div v-for="(eachPost, index) in category.posts" :key="index">
          <NuxtLink
            class="noRouterLink"
            :to="{ name: 'single-id', params: { id: eachPost.id } }"
          >
            <!-- Post-->
            <BlogPostCard :content="eachPost" />
          </NuxtLink>
        </div>

        <!-- Pagination-->
        <BlogPostPagination
          :currentPage="this.category.pages"
          @next-page="nextPageFetch"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      category: "",
    };
  },

  async fetch() {
    this.fetchPost();
  },

  methods: {
    async fetchPost(page = null) {
      const id = this.$route.params.postlist;
      await axios
        .get(`${this.$Api}/api/get_category_posts/?id=${id}&page=${page}`)
        .then((res) => {
          this.category = res.data;
          console.log(this.category.category.title);
        });
    },

    async nextPageFetch(e) {
      this.fetchPost(e);
    },
  },

  fetchOnServer: true,
};
</script>
