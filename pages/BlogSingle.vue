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
                  <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li class="breadcrumb-item"><a href="#">Blog</a></li>
                  <li class="breadcrumb-item"><a href="#">Category</a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Single post right sidebar
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
            <div
              class="row no-gutters position-relative align-items-center border-top border-bottom my-5"
            >
              <div
                class="col-md-6 py-2 py-dm-3 pr-md-3 text-center text-md-left"
              >
                Recent posts
              </div>
              <div
                class="d-none d-md-block position-absolute border-left h-100"
                style="top: 0; left: 50%; width: 1px"
              ></div>
              <div class="col-md-6 pl-md-3 py-2 py-md-3">Recent posts</div>
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
  props: ["id"],
  data() {
    return {
      post: {},
    };
  },
  async mounted() {
    await axios.get(`${this.$Api}/api/get_post/?id=${this.id}`).then((res) => {
      this.post = res.data.post;
    });
  },
};
</script>