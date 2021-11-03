<template>
  <NavBar />
    <div class="space-bottom-large-2 mint-section wf-section">
      <div class="container fadeup w-container">
        <div class="center-content">
          <h3 class="display-heading-7">
            Whitelist checking
          </h3>
          <div class="center-content">
            <div class="text-lead-2 space-bottom">
              Connect your wallet to check if you're whitelisted
            </div>
          </div>
          <div class="panel space-bottom-large" style="">
            <div class="form-block w-form" v-show="isContractDataReceived">
              <h3 class="text-primary green" v-if="isWhitelisted">All good, you're in!</h3>
              <h3 class="text-primary red" v-else>Sorry, you are not in the whitelist</h3>
            </div>
            <div class="form-block w-form" v-show="showLoading">
              <h3 class="text-primary">Loading...</h3>
            </div>
          </div>
          <a href="/" target="_blank">Back to main page</a>
        </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "WLcheck",
  components: {
    NavBar,
  },
  data() {
    const now = new Date();
    const dropTime = new Date("Nov 3 2021 19:00:00 GMT+0000");

    return {
      time: dropTime - now,
    };
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
    isWhitelisted() {
      if (typeof this.$store.state.contractData.wlEligible !== "undefined") {
        return this.$store.state.contractData.wlEligible;
      } else {
        return false;
      }
    },
    isConnected() {
      return this.$store.state.wallet !== 0;
    },
    isContractDataReceived() {
      return this.$store.state.contractData.totalSupply > 0;
    },
    showLoading() {
      return typeof this.$store.state.contractData.totalSupply == 'undefined' && this.$store.state.wallet !== 0;
    }
  },
};
</script>

<style scoped>
.textarea-large {
  width: 800px;
}

h3.text-primary {
  margin: 0;
}

h3.red {
  color: #ff715b;
}

h3.green {
  color: #3ccf91;
}
</style>
