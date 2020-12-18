<template>
  <div>
    <section class="bg-secondary py-5 py-md-6 py-lg-7">
      <div class="container py-3 py-lg-4">
        <div class="row align-items-center">
          <div class="col-md-6 mb-5 mb-md-0">
            <div class="mx-auto mx-md-0" style="max-width: 525px">
              <img
                class="rounded-circle"
                src="../../assets/img/podcast.png"
                alt="Mobile screens"
              />
            </div>
          </div>
          <div class="col-md-6 text-center text-md-left">
            <h2 class="h1 mb-4">
              <span class="bg-faded-primary rounded text-primary px-3 py-2"
                >Internet Radio</span
              >
              Podcast
            </h2>
            <p class="text-muted mb-5">
              {{ this.$SiteName }} Internet radio brings you super cool music.
              Our Podcast features all round technology with a unique interest
              in the gaming and gadget nitches. — hear what matters most to you!
            </p>
            <div
              class="d-flex align-items-center justify-content-center justify-content-md-start"
            >
              <div>
                <button
                  class="btn btn-outline-primary mr-2"
                  @click="openForm()"
                >
                  Radio
                </button>

                <router-link to="/podcast" class="btn btn-outline-primary"
                  >Podcast</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>