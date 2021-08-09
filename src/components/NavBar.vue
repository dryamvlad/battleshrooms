<template>
  <div class="navbar-wrapper sticky-top">
    <div class="container">
      <div
        data-collapse="medium"
        data-animation="default"
        data-duration="400"
        role="banner"
        class="navbar w-nav"
      >
        <div class="navbar-row">
          <div>
            <nav role="navigation" class="nav-menu w-nav-menu">
              <div>
                <a href="https://twitter.com/BBBotsNFT" target="_blank" class="link-block-2 social-link-item w-inline-block"><img src="images/twitter.svg" loading="lazy" width="48" height="48" alt="" class="image-4"></a>
              </div>
              <div>
                <a href="https://discord.gg/HFVAnBS9qA" target="_blank" class="link-block-3 social-link-item w-inline-block"><img src="images/discord_logo.png" loading="lazy" width="55" height="55" alt="" class="image-5"></a>
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
              <a
                @click="connectWeb3"
                href=""
                aria-current="page"
                class="button w-button w--current"
                >{{ buttonTitle }}</a
              >
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