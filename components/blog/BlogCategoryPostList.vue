<template>
  <!-- Page content-->
  <div class="container py-4 mb-2 mb-sm-0 pb-sm-5">
    <div class="row justify-content-center">
      <div class="col-lg-9">
        <nav aria-label="breadcrumb">
          <ol class="py-1 my-2 breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Blog</a></li>
            <li class="breadcrumb-item active" aria-current="page">
              List no sidebar
            </li>
          </ol>
        </nav>
        <h1 class="mb-5">Blog</h1>
        <div v-for="(eachPost, index) in posts.posts" :key="index">
          <NuxtLink
            class="noRouterLink"
            :to="{ name: 'BlogSingle', params: { id: eachPost.id } }"
          >
            <!-- Post-->
            <BlogPostCard :content="eachPost" />
          </NuxtLink>
        </div>

        <!-- Pagination-->
        <!-- <Pagination /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["posts"],
};
</script>
