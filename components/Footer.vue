<template>
  <div>
    <footer class="cs-footer bg-dark pt-5 pt-md-6 pt-lg-7">
      <div class="container pt-3 pt-md-0">
        <div class="pb-md-4 text-center">
          <h3 class="text-light font-weight-light mb-3">Are you a gamer?</h3>
          <h2 class="text-light mb-5">Join our Slack Gaming Community.</h2>
          <a
            class="btn btn-primary"
            :href="this.$SlackLink"
            target="_blank"
            rel="noopener"
            ><i class="fe-hash mr-2"></i><i class="fab fa-slack"></i>Add Me</a
          >
        </div>
        <hr class="hr-light my-5 pb-md-4" />
        <EmailList />
        <hr class="hr-light mt-5 pb-4" />
        <p class="font-size-sm text-center mb-4 py-3">
          <!-- <span class="text-light opacity-50 mr-1"
            >© {{ this.$SiteName }} {{ new Date().getFullYear() }}</span
          > -->
          |
          <router-link to="/contact">Contact us</router-link>
        </p>
      </div>
      <br />
    </footer>
  </div>
</template>
