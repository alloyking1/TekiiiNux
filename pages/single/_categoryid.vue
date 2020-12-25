<template>
  <div>
    <div class="container-fluid py-4 mb-2 mb-sm-0 pb-sm-5">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <nav aria-label="breadcrumb">
            <ol class="py-1 my-2 breadcrumb">
              <NuxtLink class="breadcrumb-item" to="/">Home</NuxtLink>
              <NuxtLink class="breadcrumb-item" to="/blog">Blog</NuxtLink>
              <li class="breadcrumb-item active" aria-current="page">
                {{ category.slug }}
              </li>
            </ol>
          </nav>
          <h1 class="mb-5">{{ category.title }} Category</h1>
          <hr />
          <br />
          <div v-for="(eachPost, index) in post" :key="index">
            <div class="">
              <NuxtLink
                class="noRouterLink"
                :to="{ name: 'BlogSingle', params: { id: eachPost.id } }"
              >
                <!-- Post-->
                <BlogPostCard :content="eachPost" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      post: {},
      category: "",
    };
  },
  async mounted() {
    const pages = 1;
    try {
      const request = await axios.get(
        `${this.$Api}api/get_category_posts/?category_id=${this.$route.params.id}&count=6&page=${pages}`
      );
      this.post = request.data.posts;
      this.category = request.data.category;
    } catch {
      console.log("there was an error, Post could not fetch");
    }
  },
};
</script>
