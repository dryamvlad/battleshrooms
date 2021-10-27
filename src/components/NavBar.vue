<template>
<div class="navbar-wrapper sticky-top">
    <div class="container">
      <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar-2 w-nav">
        <div class="navbar-row">
          <div class="div-block-1339270">
            <nav role="navigation" class="nav-menu-2 w-nav-menu">
              <div class="div-block-1339268">
                <a href="https://battleverse.io" target="_blank" class="link-block-4 social-link-item w-inline-block"><img src="images/BattleVerse.png" loading="lazy" width="48" height="48" srcset="images/BattleVerse-p-500.png 500w, images/BattleVerse-p-1080.png 1080w, images/BattleVerse-p-1600.png 1600w, images/BattleVerse.png 1759w" sizes="(max-width: 991px) 100vw, 60px" alt="" class="image-9"></a>
              </div>
              <div>
                <p class="text-primary-1">PART OF THE BATTLEVERSE PROJECT</p>
              </div>
            </nav>
          </div>
          <div class="navbar-controls">
            <div class="user-stats" v-show="$store.state.web3Connected">
              <div class="stats-item">
                <img
                  src="images/robot_icon.png"
                  loading="lazy"
                  width="36"
                  height="36"
                  srcset="
                    images/robot_icon-p-500.png 500w,
                    images/robot_icon.png       700w
                  "
                  sizes="(max-width: 479px) 15vw, 36px"
                  alt=""
                />
                <div class="stats-item-text">
                  {{ $store.state.contractData.owned }}
                </div>
              </div>
            </div>
            <div class="navbar-buttons">
              <a href="" @click="connectWeb3" aria-current="page" class="button-3 w-button">{{ buttonTitle }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  components: {},
  methods: {
    async connectWeb3(event) {
      event.preventDefault();
      if (this.$store.state.web3Connected) {
        return;
      }

      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        this.$store.dispatch("initWeb3");
      } else {
        alert("No Ethereum interface injected into browser. Read-only access");
      }
    },
  },
  computed: {
    buttonTitle() {
      if (this.$store.state.web3Connected) {
        return this.$store.getters.shortWallet;
      } else {
          return "Connect";
      }
    },
  },
};
</script>

<style scoped>
</style>