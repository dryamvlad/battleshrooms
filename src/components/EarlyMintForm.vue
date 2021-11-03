<template>
  <div class="space-bottom-large-2 mint-section wf-section">
    <div class="container fadeup w-container">
      <div class="center-content">
        <h3 class="display-heading-7 space-bottom">
          Battle Shrooms presale is up!
        </h3>
        <div class="panel space-bottom-extra-small" style="">
          <div class="form-block w-form">
            <form id="mint-form" name="email-form" data-name="Mint Form" class="center-content mint-form" v-if="isWhitelisted">
              <input type="button" @click="mintPresale()" v-model="buttonTitle" data-wait="Please wait..." class="button-4 w-button"/>
            </form>
            <h3 class="text-primary" v-else >Sorry, you are not in the white list</h3>
            <div class="form-success w-form-done">
            </div>
          </div>
        </div>
        <div class="center-content">
          <div class="text-lead-2 space-bottom">
            <br/>
            Price: {{mintPrice}} MATIC<br/>
            Maximum 1 Shroom per wallet
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createToast } from 'mosha-vue-toastify';

export default {
  name: "EarlyMintForm",
  components: {
  },
  methods: {
    mintPresale() {
      if(!this.$store.state.transactionPending) {
        this.$store.dispatch('mintPresale')
      } else {
        createToast("You are already minting",{
            position: 'top-center',
            type: 'danger',
            transition: 'slide',
            timeout: 20000,
            showIcon: 'true',
            hideProgressBar: 'true'
        })
      }
    }
  },
  computed: {
    buttonTitle(){
      if(this.$store.state.transactionPending)
        return 'Minting...'
      return 'Mint!'
    },
    isWhitelisted() {
      if (typeof this.$store.state.contractData.wlEligible !== "undefined") {
        return this.$store.state.contractData.wlEligible;
      } else {
        return true;
      }
    },
    mintPrice(){
      return this.$store.getters.ethPrice;
    },
  },
};
</script>

<style scoped>
  .button{
    cursor: pointer;
  }
  h2 {
    margin-bottom: 0px;
  }
</style>