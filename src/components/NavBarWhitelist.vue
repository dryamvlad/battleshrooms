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
            <nav role="navigation" class="nav-menu-2 w-nav-menu">
              <div>
                <a href="https://battleverse.io" target="_blank" class="link-block-4 social-link-item w-inline-block"><img src="images/BattleVerse.png" loading="lazy" width="48" height="48" srcset="images/BattleVerse-p-500.png 500w, images/BattleVerse-p-1080.png 1080w, images/BattleVerse-p-1600.png 1600w, images/BattleVerse.png 1759w" sizes="(max-width: 991px) 100vw, 48px" alt="" class="image-9"></a>
              </div>
              <div>
                <p class="text-primary-1">Part of the BattleVerse project</p>
              </div>
            </nav>
          </div>
          <div class="navbar-controls">
            <div class="div-block-1339266">
              <a href="https://twitter.com/battleverse_io" target="_blank" class="link-block-4 social-link-item w-inline-block"><img src="images/twitter.svg" loading="lazy" width="48" height="48" alt="" class="image-9"></a>
            </div>
            <div class="div-block-1339267">
              <a href="https://discord.gg/HFVAnBS9qA" target="_blank" class="link-block-4 social-link-item w-inline-block"><img src="images/discord_logo.png" loading="lazy" width="55" alt="" class="image-10"></a>
            </div>
            <div class="user-stats">
              <div class="stats-item"><img src="images/robot_icon.png" loading="lazy" width="36" height="36" srcset="images/robot_icon-p-500.png 500w, images/robot_icon.png 700w" sizes="100vw" alt="">
                <div class="stats-item-text">20</div>
              </div>
              <div class="stats-item"><img src="images/bbcoin.png" loading="lazy" width="24" height="24" alt="">
                <div class="stats-item-text">20,000</div>
              </div>
            </div>
            <div class="navbar-buttons">
              <a href="https://dul755i8ncy.typeform.com/to/eDFVtluS" target="_blank" class="button-3 w-button">Whitelist</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBarWhitelist",
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