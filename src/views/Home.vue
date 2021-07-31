<template>
  <div id="Top" class="back-to-top-container">
    <div class="back-to-top-button-wrapper">
      <a href="#Top" class="button-circle bg-gray-3 w-inline-block"
        ><img src="images/icon-arrow-up.svg" alt="" class="button-circle-icon"
      /></a>
    </div>
  </div>
  <NavBar />
  <div class="bbb-head wf-section">
    <div class="container space-bottom-large">
      <div class="panel section bg-gradient-5 bot-hero">
        <div class="panel-body align-content-center bot-hero">
          <div class="content-width-extra-large">
            <h1 class="display-heading-1">Baby Battle Bots</h1>
            <div class="space-bottom-extra-small description">
              <h3 class="card-heading display-inline">Cute and deadly</h3>
              <h3 class="card-heading display-inline text-gray-4">
                gamified collection of 10,000 procedurally generated 3d robots
                that live and fight on Ethereum blockchain.
              </h3>
            </div>
            <div class="buttons">
              <div class="circle bg-primary-4">
                <a
                  href="https://twitter.com/BBBotsNFT"
                  target="_blank"
                  class="link-block-2 social-link-item w-inline-block"
                  ><img
                    src="images/twitter.svg"
                    loading="lazy"
                    width="48"
                    height="48"
                    alt=""
                    class="image-4"
                /></a>
              </div>
              <div class="circle space-left">
                <a
                  href="https://discord.gg/stUqfHPt"
                  target="_blank"
                  class="link-block-3 social-link-item w-inline-block"
                  ><img
                    src="images/discord_logo.png"
                    loading="lazy"
                    width="48"
                    height="48"
                    alt=""
                    class="image-5"
                /></a>
              </div>
            </div>
          </div>
          <img
            src="images/for_site.png"
            width="600"
            sizes="(max-width: 479px) 400px, (max-width: 767px) 49vw, (max-width: 1919px) 51vw, 600px"
            srcset="images/for_site-p-500.png 500w, images/for_site.png 800w"
            alt=""
            class="image-2"
          />
        </div>
      </div>
    </div>
  </div>
  <ComingSoon v-if="isPaused" />
  <MintForm v-else />
  <div class="space-bottom-large wf-section">
    <div class="container fadeup w-container">
      <div class="panel">
        <div class="panel-body">
          <div class="center-content space-bottom-large">
            <h3 class="display-heading-3">3 generations</h3>
            <div class="text-lead space-bottom">
              Each generation consists of 3200 pieces<span
                class="text-primary-3"
              ></span>
            </div>
          </div>
          <div
            data-w-id="e524ddf9-8eff-db86-9dea-9b21a0edcff4"
            class="w-layout-grid grid-thirds space-bottom"
          >
            <div class="panel bg-gray-1">
              <div class="panel-body justify-content-center">
                <div class="center-content">
                  <div class="circle-large-2 bg-primary-1 generation-circle">
                    <h1 class="display-heading-4 generation-title">1</h1>
                  </div>
                  <img
                    src="images/for_site_2.png"
                    loading="lazy"
                    width="643"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 643px, (max-width: 1919px) 29vw, 441px"
                    srcset="
                      images/for_site_2-p-500.png 500w,
                      images/for_site_2.png       800w
                    "
                    alt=""
                    class="generation-image first"
                  />
                </div>
                <div class="bot-count">
                  <div class="badge bg-gradient-1">
                    <div>3200</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel bg-gray-1">
              <div class="panel-body justify-content-center">
                <div class="center-content">
                  <div class="circle-large-2 bg-primary-1 generation-circle">
                    <h1 class="display-heading-4 generation-title">2</h1>
                  </div>
                  <img
                    src="images/question.png"
                    loading="lazy"
                    width="643"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 643px, (max-width: 1919px) 29vw, 441px"
                    srcset="
                      images/question-p-500.png 500w,
                      images/question.png       600w
                    "
                    alt=""
                    class="generation-image"
                  />
                </div>
                <div class="bot-count">
                  <div class="badge bg-gradient-1">
                    <div>3200</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel bg-gray-1">
              <div class="panel-body justify-content-center">
                <div class="center-content">
                  <div class="circle-large-2 bg-primary-1 generation-circle">
                    <h1 class="display-heading-4 generation-title">3</h1>
                  </div>
                  <img
                    src="images/question.png"
                    loading="lazy"
                    width="643"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 643px, (max-width: 1919px) 29vw, 441px"
                    srcset="
                      images/question-p-500.png 500w,
                      images/question.png       600w
                    "
                    alt=""
                    class="generation-image"
                  />
                </div>
                <div class="bot-count">
                  <div class="badge bg-gradient-1">
                    <div>3200</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="space-bottom-large wf-section roadmap">
    <div class="container fadeup w-container">
      <div class="center-content">
        <h3 class="display-heading-3 space-bottom-large">Roadmap</h3>
      </div>
      <div class="w-layout-grid grid-thirds space-bottom">
        <div class="panel">
          <div id="roadmap" class="panel-body">
            <div class="space-bottom-large">
              <h1 class="space-bottom-extra-small text-primary-3">
                Generation 1
              </h1>
              <div class="card-heading text-gray-4">Early August</div>
            </div>
            <ul role="list" class="w-list-unstyled">
              <li class="bordered-list-item-small">
                <div class="text-lead text-white">25% sold</div>
                <div>10 Bots will be airdropped to random holders</div>
              </li>
              <li class="bordered-list-item-small">
                <div class="text-lead text-white">50% sold</div>
                <div>5% charity donation decided by community</div>
              </li>
              <li class="bordered-list-item-small">
                <div class="text-lead text-white">100% sold</div>
                <div>
                  <span class="text-white">Bot Battles</span> development start
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="panel">
          <div id="roadmap" class="panel-body">
            <div class="space-bottom-large">
              <h1 class="space-bottom-extra-small text-primary-3">
                Generation 2
              </h1>
              <div class="card-heading text-gray-4">Mid August</div>
            </div>
            <ul role="list" class="w-list-unstyled">
              <li class="bordered-list-item-small">
                <div class="text-lead text-white">25% sold</div>
                <div>20 Bots will be airdropped to random holders</div>
              </li>
              <li class="bordered-list-item-small">
                <div class="text-lead text-white">50% sold</div>
                <div><span class="text-white">DAO </span>launch</div>
              </li>
              <li class="bordered-list-item-small">
                <div class="text-lead text-white">100% sold</div>
                <div>
                  20
                  <span class="text-white">3d downloadable models</span>
                  will be minted for Twitter giveaway
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="panel">
          <div id="roadmap" class="panel-body">
            <div class="space-bottom-large">
              <h1 class="space-bottom-extra-small text-primary-3">
                Generation 3
              </h1>
              <div class="card-heading text-gray-4">Late August</div>
            </div>
            <ul role="list" class="w-list-unstyled">
              <li class="bordered-list-item-small">
                <div class="text-lead text-white">25% sold</div>
                <div>30 Bots will be airdropped to random holders</div>
              </li>
              <li class="bordered-list-item-small">
                <div class="text-lead text-white">50% sold</div>
                <div>
                  Announcing 300
                  <strong class="text-white">UniBots </strong>that will be given
                  as prizes for Bot Battles winners
                </div>
              </li>
              <li class="bordered-list-item-small">
                <div class="text-lead text-white">100% sold</div>
                <div>15% charity donation decided by community</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        data-w-id="42b171e2-d9f5-0917-f123-c4140485a072"
        class="panel space-bottom"
      >
        <div id="roadmap" class="panel-body">
          <div class="space-bottom">
            <h1 class="space-bottom-extra-small text-primary-1">
              Bot Battles +Shop
            </h1>
            <div class="card-heading text-gray-4">Early September</div>
          </div>
          <div>
            <span class="text-white"
              ><strong>Basic Play to Earn browser game</strong></span
            >
            where you lead your bot army to fight other Bots and get
            <span class="text-white">$BBT token</span> for each victory. You may
            spend these tokens in Bot Battles Shop for purchasing shields and
            other perks that will make your bot more likely to win!<br />Level
            up for each 5th victory. After reaching level 10 your Bots will get
            opportunity to win one of <span class="text-white">300 </span
            ><span class="text-white">UniBots </span>for you!
          </div>
        </div>
      </div>
      <div data-w-id="0b8e3388-cd3f-a983-3d4b-561b55fa818c" class="panel">
        <div id="roadmap" class="panel-body">
          <div class="space-bottom">
            <h1 class="space-bottom-extra-small text-primary-1">
              $BBT liquidity pool launch
            </h1>
            <div class="card-heading text-gray-4">Mid September</div>
          </div>
          <div>Trade your tokens received in fair bloody battles!</div>
        </div>
      </div>
    </div>
  </div>
  <div class="space-bottom-large team wf-section">
    <div class="container fadeup w-container">
      <div class="center-content">
        <h3 class="display-heading-3 space-bottom-large">Team</h3>
        <div class="w-layout-grid grid-halves">
          <div class="panel">
            <div class="panel-body justify-content-center">
              <div class="center-content">
                <div class="space-bottom">
                  <img
                    src="images/vlad.png"
                    alt=""
                    class="circle-extra-large space-bottom"
                  />
                  <h4>Vlad</h4>
                  <div class="text-lead">
                    Initial&nbsp;idea,&nbsp;code,&nbsp;rendering
                  </div>
                </div>
                <div class="row">
                  <div class="social-list">
                    <a
                      href="https://twitter.com/dryamvlad"
                      target="_blank"
                      class="social-link-item w-inline-block"
                      ><img src="images/twitter.svg" alt=""
                    /></a>
                    <a
                      href="https://instagram.com/dryamvlad"
                      target="_blank"
                      class="social-link-item w-inline-block"
                      ><img src="images/instagram.svg" alt=""
                    /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="panel">
            <div class="panel-body justify-content-center">
              <div class="center-content">
                <div class="space-bottom">
                  <img
                    src="images/alex.png"
                    alt=""
                    class="circle-extra-large space-bottom"
                  />
                  <h4>Alex</h4>
                  <div class="text-lead">
                    Concept,&nbsp;modeling,&nbsp;texturing
                  </div>
                </div>
                <div class="row">
                  <div class="social-list">
                    <a
                      href="https://twitter.com/AlekseyProkoval"
                      class="social-link-item w-inline-block"
                      ><img src="images/twitter.svg" alt=""
                    /></a>
                    <a
                      href="https://www.instagram.com/cyber_mystic_vr/"
                      target="_blank"
                      class="social-link-item w-inline-block"
                      ><img src="images/instagram.svg" alt=""
                    /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="space-bottom-large wf-section">
    <div class="container fadeup w-container">
      <div class="center-content">
        <div class="text-lead space-bottom">
          This is just a start and we&#x27;re looking forward to grow big.<br />Join
          our community and rock with us!<span class="text-primary-3"></span>
        </div>
        <div class="social-list">
          <a
            href="https://twitter.com/BBBotsNFT"
            target="_blank"
            class="social-link-item w-inline-block"
            ><img src="images/twitter.svg" width="60" alt=""
          /></a>
          <a
            href="https://discord.gg/stUqfHPt"
            target="_blank"
            class="social-link-item w-inline-block"
            ><img src="images/discord_logo.png" width="60" alt=""
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import MintForm from "../components/MintForm.vue";
import ComingSoon from "../components/ComingSoon.vue";
import * as pc from 'playcanvas';

export default {
  name: "Home",
  components: {
    NavBar,
    MintForm,
    ComingSoon,
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
      return this.$store.state.contractData.paused;
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
