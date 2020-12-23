<template>
  <div>
    <!-- Post-->
    <article class="card card-horizontal card-custom card-hover mb-grid-gutter">
      <div
        class="card-img-top m-3"
        href="blog-single-ns.html"
        :style="{
          backgroundImage: `url(${image})`,
        }"
      ></div>
      <div class="card-body">
        <!-- <span class="badge badge-dark">{{ content.slug }}</span> -->
        <div
          class="meta-link"
          v-for="(tag, index) in content.tags"
          :key="index"
        >
          <span class="badge badge-dark mr-2">{{ tag.title }}</span>
        </div>
        <h2 class="h4 nav-heading mt-2 mb-4" v-html="content.title"></h2>
        <p class="font-size-md" v-html="content.excerpt"></p>

        <div class="mt-3 text-right text-nowrap">
          <a class="meta-link font-size-xs" href="#">
            <img class="rounded-circle" width="36" src="#" alt="" />
            {{ content.author.first_name }}</a
          >

          <span class="meta-divider"></span>
          <a class="meta-link font-size-xs" href="#"
            ><i class="fe-calendar mr-1 mt-n1"></i>&nbsp;
            <!-- {{
              content.date | formatDate
            }} -->
          </a>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: ["content"],
  async testing() {
    DateFormat = function (d) {
      return (
        d.getFullYear() +
        "/" +
        ("0" + d.getDate()).slice(-2) +
        "/" +
        ("0" + (d.getMonth() + 1)).slice(-2)
      );
    };

    var d1 = new Date(Date.now());

    console.log(d1);
    console.log(myDateFormat(d1));
  },

  computed: {
    image() {
      if (this.content.thumbnail_images) {
        return this.content.thumbnail_images.full.url;
      }
    },
  },
};
</script>
