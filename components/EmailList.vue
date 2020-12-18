<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-lg-6 col-md-7 pb-md-4 text-center">
        <h4 class="text-light mb-grid-gutter">Subscribe to Newsletter</h4>
        <form
          class="cs-subscribe-form validate"
          action="https://tekiii.us7.list-manage.com/subscribe/post"
          method="post"
          name="mc-embedded-subscribe-form"
          target="_blank"
          novalidate
        >
          <input type="hidden" name="u" value="4263e5da2d7c463e45f004125" />
          <input type="hidden" name="id" value="0cf7adce97" />

          <div class="input-group input-group-overlay flex-nowrap">
            <div class="input-group-prepend-overlay">
              <span class="input-group-text text-muted"
                ><i class="fe-mail"></i
              ></span>
            </div>
            <input
              class="form-control prepended-form-control"
              type="email"
              name="b_email"
              id="b_email"
              tabindex="-1"
              placeholder="Your email"
            />
            <div class="input-group-append">
              <input
                type="submit"
                class="btn btn-primary"
                name="submit"
                value="Subscribe*"
              />
            </div>
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px" aria-hidden="true">
            <!-- <input
                  class="cs-subscribe-form-antispam"
                  type="text"
                  name="b_c7103e2c981361a6639545bd5_29ca296126"
                  tabindex="-1"
                /> -->
          </div>
          <small class="form-text text-light opacity-50 pt-2"
            >*Subscribe to our newsletter to receive early gaming events, jobs
            and curated articles straight to your inbox.</small
          >
          <div class="cs-subscribe-status"></div>
        </form>
      </div>
    </div>

    <section>
      <!-- <form
        action="https://tekiii.us7.list-manage.com/subscribe/post"
        method="POST"
      >
        <input type="hidden" name="u" value="4263e5da2d7c463e45f004125" />
        <input type="hidden" name="id" value="0cf7adce97" />

        <div
          class="field-shift"
          aria-label="Please leave the following three fields empty"
        >
          <label for="b_name">Name: </label>
          <input
            type="text"
            name="b_name"
            tabindex="-1"
            value=""
            placeholder="Freddie"
            id="b_name"
          />

          <label for="b_email">Email: </label>
          <input
            type="email"
            name="b_email"
            tabindex="-1"
            value=""
            placeholder="youremail@gmail.com"
            id="b_email"
          />
        </div>

        <div id="mergeTable" class="mergeTable">
          <div class="mergeRow dojoDndItem mergeRow-text" id="mergeRow-1">
            <label for="MERGE1">Name</label>
            <div class="field-group">
              <input type="text" name="MERGE1" id="MERGE1" size="25" value="" />
            </div>
          </div>

          <div class="mergeRow dojoDndItem mergeRow-email" id="mergeRow-0">
            <label for="MERGE0"
              >Email Address <span class="req asterisk">*</span></label
            >
            <div class="field-group">
              <input
                type="email"
                autocapitalize="none"
                autocorrect="off"
                name="MERGE0"
                id="MERGE0"
                size="25"
                value=""
              />
            </div>
          </div>
        </div>

        <div class="submit_container clear">
          <input
            type="submit"
            class="formEmailButton"
            name="submit"
            value="Subscribe"
          />
        </div>
        <input
          type="hidden"
          name="ht"
          value="cbdb32fda500352529712ff159b2fd876684a251:MTYwODA2NzA1OC44OTY3"
        />
        <input type="hidden" name="mc_signupsource" value="hosted" />
      </form> -->
    </section>
  </div>
</template>