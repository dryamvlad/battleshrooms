<template>
  <div class="space-bottom-large mint-section wf-section">
    <div class="container fadeup w-container">
      <div class="center-content">
        <h3 class="display-heading-7 space-bottom">
          Mint your Bots
        </h3>
        <div class="text-lead space-bottom-extra-small">
          Minted {{ $store.state.contractData.totalSupply }} out of 3500 bots in 1st generation
        </div>
        <div class="text-lead space-bottom">Price: <span class="text-primary-2">{{$store.state.price}} eth</span></div>
        <div class="panel space-bottom-extra-small" style="width: 340px;">
          <div class="form-block w-form">
            <form id="mint-form" name="email-form" data-name="Mint Form" class="center-content mint-form">
              <div class="circle-small social-link-item" @click="botNumDecrease()"><img src="/images/icon-minus.svg" alt="" class="icon-small"></div>
              <input type="text" style="text-align: center;" class="form-input w-input" maxlength="2" v-model="botNum" name="Bot-count" data-name="Bot count" placeholder="" id="Bot-count" required=""/>
              <div class="circle-small social-link-item" @click="botNumIncrease()"><img src="/images/icon-plus.svg" alt="" class="icon-small"></div>
              <input type="button" @click="mintShroom()" v-model="buttonTitle" data-wait="Please wait..." class="button w-button"/>
            </form>
            <div class="form-success w-form-done">
            </div>
          </div>
        </div>
        <div class="center-content">
          <div class="text-small">Maximum 5 bots per tx</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createToast } from 'mosha-vue-toastify';

export default {
  name: "MintForm",
  components: {
  },
  data() {
    return {
      botNum: 1,
    }
  },
  methods: {
    botNumIncrease() {
      if(this.botNum + 1 < 6)
        this.botNum++;
    },
    botNumDecrease() {
      if(this.botNum - 1 > 0)
        this.botNum--;
    },
    mintShroom() {
      if(!this.$store.state.transactionPending) {
        this.$store.dispatch('mintShroom', this.botNum)
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
    }
  },
};
</script>

<style scoped>
  .social-link-item{
    cursor: pointer;
  }
</style>