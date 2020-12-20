<template>
  <div>
    <!-- Intro-->
    <section class="container my-lg-2 pt-5 pb-lg-7">
      <div class="row align-items-center">
        <div class="col-lg-5 py-3 py-lg-0">
          <h1>Gaming Blog, Podcast and Internet Radio.</h1>
          <h2 class="h3">Building the largest virtual gaming community.</h2>
          <div class="py-4">
            <p class="cs-callout">
              {{ this.$SiteName }} is a community of gamers from around the
              world. We meet here to talk about challenges and share
              experiences. We also have a unique interest in good music so we
              decided to add an internet radio. Wanna say Hi ?
            </p>
          </div>
          <NuxtLink to="/contact" class="btn btn-outline-primary"
            >Contact Us</NuxtLink
          >
        </div>
        <div class="col-xl-6 col-lg-7 offset-xl-1">
          <div class="py-5" style="min-height: 543px">
            <div
              class="d-none d-lg-block position-absolute bg-no-repeat bg-position-center h-100"
              style="
                top: 0;
                left: -45px;
                width: 646px;
                background-image: url(img/pages/about/bg-shape.svg);
              "
            ></div>
            <div class="row no-gutters mx-n2 pt-lg-4">
              <div class="col-sm-4 px-2 mb-3">
                <NuxtLink
                  to="/blog"
                  class="card h-100 card-body py-5 justify-content-center border-0 box-shadow-lg text-center"
                  ><i class="fe-book text-primary h1 mb-3"></i>
                  <h3 class="h5 mb-0">Blog</h3>
                </NuxtLink>
              </div>
              <div class="col-sm-4 px-2 mb-3">
                <a
                  class="card card-body py-5 border-0 box-shadow-lg text-center mb-3"
                  href="#"
                  @click="openForm()"
                  ><i class="fe-music text-danger h1 mb-3"></i>
                  <h3 class="h5 mb-0">Radio</h3></a
                ><a
                  class="card card-body py-5 border-0 box-shadow-lg text-center"
                  :href="this.$SlackLink"
                  target="_blank"
                  ><i class="fe-slack text-info h1 mb-3"></i>
                  <h3 class="h5 mb-0">Slack</h3></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br /><br /><br />
  </div>
</template>
