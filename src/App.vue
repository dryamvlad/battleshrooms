<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: "App",

  components: {},
  methods: {
    initWeb3(accounts) {
      window.web3.eth.net.getNetworkType().then((network) => {
        if (network != "rinkeby") {
          alert("You are on "+network+" network. Change network to mainnet or you won't be able to do anything here");
        }
      });
      this.$store.commit("setWallet", accounts[0]);
    },

    async connectWeb3() {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        this.$store.dispatch('initWeb3');
      } else {
        alert("No Ethereum interface injected into browser. Read-only access");
      }
    },
  },

  mounted() {
    this.$nextTick(function () {
      //this.connectWeb3();
    });
  },

  data() {
    return {
      wallet: 0,
    };
  },
};
</script>

