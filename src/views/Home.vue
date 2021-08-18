<template>
  <div id="Top" class="back-to-top-container">
    <div class="back-to-top-button-wrapper">
      <a href="#Top" class="button-circle bg-gray-3 w-inline-block"
        ><img src="images/icon-arrow-up.svg" alt="" class="button-circle-icon"
      /></a>
    </div>
  </div>
  <NavBar />
  <div class="section space-bottom-large wf-section">
    <div class="container">
      <div class="w-layout-grid hero-2-grid-2">
        <div class="video-container">
          <div data-poster-url="videos/BBB_animation-poster-00001.jpg" data-video-urls="videos/BBB_animation-transcode.mp4,videos/BBB_animation-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" class="background-video w-background-video w-background-video-atom"><video autoplay="" loop="" style="background-image:url(&quot;videos/BBB_animation-poster-00001.jpg&quot;)" muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover">
              <source src="videos/BBB_animation-transcode.mp4" data-wf-ignore="true">
              <source src="videos/BBB_animation-transcode.webm" data-wf-ignore="true">
            </video></div>
        </div>
        <div class="hero-content-2 center-content"><img src="images/logo_v02.logo.png" loading="lazy" width="286" sizes="(max-width: 479px) 92vw, 286px" srcset="images/logo_v02.logo-p-500.png 500w, images/logo_v02.logo-p-800.png 800w, images/logo_v02.logo.png 1000w" alt="" class="logo">
          <div class="battle-title">
            <h1 class="display-heading-7 battle-title-heading">Own a Bot<br>Battle other Bots<br>Earn Eth</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ComingSoon v-if="isPaused" />
  <MintForm v-else />
  <div class="space-bottom-large wf-section">
    <div class="container fadeup w-container">
      <div class="center-content space-bottom-large">
        <h3 class="display-heading-3">How it works</h3>
        <div class="hiw-text">
          <div class="text-lead">Stake Eth</div>
          <div class="circle-small space-left-extra-small"><img src="images/icon-arrow-right.svg" alt=""></div>
          <div class="text-lead space-left-extra-small">Battle other players</div>
          <div class="circle-small space-left-extra-small"><img src="images/icon-arrow-right.svg" alt=""></div>
          <div class="text-lead space-left-extra-small">Earn Eth</div>
        </div>
      </div>
      <div class="center-content">
        <h2>Example</h2>
      </div>
      <div class="panel">
        <div class="panel-body">
          <div class="w-layout-grid grid-thirds space-bottom">
            <div class="panel center-content">
              <div class="panel-body">
                <h2 class="space-bottom-extra-small">Stake</h2>
                <h1 class="display-heading-2 text-primary-3 space-bottom-extra-small">$200</h1>
                <h4 class="space-bottom-extra-small text-gray-4">in Eth</h4>
              </div>
            </div>
            <div class="panel center-content">
              <div class="panel-body">
                <h2 class="space-bottom-extra-small">Battle</h2>
                <div><img src="images/swords_green.svg" width="88" alt=""></div>
                <h4 class="space-bottom-extra-small text-gray-4">opponent</h4>
              </div>
            </div>
            <div class="panel center-content">
              <div class="panel-body">
                <h2 class="space-bottom-extra-small">Earn</h2>
                <h1 class="display-heading-2 text-primary-3 space-bottom-extra-small">$400</h1>
                <h4 class="space-bottom-extra-small text-gray-4">in Eth</h4>
              </div>
            </div>
          </div>
          <div class="center-content">
            <div class="text-lead">Refer to <a href="#BFE">Battle For Ether</a> description down the page for more details<span class="text-primary-3"></span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="space-bottom-large wf-section">
    <div class="container fadeup w-container">
      <div class="panel">
        <div class="panel-body">
          <div class="center-content space-bottom-large">
            <h3 class="display-heading-3">3 generations</h3>
            <div class="text-lead space-bottom">Each generation consists of 3500 pieces<span class="text-primary-3"></span></div>
          </div>
          <div data-w-id="e524ddf9-8eff-db86-9dea-9b21a0edcff4" class="w-layout-grid grid-thirds space-bottom">
            <div class="panel bg-gray-1">
              <div class="panel-body justify-content-center">
                <div class="center-content">
                  <div class="circle-large-2 bg-primary-1 generation-circle">
                    <h1 class="display-heading-4 generation-title">1</h1>
                  </div><img src="images/bbb_generator_v06.0001.png" loading="lazy" width="643" sizes="(max-width: 767px) 100vw, (max-width: 991px) 84vw, (max-width: 1919px) 33vw, 441.04168701171875px" srcset="images/bbb_generator_v06.0001.png 500w, images/bbb_generator_v06.0001.png 600w" alt="" class="generation-image first">
                </div>
                <div class="bot-count">
                  <div class="badge bg-gradient-1">
                    <div>3500</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel bg-gray-1">
              <div class="panel-body justify-content-center">
                <div class="center-content">
                  <div class="circle-large-2 bg-primary-1 generation-circle">
                    <h1 class="display-heading-4 generation-title">2</h1>
                  </div><img src="images/site_question.png" loading="lazy" width="643" sizes="(max-width: 767px) 100vw, (max-width: 991px) 84vw, (max-width: 1919px) 33vw, 441.04168701171875px" srcset="images/site_question.png 500w, images/site_question.png 800w, images/site_question.png 1200w" alt="" class="generation-image">
                </div>
                <div class="bot-count">
                  <div class="badge bg-gradient-1">
                    <div>3500</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel bg-gray-1">
              <div class="panel-body justify-content-center">
                <div class="center-content">
                  <div class="circle-large-2 bg-primary-1 generation-circle">
                    <h1 class="display-heading-4 generation-title">3</h1>
                  </div><img src="images/site_question.png" loading="lazy" width="643" sizes="(max-width: 767px) 100vw, (max-width: 991px) 84vw, (max-width: 1919px) 33vw, 441.04168701171875px" srcset="images/site_question.png 500w, images/site_question.png 800w, images/site_question.png 1200w" alt="" class="generation-image">
                </div>
                <div class="bot-count">
                  <div class="badge bg-gradient-1">
                    <div>3500</div>
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
          <div class="panel-body">
            <div class="space-bottom-large">
              <h1 class="space-bottom-extra-small text-primary-3">
                Generation 1
              </h1>
              <!-- <div class="card-heading text-gray-4">Early August</div> -->
            </div>
            <ul role="list" class="w-list-unstyled">
              <li class="bordered-list-item-small">
                <div>50 Bots giveway</div>
              </li>
              <li class="bordered-list-item-small">
                <div>5% charity donation decided by community</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="panel">
          <div class="panel-body">
            <div class="space-bottom-large">
              <h1 class="space-bottom-extra-small text-primary-3">
                Generation 2
              </h1>
              <!-- <div class="card-heading text-gray-4">Mid August</div> -->
            </div>
            <ul role="list" class="w-list-unstyled">
              <li class="bordered-list-item-small">
                <div>50 Bots giveway</div>
              </li>
              <li class="bordered-list-item-small">
                <div>5% charity donation decided by community</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="panel">
          <div class="panel-body">
            <div class="space-bottom-large">
              <h1 class="space-bottom-extra-small text-primary-3">
                Generation 3
              </h1>
              <!-- <div class="card-heading text-gray-4">Late August</div> -->
            </div>
            <ul role="list" class="w-list-unstyled">
              <li class="bordered-list-item-small">
                <div>50 Bots giveway</div>
              </li>
              <li class="bordered-list-item-small">
                <div>Announcing 300
                  <strong class="text-white">UniBots </strong>that will be raffled among random Battle For Ether winners</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="space-bottom-large bfe wf-section">
    <div class="container fadeup w-container">
      <div class="panel">
        <div class="panel-body">
          <div class="center-content"><img src="images/b4e_logo_v2.png" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 84vw, (max-width: 991px) 88vw, (max-width: 1919px) 90vw, 1151.8924560546875px" srcset="images/b4e_logo_v2.png 500w, images/b4e_logo_v2.png 800w, images/b4e_logo_v2.png 1152w" alt="" class="b4e-logo">
            <h3 id="BFE" class="space-bottom-extra-small">Ethereum-based browser game</h3>
            <div class="text-lead space-bottom-large">No gas fees — powered by Polygon L2<br>Launching November 2021<br></div>
          </div>
          <div class="panel bg-gradient-5 space-bottom">
            <div class="panel-body justify-content-center panel-body-small">
              <div class="row row-align-center">
                <div class="circle-2 circle-horizontal">
                  <h3 class="large-heading-2 no-bottom-space">1</h3>
                </div>
                <div>
                  <h2 class="space-bottom-extra-small">Host Battle</h2>
                  <div class="text-lead">Every BBB holder will be able to host a battle by staking Ether. You can instantly cancel Battle and unstake if no one has joined your hosted Battle yet</div>
                </div>
              </div>
            </div>
          </div>
          <div class="panel bg-gradient-5 space-bottom">
            <div class="panel-body justify-content-center panel-body-small">
              <div class="row row-align-center">
                <div class="circle-2 circle-horizontal">
                  <h3 class="large-heading-2 no-bottom-space">2</h3>
                </div>
                <div>
                  <h2 class="space-bottom-extra-small">Invite Opponent</h2>
                  <div class="text-lead">After staking you will get a link for sharing with other BBB holders. Also your battle will be displayed on Battle For Ether main page. Every holder can join the Battle by staking Eth equal to the initial stake made by Battle host</div>
                </div>
              </div>
            </div>
          </div>
          <div class="panel bg-gradient-5 space-bottom-large">
            <div class="panel-body justify-content-center panel-body-small">
              <div class="row row-align-center">
                <div class="circle-2 circle-horizontal">
                  <h3 class="large-heading-2 no-bottom-space">3</h3>
                </div>
                <div>
                  <h2 class="space-bottom-extra-small">Start Battle</h2>
                  <div class="text-lead">Host hits Start button and the Battle starts! Chances for victory are based on your Bot overall rarity score and level</div>
                </div>
              </div>
            </div>
          </div>
          <div class="center-content"><img src="images/cup_v01.CUP-1.png" width="178" alt="">
            <h1>Battle Progressive Prize</h1>
            <div>
              <div class="text-lead">1% from each Battle total staked amount will be transferred to Battle Grand Prize fund. After reaching amount of 3 Eth the Prize will be raffled in next random battle and will be evenly distributed among participants.</div>
              <div class="text-lead">Additionally 1% will be transferred to Community fund.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="space-bottom-large team wf-section">
    <div class="container fadeup w-container">
      <div class="center-content">
        <h3 class="display-heading-3 space-bottom-large">Traits and levels</h3>
      </div>
      <div data-w-id="484af546-e259-15ab-9cca-ce8b8abda988" class="w-layout-grid grid-two-thirds bot-chars space-bottom-large">
        <div id="w-node-_484af546-e259-15ab-9cca-ce8b8abda989-29432f09" class="row">
          <div><img src="images/site_game_ui_bot.png" width="440" alt=""></div>
        </div>
        <div class="w-layout-grid list-grid">
          <div class="panel">
            <div class="panel-body justify-content-center panel-body-extra-small">
              <div>
                <h2 class="space-bottom-extra-small">Weapons</h2>
                <div class="text-lead">Each weapon trait has its attack power. The rarest are the most powerful! More attack power — more chances to win!</div>
              </div>
            </div>
          </div>
          <div class="panel">
            <div class="panel-body justify-content-center panel-body-extra-small">
              <div>
                <h2 class="space-bottom-extra-small">Toys</h2>
                <div class="text-lead">Baby Bots use toys not only for fun but for defense too. Rarity also affects defense amount for each Bot.</div>
              </div>
            </div>
          </div>
          <div class="panel">
            <div class="panel-body justify-content-center panel-body-extra-small">
              <div>
                <h2 class="space-bottom-extra-small">Levels</h2>
                <div class="text-lead">Each played Battle moves you forward to level up. Bots with higher levels have more chances to win.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="space-bottom-large team wf-section">
    <div class="container fadeup w-container">
      <div class="center-content">
        <h3 class="display-heading-3 space-bottom-large">Team</h3>
        <div class="w-layout-grid grid-thirds">
          <div class="panel">
            <div class="panel-body justify-content-center">
              <div class="center-content">
                <div class="space-bottom">
                  <img
                    src="images/team_1.png"
                    alt=""
                    class="circle-extra-large space-bottom"
                  />
                  <h4>Tokezo</h4>
                  <div class="text-lead">
                    Initial idea / code
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
                    src="images/team_2.png"
                    alt=""
                    class="circle-extra-large space-bottom"
                  />
                  <h4>Cyber Mystic</h4>
                  <div class="text-lead">
                    Concept / modeling / texturing
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
                    src="images/team_3.png"
                    alt=""
                    class="circle-extra-large space-bottom"
                  />
                  <h4>Eistan</h4>
                  <div class="text-lead">
                    Texturing / rendering
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
      <div class="center-content space-bottom-large"><img src="images/battle-1.png" loading="lazy" width="323" alt=""></div>
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
            href="https://discord.gg/HFVAnBS9qA"
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
      if(typeof this.$store.state.contractData.paused !== "undefined") {
        return this.$store.state.contractData.paused;
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
