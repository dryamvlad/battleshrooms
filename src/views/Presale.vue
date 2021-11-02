<template>
  <NavBar />
  <div class="center-content space-bottom-large">
    <img src="images/Group-6.png" loading="lazy" width="300" sizes="(max-width: 479px) 95vw, (max-width: 767px) 92vw, (max-width: 991px) 600px, 599.984375px" srcset="images/Group-6-p-500.png 500w, images/Group-6-p-800.png 800w, images/Group-6-p-1080.png 1080w, images/Group-6.png 1416w">
  </div>
  <div class="space-bottom-large-2 wf-section" v-if="isPresalePaused">
    <img src="images/а.png" loading="lazy" sizes="100vw" srcset="images/а-p-500.png 500w, images/а-p-800.png 800w, images/а-p-1080.png 1080w, images/а.png 1142w" alt="" class="image-185-copy">
    <img src="images/3.png" loading="lazy" sizes="100vw" srcset="images/3-p-500.png 500w, images/3-p-800.png 800w, images/3-p-1080.png 1080w, images/3.png 1368w" alt="" class="image-185">
    <div class="container fadeup w-container">
      <div class="center-content">
        <h3 class="display-heading-7 coming-soon">PRESALE 3 NOV</h3>
        <div class="text-lead-copy space-bottom">
          <vue-countdown :time="time" :interval="100" v-slot="{ days, hours, minutes, seconds }">
            {{ days }} days {{ hours }}h : {{ minutes }}m : {{ seconds }}s
          </vue-countdown>
        </div>
        <div class="text-lead-copy space-bottom"><a href="https://dul755i8ncy.typeform.com/to/eDFVtluS" target="_blank" class="link">Whitelist</a> IS OPEN FOR FIRST 1000 ENTRIES<br><span class="text-primary-3"></span></div>
      </div>
    </div>
  </div>
  <EarlyMintForm v-else />
</template>

<script>
import NavBar from "../components/NavBar.vue";
import EarlyMintForm from "../components/EarlyMintForm.vue";

export default {
  name: "Presale",
  components: {
    NavBar,
    EarlyMintForm,
  },
  data() {
    const now = new Date();
    const dropTime = new Date("Nov 3 2021 19:00:00 GMT+0000");

    return {
      time: dropTime - now,
    };
  },
  methods: {},
  computed: {
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
.textarea-large {
  width: 800px;
}
</style>
