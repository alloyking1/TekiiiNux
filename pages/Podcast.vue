<template>
  <div>
    <div class="p-5">
      <main>
        <section class="section section-lg bg_section">
          <div class="container">
            <div class="row row-grid align-items-center">
              <div class="col-md-6 order-md-2">
                <img
                  src="../assets/img/podcast.png"
                  class="img-fluid floating"
                />
              </div>

              <div class="col-md-6 order-md-1">
                <div class="pr-md-5">
                  <h1 style="font-size: 5em; font-weight: bold">
                    {{ this.$SiteName }}
                  </h1>
                  <h3>Podcast</h3>
                  <p>
                    We podcast about a whole lot ranging from the latest tech
                    news, interviews of tech entrepreneurs, talks about deep
                    space and lots more.
                  </p>
                </div>
                <br />
                <div>
                  <!-- <button
                    class="btn btn-outline-primary mr-2"
                    @click="openForm()"
                  >
                    Radio
                  </button> -->

                  <NuxtLink to="/" class="btn btn-outline-primary"
                    >Home</NuxtLink
                  >
                  <!-- <router-link to="/" class="btn btn-outline-primary"
                    >Blog</router-link
                  > -->
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section class="section section-lg bg-gradient-default p-5">
          <div class="container pt-lg pb-300 p-5">
            <div class="row text-center justify-content-center">
              <div class="col-lg-10">
                <h2 class="">Coming Soon!!</h2>
              </div>
              <!-- <div class="row">

                <iframe
                  src="https://anchor.fm/tekiii/embed/episodes/Meet-and-greet-eon343"
                  height="102px"
                  width="400px"
                  frameborder="0"
                  scrolling="no"
                ></iframe>
              </div> -->
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>