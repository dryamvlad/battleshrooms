<template>
  <div class="space-bottom-large-2 wf-section"><img src="images/а.png" loading="lazy" sizes="100vw" srcset="images/а-p-500.png 500w, images/а-p-800.png 800w, images/а-p-1080.png 1080w, images/а.png 1142w" alt="" class="image-185-copy"><img src="images/3.png" loading="lazy" sizes="100vw" srcset="images/3-p-500.png 500w, images/3-p-800.png 800w, images/3-p-1080.png 1080w, images/3.png 1368w" alt="" class="image-185">
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
</template>

<script>
export default {
  name: "ComingSoon",
  components: {},
  methods: {
  },
  computed: {
  },
  data() {
    const now = new Date();
    const dropTime = new Date("Nov 3 2021 19:00:00 GMT+0000");

    return {
      time: dropTime - now,
    };
  },
};
</script>