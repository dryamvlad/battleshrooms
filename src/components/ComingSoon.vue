<template>
  <div class="space-bottom-large wf-section">
    <div class="container fadeup w-container">
      <div class="panel space-bottom-large">
        <div class="panel-body">
            <div class="center-content">
              <h3 class="display-heading-7 coming-soon space-bottom-extra-small">
                1st generation coming August 25 6pm ET
              </h3>
              <div class="text-lead space-bottom-extra-small">
                  <vue-countdown :time="time" :interval="100" v-slot="{ hours, minutes, seconds }">
                    <h2 class="space-bottom-extra-small text-gray-4">Dropping in {{ hours }}h : {{ minutes }}m : {{ seconds }}s</h2>
                  </vue-countdown>
                  <div class="text-lead">Price: <span class="text-primary-2">{{$store.state.price}} eth</span></div>
              </div>
          </div>
        </div>
      </div>
      <div class="center-content">
        <div class="text-lead">
          Join our <a href="https://discord.gg/HFVAnBS9qA" target="_blank">Discord</a> and <a href="https://twitter.com/BBBotsNFT" target="_blank">Twitter </a>for announcements and giveaways<span class="text-primary-3"></span>      
        </div>
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
    const dropTime = new Date("Wed Aug 25 2021 22:00:00 GMT+0000");

    return {
      time: dropTime - now,
    };
  },
};
</script>