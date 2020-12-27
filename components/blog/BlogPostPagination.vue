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
          <li>
            <button
              class="page-item btn btn-secondary"
              @click="pageNumberConfig('prev')"
              :disabled="lastPage === 'lastPrevPage'"
            >
              <i class="fe-chevron-left">Prev</i>
            </button>
          </li>
          <li>
            <button
              class="page-item btn btn-primary"
              @click="pageNumberConfig('next')"
              :disabled="lastPage(next) === 'lastNextPage'"
            >
              <i class="fe-chevron-right">Next</i>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: ["PageCount", "totalPage"],
  data() {
    return {
      prev: 1,
      next: 1,
    };
  },

  methods: {
    async pageNumber(pageNum) {
      await this.$emit("next-page", pageNum);
    },

    pageNumberConfig(btn) {
      if (btn === "next") {
        this.next++;
        console.log(this.next);
        this.pageNumber(this.next);
      }

      if (btn === "prev") {
        this.prev = this.next--;
        console.log(this.prev);
        this.pageNumber(this.prev);
      }
    },

    lastPage(btnValue = null) {
      console.log(this.PageCount);
      if (this.PageCount === btnValue) {
        return "lastNextPage";
      }
      if (this.next === 0) {
        return "lastPrevPage";
      }
    },
  },
};
</script>