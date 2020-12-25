<template>
  <div class="container">
    <div class="d-md-flex justify-content-between align-items-center pt-3 pb-2">
      <div class="d-flex justify-content-center align-items-center mb-4">
        <!-- <label class="pr-1 mr-2">Show</label>
        <select class="form-control custom-select mr-2" style="width: 5rem">
          <option value="10">3</option>
          <option value="20">5</option>
          <option value="30">7</option>
        </select>
        <div class="font-size-sm text-nowrap pl-1 mb-1">posts per page</div> -->
      </div>
      <nav class="mb-4" aria-label="Page navigation">
        <ul class="pagination justify-content-center" id="btn">
          <li
            class="page-item btn btn-secondary"
            @click="pageNumberConfig('prev')"
          >
            <i class="fe-chevron-left">Prev</i>
          </li>
          <li
            class="page-item btn btn-primary"
            @click="pageNumberConfig('next')"
          >
            <i class="fe-chevron-right">Next</i>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: ["currentPage"],
  data() {
    return {
      prev: 1,
      next: 1,
    };
  },

  mounted() {
    console.log(this.currentPage);
  },

  methods: {
    async pageNumber(pageNum) {
      await this.$emit("next-page", pageNum);
    },

    pageNumberConfig(btn) {
      if (btn === "next") {
        if (this.next < this.currentPage) {
          this.next += 1;
          this.pageNumber(this.next);
        } else {
          console.log("last page");
        }
      }

      if (btn === "prev") {
        if (this.prev < this.next && this.prev > 0) {
          this.prev -= 1;
          this.pageNumber(this.prev);
        } else {
          console.log("last page");
        }
      }
    },
  },
};
</script>