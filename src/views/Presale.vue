<template>
  <NavBar />
  <div class="space-bottom-large bfe wf-section" v-if="isEsPaused">
    <div class="container fadeup w-container">
      <div class="panel space-bottom-large">
        <div class="panel-body">
          <div class="center-content">
            <h3 id="BFE" class="display-heading-3">Early minting starts 24 Aug</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <EarlyMintForm v-else />
</template>

<script>
import NavBar from "../components/NavBar.vue";
import EarlyMintForm from "../components/EarlyMintForm.vue";

export default {
  name: "Presale",
  components: {
    NavBar,
    EarlyMintForm,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    isEsPaused() {
      if (typeof this.$store.state.contractData.esPaused !== "undefined") {
        return this.$store.state.contractData.esPaused;
      } else {
        return true;
      }
    },
  },
};
</script>

<style scoped>
.textarea-large {
  width: 800px;
}
</style>
