<template>
  <div>
    <!-- Intro-->
    <section
      class="d-flex align-items-center position-relative bg-dark bg-size-cover bg-position-center fh-section overflow-hidden pt-6 pb-lg-5"
      style="background-image: url(img/demo/presentation/intro/bg.jpg)"
    >
      <div class="container-fluid pt-4 pb-5 py-lg-5">
        <div class="row align-items-center py-3">
          <div class="col-xl-6 col-lg-5 d-flex justify-content-end">
            <div
              class="pt-2 mx-auto mb-5 mb-lg-0 ml-lg-0 mr-xl-7 text-center text-lg-left"
              style="max-width: 495px"
            >
              <h1 class="display-4 text-light pb-2">
                <span class="font-weight-light">Have a look </span>Around!
              </h1>
              <p
                class="h4 font-weight-light text-light opacity-70 line-height-base"
              >
                Chat and share with over a thousand Game lovers and Game
                developers worldwide. We have live discussions. We're building
                the biggest Gaming virtual user group in the world. Come join
                the fun.
              </p>

              <div class="input-group-append">
                <a
                  class="btn btn-primary"
                  target="_blank"
                  :href="this.$SlackLink"
                  ><i class="fe-slack"></i>Join our community
                </a>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-7">
            <div class="cs-parallax ml-lg-n5" style="max-width: 920px">
              <div class="cs-parallax-layer position-relative" data-depth="0.1">
                <img
                  src="../assets/img/demo/presentation/intro/layer01.png"
                  alt="Layer"
                />
              </div>
              <div
                class="cs-parallax-layer"
                style="z-index: 2"
                data-depth="0.3"
              >
                <img
                  src="../assets/img/demo/presentation/intro/layer02.png"
                  alt="Layer"
                />
              </div>
              <!-- <div class="cs-parallax-layer" data-depth="0.2"><img src="../assets/img/demo/presentation/intro/layer03.png" alt="Layer"/>
                            </div>
                            <div class="cs-parallax-layer" style="z-index: 3;" data-depth="0.1"><img src="../assets/img/demo/presentation/intro/layer04.png" alt="Layer"/>
                            </div>
                            <div class="cs-parallax-layer" data-depth="0.15"><img src="../assets/img/demo/presentation/intro/layer05.png" alt="Layer"/>
                            </div>
                            <div class="cs-parallax-layer" style="z-index: 4;" data-depth="0.25"><img src="../assets/img/demo/presentation/intro/layer06.png" alt="Layer"/>
                            </div>
                            <div class="cs-parallax-layer" data-depth="0.3"><img src="../assets/img/demo/presentation/intro/layer07.png" alt="Layer"/>
                            </div>
                            <div class="cs-parallax-layer" data-depth="0.4"><img src="../assets/img/demo/presentation/intro/layer08.png" alt="Layer"/>
                            </div> -->
              <!-- <div class="cs-parallax-layer" data-depth="0.35">
                  <img
                    src="../assets/img/demo/presentation/intro/layer09.png"
                    alt="Layer"
                  />
                </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Blog-->

    <section class="py-5 py-md-6 py-lg-7">
      <div class="container pb-3 pt-4 pb-lg-2">
        <div class="row justify-content-center mb-4 pb-2">
          <div class="col-xl-6 col-lg-7 col-md-8">
            <h2 class="h1 mb-4 text-center">
              Blog
              <span class="bg-faded-primary rounded text-primary px-3 py-2"
                >Recent Posts</span
              >
            </h2>
            <p class="text-muted text-center">
              We have a technology blog with a unique interest in gaming related
              topics.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <BlogRecentPost />
            <router-link
              to="/blog"
              class="btn btn-outline-primary ml-4"
              style="margin-top: -10rem"
              >More Posts</router-link
            >
          </div>
        </div>
      </div>
    </section>

    <section>
      <PodcastRename />
    </section>
    <!-- Podcast and radio-->
    <Footer />
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(process.env.siteName);
  },
};
</script>
