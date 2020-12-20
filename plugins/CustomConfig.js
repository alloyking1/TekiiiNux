import Vue from "vue";

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('LL')
  }
});

Vue.mixin({
  methods: {
    openForm() {
      document.getElementById("myForm2").style.display = "block";
    }
  },
})

Vue.config.productionTip = false;
Vue.prototype.$Api = process.env.VUE_APP_BASE_URL
Vue.prototype.$SiteName = process.env.VUE_APP_SITE_NAME
Vue.prototype.$SlackLink = process.env.VUE_APP_SLACK_LINK
