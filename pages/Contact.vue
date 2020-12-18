<template>
  <div>
    <Nav />
    <div>
      <section
        class="jarallax bg-gradient pt-5 pb-7 pt-md-7"
        data-jarallax
        data-speed="0.25"
      >
        <span class="bg-overlay bg-gradient" style="opacity: 0.8"></span>
        <div
          class="jarallax-img"
          style="background-image: url(img/pages/contacts/page-title-bg.jpg)"
        ></div>
        <div class="container bg-overlay-content pt-3 pb-7 pt-md-0">
          <div class="row justify-content-center py-md-5">
            <div class="col-lg-6 col-md-8 text-center pt-2 mb-n3">
              <h1 class="text-light">Contacts</h1>
              <p class="text-light">
                Do you have an idea to discuse with us? A guest post for our
                blog? send us an email. We normally respond ASAP.
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- Contact cards (details)-->
      <section
        class="container-fluid bg-overlay-content mb-5 mb-md-6"
        style="margin-top: -120px"
      >
        <div class="row">
          <div class="col-md-4 mb-grid-gutter">
            <div class="card h-100 border-0 box-shadow-lg py-4">
              <div class="card-body text-center">
                <i
                  class="fe-map-pin mb-4 text-primary"
                  style="font-size: 2.25rem"
                ></i>
                <h3 class="h6 mb-2">Address, Location</h3>
                <p class="font-size-sm mb-2">World wide</p>
                <!-- <a class="cs-fancy-link font-size-sm" href="#map" data-scroll
                  >See on the map</a
                > -->
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-grid-gutter">
            <div class="card h-100 border-0 box-shadow-lg py-4">
              <div class="card-body text-center">
                <i
                  class="fe-clock mb-4 text-danger"
                  style="font-size: 2.25rem"
                ></i>
                <h3 class="h6 mb-2">Working hours</h3>
                <ul class="list-unstyled font-size-sm mb-0">
                  <li>Mon - Fri: 9AM - 8PM</li>
                  <li>Sat: 10AM - 5PM</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- <div class="col-lg-3 col-sm-6 mb-grid-gutter">
            <div class="card h-100 border-0 box-shadow-lg py-4">
              <div class="card-body text-center">
                <i
                  class="fe-phone mb-4 text-success"
                  style="font-size: 2.25rem"
                ></i>
                <h3 class="h6 mb-2">Phone numbers</h3>
                <ul class="list-unstyled font-size-sm mb-0">
                  <li>
                    <span class="mr-1">Customer service:</span
                    ><a class="nav-link-style" href="tel:+108044357260"
                      >+1 (080) 44 357 260</a
                    >
                  </li>
                  <li>
                    <span class="mr-1">Tech support:</span
                    ><a class="nav-link-style" href="tel:+100331697720"
                      >+1 00 33 169 7720</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div> -->
          <div class="col-md-4 mb-grid-gutter">
            <div class="card h-100 border-0 box-shadow-lg py-4">
              <div class="card-body text-center">
                <i
                  class="fe-mail mb-4 text-warning"
                  style="font-size: 2.25rem"
                ></i>
                <h3 class="h6 mb-2">Email addresses</h3>
                <ul class="list-unstyled font-size-sm mb-0">
                  <li>
                    <span class="mr-1">Contact:</span
                    ><a
                      class="nav-link-style"
                      href="mailto:contact_us@tekiii.com"
                      >contact_us@tekiii.com</a
                    >
                  </li>
                  <!-- <li>
                    <span class="mr-1">Tech support:</span
                    ><a class="nav-link-style" href="mailto:support@example.com"
                      >support@example.com</a
                    >
                  </li> -->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <br /><br /><br />

    <FooterTwo />
  </div>
</template>
