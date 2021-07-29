<template>
  <!-- <q-page class="flex flex-center">
    <div class="row">
      <div class="col-12">
        <div class="flex flex-center q-pa-md">
          <q-avatar size="400px">
            <q-img :src="logo" spinner-color="white" />
          </q-avatar>
        </div>
        <div class="q-gutter-xs">
          <h1>Baby Battle Bots</h1>
          <p>Total Bots Supply: {{ $store.state.contractData.totalSupply }}</p>
          <p>You own: {{ $store.state.contractData.owned }}</p>
          <p>Bot price: {{ $store.getters.ethPrice }}</p>
        </div>
        <div class="q-gutter-xs">
          <wallet-address />
        </div>
        <div class="q-pa-md">
          <q-input
            rounded
            outlined
            v-model="botsToMint"
            label="How many Bots do you want to mint?"
          />
        </div>
        <div class="q-pa-md">
          <q-btn rounded color="primary" label="Mint a Bot" @click="mintBot"/>
        </div>
      </div>
    </div>
  </q-page> -->
  <div id="Top" class="back-to-top-container">
    <div class="back-to-top-button-wrapper">
      <a href="#Top" class="button-circle bg-gray-3 w-inline-block"><img src="images/icon-arrow-up.svg" alt="" class="button-circle-icon"></a>
    </div>
  </div>
  <div class="navbar-wrapper sticky-top">
    <div class="container">
      <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" class="navbar w-nav">
        <div class="navbar-row">
          <div>
            <nav role="navigation" class="nav-menu w-nav-menu">
              <a href="#roadmap" class="nav-link w-nav-link">Roadmap</a>
              <a href="#" class="nav-link w-nav-link">Battle</a>
            </nav>
          </div>
          <div class="navbar-controls">
            <div class="user-stats">
              <div class="stats-item"><img src="images/robot_icon.png" loading="lazy" width="36" height="36" srcset="images/robot_icon-p-500.png 500w, images/robot_icon.png 700w" sizes="(max-width: 479px) 15vw, (max-width: 1919px) 36px, 100vw" alt="">
                <div class="stats-item-text">20</div>
              </div>
              <div class="stats-item"><img src="images/bbcoin.png" loading="lazy" width="24" height="24" alt="">
                <div class="stats-item-text">20,000</div>
              </div>
            </div>
            <div class="navbar-buttons">
              <a href="index.html" aria-current="page" class="button w-button w--current">Connect</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bbb-head wf-section">
    <div class="container space-bottom-large">
      <div class="panel section bg-gradient-5 bot-hero">
        <div class="panel-body align-content-center bot-hero">
          <div class="content-width-extra-large">
            <h1 class="display-heading-1">Baby Battle Bots</h1>
            <div class="space-bottom-extra-small description">
              <h3 class="card-heading display-inline">Cute and deadly</h3>
              <h3 class="card-heading display-inline text-gray-4">&nbsp;gamified collection of 10,000 procedurally generated 3d robots that live and fight on Ethereum blockchain.</h3>
            </div>
            <div class="buttons">
              <div class="circle bg-primary-4">
                <a href="https://twitter.com/BBBotsNFT" target="_blank" class="link-block-2 w-inline-block social-link-item"><img src="images/twitter.svg" loading="lazy" width="48" height="48" alt="" class="image-4"></a>
              </div>
              <div class="circle space-left">
                <a href="https://discord.gg/stUqfHPt" target="_blank" class="link-block-3 w-inline-block social-link-item"><img src="images/discord_logo.png" loading="lazy" width="48" height="48" alt="" class="image-5"></a>
              </div>
            </div>
          </div><img src="images/for_site.png" width="600" sizes="(max-width: 479px) 400px, (max-width: 767px) 49vw, (max-width: 1919px) 51vw, 600px" srcset="images/for_site.png 500w, images/for_site.png 800w" alt="" class="image-2">
        </div>
      </div>
    </div>
  </div>
  <div class="space-bottom-large mint-section wf-section">
    <div class="container fadeup w-container">
      <div class="center-content">
        <h3 class="display-heading-3 space-bottom-extra-small">Mint your bots</h3>
        <div class="text-lead space-bottom">There is <span class="text-primary-3">3100</span> bots left in <span class="text-primary-3">1st generation</span></div>
        <div class="panel">
          <div>
            <div class="form-block w-form">
              <form id="mint-form" name="email-form" data-name="Email Form" class="center-content mint-form"><input type="number" class="form-input w-input" maxlength="256" name="Bot-count" data-name="Bot count" placeholder="1" id="Bot-count" required=""><input type="submit" value="Mint!" data-wait="Please wait..." class="button space-left w-button"></form>
              <div class="form-success w-form-done">
                <div>You got it! Congratulations!</div>
              </div>
              <div class="form-error w-form-fail">
                <div>Minting error</div>
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
        <h3 class="display-heading-5">1st generation<br>coming early August</h3>
        <div class="text-lead space-bottom">Join our <a href="https://discord.gg/ZRAdNPqF" target="_blank">Discord</a> and <a href="https://twitter.com/BBBotsNFT" target="_blank">Twitter </a>for announcements and giveaways.<span class="text-primary-3"></span></div>
      </div>
    </div>
  </div>
  <div class="space-bottom-large wf-section">
    <div class="container fadeup w-container">
      <div class="panel">
        <div class="panel-body">
          <div class="center-content space-bottom-large">
            <h3 class="display-heading-3">3 generations</h3>
            <div class="text-lead space-bottom">Each generation consists of 3200 pieces<span class="text-primary-3"></span></div>
          </div>
          <div data-w-id="e524ddf9-8eff-db86-9dea-9b21a0edcff4" class="w-layout-grid grid-thirds space-bottom-large">
            <div class="panel bg-gray-1">
              <div class="panel-body justify-content-center">
                <div class="center-content">
                  <div class="circle-large-2 bg-primary-1 generation-circle">
                    <h1 class="display-heading-4 generation-title">1</h1>
                  </div><img src="images/for_site_2.png" loading="lazy" width="643" sizes="(max-width: 767px) 100vw, (max-width: 991px) 643px, (max-width: 1919px) 29vw, 441px" srcset="images/for_site_2.png 500w, images/for_site_2.png 800w" alt="" class="generation-image first">
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
                  </div><img src="images/question.png" loading="lazy" width="643" sizes="(max-width: 767px) 100vw, (max-width: 991px) 643px, (max-width: 1919px) 29vw, 441px" srcset="images/question.png 500w, images/question.png 600w" alt="" class="generation-image">
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
                  </div><img src="images/question.png" loading="lazy" width="643" sizes="(max-width: 767px) 100vw, (max-width: 991px) 643px, (max-width: 1919px) 29vw, 441px" srcset="images/question.png 500w, images/question.png 600w" alt="" class="generation-image">
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
  <div class="space-bottom-large wf-section">
    <div class="container fadeup w-container">
      <div class="panel">
        <div id="roadmap" class="panel-body">
          <div class="center-content">
            <h3 class="display-heading-3">Roadmap</h3>
          </div>
          <div class="w-layout-grid grid-thirds space-bottom">
            <div class="panel">
              <div id="roadmap" class="panel-body">
                <div class="space-bottom-large">
                  <h1 class="space-bottom-extra-small text-primary-3">Generation 1</h1>
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
                    <div><span class="text-white">Bot Battles</span> development start</div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="panel">
              <div id="roadmap" class="panel-body">
                <div class="space-bottom-large">
                  <h1 class="space-bottom-extra-small text-primary-3">Generation 2</h1>
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
                    <div>20 <span class="text-white">3d downloadable models</span> will be minted for Twitter giveaway</div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="panel">
              <div id="roadmap" class="panel-body">
                <div class="space-bottom-large">
                  <h1 class="space-bottom-extra-small text-primary-3">Generation 3</h1>
                  <div class="card-heading text-gray-4">Late August</div>
                </div>
                <ul role="list" class="w-list-unstyled">
                  <li class="bordered-list-item-small">
                    <div class="text-lead text-white">25% sold</div>
                    <div>30 Bots will be airdropped to random holders</div>
                  </li>
                  <li class="bordered-list-item-small">
                    <div class="text-lead text-white">50% sold</div>
                    <div>Announcing 300 <strong class="text-white">UniBots </strong>that will be given as prizes for Bot Battles winners</div>
                  </li>
                  <li class="bordered-list-item-small">
                    <div class="text-lead text-white">100% sold</div>
                    <div>15% charity donation decided by community</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div data-w-id="42b171e2-d9f5-0917-f123-c4140485a072" class="panel space-bottom">
            <div id="roadmap" class="panel-body">
              <div class="space-bottom">
                <h1 class="space-bottom-extra-small text-primary-1">Bot Battles +Shop</h1>
                <div class="card-heading text-gray-4">Early September</div>
              </div>
              <div><span class="text-white"><strong>Basic Play to Earn browser game</strong></span> where you lead your bot army to fight other Bots and get <span class="text-white">$BBT token</span> for each victory. You may spend these tokens in Bot Battles Shop for purchasing shields and other perks that will make your bot more likely to win!<br>Level up for each 5th victory. After reaching level 10 your Bots will get opportunity to win one of <span class="text-white">300 </span><span class="text-white">UniBots </span>for you!</div>
            </div>
          </div>
          <div data-w-id="0b8e3388-cd3f-a983-3d4b-561b55fa818c" class="panel">
            <div id="roadmap" class="panel-body">
              <div class="space-bottom">
                <h1 class="space-bottom-extra-small text-primary-1">$BBT liquidity pool launch</h1>
                <div class="card-heading text-gray-4">Mid September</div>
              </div>
              <div>Trade your tokens received in fair bloody battles!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="space-bottom-large wf-section">
    <div class="container fadeup w-container">
      <div class="center-content">
        <h3 class="display-heading-5">More to come</h3>
        <div class="text-lead space-bottom">This is just a start and we&#x27;re looking forward to grow big.<br>Join our community and rock with us!<span class="text-primary-3"></span></div>
        <div class="social-list">
          <a href="https://twitter.com/BBBotsNFT" target="_blank" class="social-link-item w-inline-block"><img src="images/twitter.svg" width="60" alt=""></a>
          <a href="https://discord.gg/stUqfHPt"  target="_blank" class="social-link-item w-inline-block"><img src="images/discord_logo.png" width="60" alt=""></a>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="footer wf-section">
    <div class="container">
      <div class="panel">
        <div class="panel-body">
          <div class="footer-1-bottom-row center-content">
            <div class="text-small">Baby Battle Bots community<a href="https://www.webflow.com/" target="_blank"></a>
            </div>
            <div class="social-list">
              <a href="https://twitter.com/BBBotsNFT" target="_blank" class="social-link-item w-inline-block"><img src="images/twitter.svg" width="60" alt=""></a>
              <a href="https://discord.com/stUqfHPt" target="_blank" class="social-link-item w-inline-block"><img src="images/discord_logo.png" width="60" alt=""></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>

export default {
  name: "Home",
  components: {
  },
  methods: {
    mintBot() {
      this.$store.dispatch('mintBot', this.botsToMint);
    },
  },
  data() {
    return {
      botCount: 0,
      botsToMint: 1 
    };
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
