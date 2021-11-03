<template>
  <div id="Top" class="back-to-top-container">
    <div class="back-to-top-button-wrapper">
      <a href="#Top" class="button-circle bg-gray-3 w-inline-block"
        ><img src="https://assets.website-files.com/60fc0bb0b3b4100042e1092e/60fc0bb1b3b4101da8e10980_icon-arrow-up.svg" alt="" class="button-circle-icon"
      /></a>
    </div>
  </div>
  <NavBar/>
  <div class="herohero wf-section">
    <div class="container">
      <div class="w-layout-grid hero-2-grid-2">
        <div id="w-node-_3254c8ec-4cd9-1cef-11e2-c40f831f6615-1d7546a0" class="hero-content-2 center-content"><img src="images/Group-6.png" loading="lazy" width="473" sizes="(max-width: 479px) 95vw, (max-width: 767px) 92vw, (max-width: 991px) 600px, 599.984375px" srcset="images/Group-6-p-500.png 500w, images/Group-6-p-800.png 800w, images/Group-6-p-1080.png 1080w, images/Group-6.png 1416w" alt="" class="logo"></div>
        <div class="hero-content-2 center-content">
          <div data-poster-url="videos/hero_shroom_4-poster-00001.jpg" data-video-urls="videos/hero_shroom_4-transcode.mp4,videos/hero_shroom_4-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" class="background-video-2 w-background-video w-background-video-atom"><video autoplay="" loop="" style="background-image:url(&quot;videos/hero_shroom_4-poster-00001.jpg&quot;)" muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover">
              <source src="videos/hero_shroom_4-transcode.mp4" data-wf-ignore="true">
              <source src="videos/hero_shroom_4-transcode.webm" data-wf-ignore="true">
            </video></div>
        </div>
      </div>
    </div>
  </div>
  <EarlyMintForm v-if="isPresalePaused === false"/>
  <MintForm v-else-if="isPaused === false"/>
  <ComingSoon v-else/>
  <div class="space-bottom-large-3 trailer wf-section"><img src="images/левоshrooms_back_night2.png" loading="lazy" sizes="100vw" srcset="images/левоshrooms_back_night2-p-500.png 500w, images/левоshrooms_back_night2.png 556w" alt="" class="image-18"><img src="images/правоshrooms_back_night1-1.png" loading="lazy" alt="" class="image-124">
    <div class="container fadeup w-container">
      <div class="video-wrapper">
        <div style="padding-top:56.17021276595745%" class="w-embed-youtubevideo"><iframe src="https://www.youtube.com/embed/5pDDQMzb4Xs?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0" frameborder="0" style="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:auto" allow="autoplay; encrypted-media" allowfullscreen=""></iframe></div>
      </div>
    </div>
  </div>
  <div class="section-7 wf-section">
    <div data-w-id="d6378ec7-c46d-aea6-9ee3-2609a3d77ae5" class="container-4 w-container">
      <div class="text-block">3 GENERATIONS</div>
    </div>
    <div data-w-id="8e565fca-8a98-f7c5-f8b3-4f14f8e673ef" class="container-5 w-container">
      <div class="w-layout-grid grid-185046">
        <img src="images/Gen-1.png" loading="lazy" sizes="(max-width: 479px) 90vw, 100vw" srcset="images/Gen-1-p-500.png 500w, images/Gen-1.png 1614w" alt="">
        <img src="images/Gen-2.png" loading="lazy" sizes="(max-width: 479px) 90vw, 100vw" srcset="images/Gen-2-p-500.png 500w, images/Gen-2.png 1614w" alt=""><img src="images/Gen-3.png" loading="lazy" sizes="(max-width: 479px) 90vw, 100vw" srcset="images/Gen-3-p-500.png 500w, images/Gen-3.png 1614w" alt=""></div>
    </div>
  </div>
  <div class="section-6 wf-section"><img src="images/shrooms_back2-1.png" loading="lazy" alt="" class="image-183"><img src="images/shrooms_back2-2.png" loading="lazy" alt="" class="image-181-copy"><img src="images/shrooms_back-3.png" loading="lazy" alt="" class="image-181">
    <div data-w-id="3ff6782f-e4e3-5ad9-672b-1faf024272e5" class="container-4 w-container">
      <div class="text-block">TEAM</div>
    </div>
    <div data-w-id="3ff6782f-e4e3-5ad9-672b-1faf024272e8" class="container-3 w-container">
      <div class="w-layout-grid grid-185044">
        <div class="div-block-13392">
          <div class="w-layout-grid grid-185045-copy">
            <div class="div-block-13394-copy"><img src="images/linkedin.png" loading="lazy" alt="">
              <a href="https://www.linkedin.com/in/simakov5/" target="_blank" class="link-block w-inline-block"></a>
            </div>
          </div>
        </div>
        <div id="w-node-_3ff6782f-e4e3-5ad9-672b-1faf024272ef-1d7546a0" class="div-block-1339231">
          <div class="w-layout-grid grid-185045-copy">
            <div class="div-block-13394-copy"><img src="images/linkedin.png" loading="lazy" alt="">
              <a href="https://www.linkedin.com/in/vlad-d-a4ab464a/" target="_blank" class="link-block w-inline-block"></a>
            </div>
          </div>
        </div>
        <div id="w-node-_3ff6782f-e4e3-5ad9-672b-1faf024272f4-1d7546a0" class="div-block-13397">
          <div class="w-layout-grid grid-185045-copy">
            <div class="div-block-13394-copy"><img src="images/linkedin.png" loading="lazy" alt="">
              <a href="https://www.linkedin.com/in/zhunikov/" target="_blank" class="link-block w-inline-block"></a>
            </div>
          </div>
        </div>
        <div id="w-node-_3ff6782f-e4e3-5ad9-672b-1faf024272f9-1d7546a0" class="div-block-13302">
          <div class="w-layout-grid grid-185045">
            <div class="div-block-24"><img src="images/twitter_1.png" loading="lazy" alt="">
              <a href="https://twitter.com/eabutyaev" target="_blank" class="link-block w-inline-block"></a>
            </div>
            <div class="div-block-24"><img src="images/linkedin.png" loading="lazy" alt="">
              <a href="https://www.linkedin.com/in/evgeniy-butyaev-96302718/" target="_blank" class="link-block w-inline-block"></a>
            </div>
          </div>
        </div>
        <div id="w-node-_3ff6782f-e4e3-5ad9-672b-1faf02427301-1d7546a0" class="div-block-1339223">
          <div class="w-layout-grid grid-185045-copy">
            <div class="div-block-13394-copy"><img src="images/telegram_1.png" loading="lazy" alt="">
              <a href="https://tlgg.ru/skylikesky" target="_blank" class="link-block w-inline-block"></a>
            </div>
          </div>
        </div>
        <div id="w-node-_3ff6782f-e4e3-5ad9-672b-1faf02427302-1d7546a0" class="div-block-1339243">
          <div class="w-layout-grid grid-185045">
            <div class="div-block-24"><img src="images/artstation.png" loading="lazy" alt="">
              <a href="https://www.artstation.com/cybermystic" target="_blank" class="link-block w-inline-block"></a>
            </div>
            <div class="div-block-24"><img src="images/instagram_1.png" loading="lazy" alt="">
              <a href="https://www.instagram.com/cyber_mystic_vr/" target="_blank" class="link-block w-inline-block"></a>
            </div>
          </div>
        </div>
        <div id="w-node-_3ff6782f-e4e3-5ad9-672b-1faf0242730a-1d7546a0" class="div-block-133953">
          <div class="w-layout-grid grid-185045">
            <div class="div-block-24"><img src="images/vimeo.png" loading="lazy" alt="">
              <a href="https://vimeo.com/384101361" target="_blank" class="link-block w-inline-block"></a>
            </div>
            <div class="div-block-24"><img src="images/linkedin.png" loading="lazy" alt="">
              <a href="https://www.linkedin.com/in/eistan" target="_blank" class="link-block w-inline-block"></a>
            </div>
          </div>
        </div>
        <div id="w-node-_3ff6782f-e4e3-5ad9-672b-1faf02427312-1d7546a0" class="div-block-1339265">
          <div class="w-layout-grid grid-185045-copy">
            <div class="div-block-13394-copy"><img src="images/linkedin.png" loading="lazy" alt="">
              <a href="https://www.linkedin.com/in/sergi-ivanov/" target="_blank" class="link-block w-inline-block"></a>
            </div>
          </div>
        </div>
        <div id="w-node-_3ff6782f-e4e3-5ad9-672b-1faf02427317-1d7546a0" class="div-block-13392-copy">
          <div class="w-layout-grid grid-185045-copy">
            <div class="div-block-13394-copy"><img src="images/linkedin.png" loading="lazy" alt="">
              <a href="http://www.linkedin.com/in/v-sergeenkov" target="_blank" class="link-block w-inline-block"></a>
            </div>
          </div>
        </div>
        <div id="w-node-_3ff6782f-e4e3-5ad9-672b-1faf0242731c-1d7546a0" class="div-block-1339211">
          <div class="w-layout-grid grid-185045-copy">
            <div class="div-block-13394-copy"><img src="images/linkedin.png" loading="lazy" alt="">
              <a href="http://www.linkedin.com/in/jimmipu" target="_blank" class="link-block w-inline-block"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="space-bottom-large-4 wf-section">
    <div class="container-2 fadeup w-container">
      <div class="center-content-2">
        <div class="social-list">
          <a href="https://www.youtube.com/channel/UCDm5vi_H3NA3Edt9CYgYxNw" target="_blank" class="social-link-item w-inline-block"><img src="images/icon_youtube.png" width="60" alt="" class="image-13"></a>
          <a href="https://discord.gg/HFVAnBS9qA" target="_blank" class="social-link-item w-inline-block"><img src="images/icon_discord.png" width="60" alt="" class="image-14"></a>
          <a href="https://twitter.com/battleverse_io" target="_blank" class="social-link-item w-inline-block"><img src="images/icon_twitter.png" width="60" alt="" class="image-15"></a>
          <a href="http://battleverse.medium.com/" target="_blank" class="social-link-item w-inline-block"><img src="images/icon_medium.png" width="60" alt="" class="image-16"></a>
          <a href="https://www.instagram.com/battleverse_io/" target="_blank" class="social-link-item w-inline-block"><img src="images/icon_instagram.png" width="60" alt="" class="image-12"></a>
          <a href="https://t.me/battleverse_news" target="_blank" class="social-link-item w-inline-block"><img src="images/icon-telegram.png" width="60" alt="" class="image-17"></a>
        </div>
      </div>
      <div class="center-content-2"><img src="images/battle-1.png" loading="lazy" width="323" alt="" class="image-11">
        <div class="text-block-478">Copyright © 2021. All Rights Reserved by BattleVerse</div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarWhitelist from "../components/NavBarWhitelist.vue";
import NavBar from "../components/NavBar.vue";
import MintForm from "../components/MintForm.vue";
import EarlyMintForm from "../components/EarlyMintForm.vue";
import ComingSoon from "../components/ComingSoon.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    ComingSoon,
    MintForm,
    EarlyMintForm
  },
  methods: {
    mintBot() {
      this.$store.dispatch("mintBot", this.botsToMint);
    },
  },
  data() {
    return {
      botCount: 0,
      botsToMint: 1,
    };
  },
  computed: {
    isPaused() {
      if(typeof this.$store.state.contractData.paused !== "undefined") {
        return this.$store.state.contractData.paused;
      } else {
        return true;
      }
    },
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
.social-link-item {
  cursor: pointer;
}
.centered {
  position: fixed; /* or absolute */
  top: 50%;
  left: 50%;
}
</style>
