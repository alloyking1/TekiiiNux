import Vue from "vue";

// moment configuration
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('LL')
  }
});

// radio button
Vue.mixin({
  methods: {
    openForm() {
      document.getElementById("myForm2").style.display = "block";
    }
  },
})

// Global variables
Vue.config.productionTip = false;
Vue.prototype.$Api = process.env.VUE_APP_BASE_URL
Vue.prototype.$SiteName = process.env.VUE_APP_SITE_NAME
Vue.prototype.$SlackLink = process.env.VUE_APP_SLACK_LINK
