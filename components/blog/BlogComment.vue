<template>
  <div id="disqus_thread"></div>
</template>

<script>
export default {
  props: ["content_id", "absolute_url"],

  mounted() {
    /**
     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
     * */

    // const disqus_config = function () {
    //   this.page.url = this.absolute_url; // Replace PAGE_URL with your page's canonical URL variable
    //   this.page.identifier = this.content_id; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    // };
    (function () {
      this.page.url = this.absolute_url; // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = this.content_id; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    });

    (function () {
      // DON'T EDIT BELOW THIS LINE
      var d = document,
        s = d.createElement("script");
      s.src = "https://https-tekiii-com.disqus.com/embed.js";
      s.setAttribute("data-timestamp", +new Date());
      (d.head || d.body).appendChild(s);
    })();
  },
};
</script>