<template>
  <div>
    <div class="row">
      <div class="col-md-6 pt-3" v-for="(category, i) in categories" :key="i">
        <NuxtLink
          class="noRouterLink"
          :to="{ name: 'category-postlist', params: { postlist: category.id } }"
        >
          <article
            class="card card-custom card-horizontal card-hover mb-grid-gutter"
          >
            <div class="card-body">
              <h2 class="h4 nav-heading mb-4 pt-3">
                {{ category.name }}
              </h2>
              <span class="badge badge-pill badge-dark">Dark</span>
              <span class="badge badge-pill badge-primary">Primary</span>
              <h5>
                <span class="badge badge-pill badge-dark">{{
                  category.description
                }}</span>
              </h5>
            </div>
          </article>
        </NuxtLink>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      categories: {},
    };
  },
  async mounted() {
    await axios.get(`${this.$Api}wp-json/wp/v2/categories`).then((res) => {
      this.categories = res.data;
    });
  },
};
</script>