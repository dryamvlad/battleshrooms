<template>
  <div class="modal-container">
    <div class="modal-background"></div>
    <div class="content-width-medium modal-content">
      <div class="panel bg-gray-3">
        <div class="notice-dismiss">
          <div class="button-circle-small bg-gray-3">
            <img src="images/icon-x.svg" alt="" class="button-circle-icon" />
          </div>
        </div>
        <div class="panel-body panel-body-small">
          <h6>Notice Element</h6>
          <div>
            Here&#x27;s a multi-purpose notification you can use for cookies
            notices, sales promotions etc.
          </div>
        </div>
        <div class="modal-panel-bg"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    title: String,
    text: String,
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
.modal-show {
  display: flex;
}
</style>