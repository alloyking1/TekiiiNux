<template>
  <div>
    <div
      class="cs-header navbar navbar-expand-lg navbar-light bg-light navbar-box-shadow navbar-sticky"
    >
      <div class="container">
        <div class="row justify-content-center">
          <!-- Content-->
          <div class="col-lg-9 cs-content py-4 mb-2 mb-sm-0 pb-sm-5">
            <div class="pb-4" style="max-width: 38rem">
              <nav aria-label="breadcrumb">
                <ol class="py-1 my-2 breadcrumb">
                  <NuxtLink class="breadcrumb-item" to="/">Home</NuxtLink>
                  <NuxtLink class="breadcrumb-item" to="/blog">Blog</NuxtLink>
                  <li class="breadcrumb-item active" aria-current="page">
                    {{ post ? post.slug : "loading..." }}
                  </li>
                </ol>
              </nav>
              <h1 v-html="post.title"></h1>
            </div>

            <!-- Post content-->
            <div v-html="post.content"></div>
            <div>
              {{ post.title }}
            </div>

            <!-- Tags + Sharing-->
            <hr />
            <div
              class="row no-gutters position-relative align-items-center border-top border-bottom my-5"
            >
              <BlogRelatedPost :slog="post.slug" />
            </div>
            <hr />
            <!-- comment -->
            <BlogComment :content_id="id" :absolute_url="post.link" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      post: {},
      id: "",
    };
  },
  async fetch() {
    this.id = this.$route.params.id;
    await axios.get(`${this.$Api}/api/get_post/?id=${this.id}`).then((res) => {
      this.post = res.data.post;
    });
  },
  fetchOnServer: true,
};
</script>