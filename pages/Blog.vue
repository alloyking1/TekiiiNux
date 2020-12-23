<template>
  <div>
    <div class="container pt-5 pb-5" style="margin-top: 4rem; padding: 4rem">
      <nav aria-label="breadcrumb">
        <h1 class="mb-5">Recent Post</h1>
        <hr />
        <br />
        <ol class="py-1 my-2 breadcrumb">
          <NuxtLink class="breadcrumb-item" to="/">Home</NuxtLink>
          <NuxtLink class="breadcrumb-item" to="/blog">Blog</NuxtLink>
        </ol>
      </nav>
    </div>
    <BlogRecentPost />
    <div class="container pt-5 pb-5" style="margin-top: 8rem; padding: 4rem">
      <h1 class="mb-5">Categories</h1>
      <hr />
      <BlogCategory />
      <br />
    </div>
  </div>
</template>