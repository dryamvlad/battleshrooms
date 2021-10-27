<template>
  <NavBarWhitelist />
  <div class="space-bottom-large bfe wf-section" v-if="isPresalePaused">
    <div class="container fadeup w-container">
      <div class="panel space-bottom-large">
        <div class="panel-body">
          <div class="center-content">
            <h3 id="BFE" class="display-heading-3">Early minting starts 27 Oct</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <EarlyMintForm v-else />
</template>

<script>
import NavBarWhitelist from "../components/NavBarWhitelist.vue";
import EarlyMintForm from "../components/EarlyMintForm.vue";

export default {
  name: "Presale",
  components: {
    NavBarWhitelist,
    EarlyMintForm,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    isPresalePaused() {
      if (typeof this.$store.state.contractData.presalePaused !== "undefined") {
        return this.$store.state.contractData.presalePaused;
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
