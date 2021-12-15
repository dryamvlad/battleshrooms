<template>
<div class="space-bottom-large-4 mint-section wf-section">
    <div class="container-2 fadeup w-container">
      <div class="center-content-3">
        <h3 class="display-heading-8 space-bottom-extra-small">Mint your Shrooms</h3>
        <div class="text-lead-2 space-bottom"  v-show="showLoading === false">Minted <span class="text-primary-4">{{ $store.state.contractData.totalSupply }}</span> Shrooms in <span class="text-primary-4">1st generation</span></div>
        <div class="panel-2">
          <div>
            <div id="mint-form" class="form-block-2 w-form" v-show="showLoading === false">
              <form id="mint-form" name="email-form" data-name="Email Form" class="center-content-3 mint-form">
                <div class="circle-small social-link-item" @click="numDecrease()"><img src="images/icon-minus.svg" alt=""></div>
                <input v-model="num" type="text" class="form-input w-input" maxlength="256" name="Bot-count-2" data-name="Bot Count 2" placeholder="1" id="Bot-count-2" required="">
                <div class="circle-small social-link-item" @click="numIncrease()"><img src="images/icon-plus.svg" alt=""></div>
                <input type="button" @click="mintShroom()" v-model="buttonTitle" data-wait="Please wait..." class="button-4 space-left w-button">
              </form>
            </div>
            <div class="form-block-2 w-form" v-show="showLoading">
              <h3 class="text-primary">Loading...</h3>
            </div>
          </div>
        </div>
        <div class="center-content-3">
          <div class="text-lead-2 space-bottom-small">
            <br/>
            <span class="text-primary-4"><a href="https://checkout.webill.io/nft/ace4c308-e20d-4a70-82eb-91db2fea7a89">Mint via WeBill</a></span>
          </div>
        </div>
        <div class="center-content" v-show="showLoading === false">
          <div class="text-lead-2 space-bottom">
            <br/>
            Price: {{mintPrice}} MATIC<br/>
            Maximum 10 Shrooms per tx<br/>
            <a href="https://docs.battleverse.io/how-to-get-matic-for-minting">How to get MATIC?</a>
          </div>
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
      num: 1,
    }
  },
  methods: {
    numIncrease() {
      if(this.num < this.$store.state.contractData.numPerTx)
        this.num++;
    },
    numDecrease() {
      if(this.num - 1 > 0)
        this.num--;
    },
    mintShroom() {
      if(!this.$store.state.transactionPending) {
        this.$store.dispatch('mintShroom', this.num)
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
    mintPrice(){
      if(!this.$store.state.web3Connected || typeof this.$store.state.contractData.totalSupply == 'undefined')
        return 100 * this.num;
      return this.$store.getters.ethPrice * this.num;
    },
    showLoading() {
      //return typeof this.$store.state.contractData.totalSupply == 'undefined' && this.$store.state.wallet == 0;
      return !this.$store.state.web3Connected;
    }
  },
};
</script>

<style scoped>
  .social-link-item{
    cursor: pointer;
  }
  h3.text-primary {
    margin: 0;
  }
</style>