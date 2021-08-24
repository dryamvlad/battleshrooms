<template>
  <div class="space-bottom-large mint-section wf-section">
    <div class="container fadeup w-container">
      <div class="center-content">
        <h3 class="display-heading-7 space-bottom">
          300 early supporters mint
        </h3>
        <div class="text-lead space-bottom">Price: <span class="text-primary-2">{{$store.state.price}} eth</span></div>
        <div class="panel space-bottom-extra-small" style="">
          <div class="form-block w-form">
            <form id="mint-form" name="email-form" data-name="Mint Form" class="center-content mint-form" v-if="isEsEligible">
              <input type="button" @click="mintEarlyBot()" v-model="buttonTitle" data-wait="Please wait..." class="button w-button"/>
            </form>
            <h2 class="text-primary-1" v-else >Sorry, you are not in the Early Supporters list</h2>
            <div class="form-success w-form-done">
            </div>
          </div>
        </div>
        <div class="center-content">
          <div class="text-small form-hint-text">Maximum 1 bot per wallet</div>
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
    mintEarlyBot() {
      if(!this.$store.state.transactionPending) {
        this.$store.dispatch('mintEarlyBot')
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
    isEsEligible() {
      if (typeof this.$store.state.contractData.esEligible !== "undefined") {
        return this.$store.state.contractData.esEligible;
      } else {
        return true;
      }
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