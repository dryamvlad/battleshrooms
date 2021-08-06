<template>
  <div class="space-bottom-large wf-section">
    <div class="container fadeup w-container">
      <div class="panel">
        <div class="panel-body">
            <div class="center-content">
            <h3 class="display-heading-7 coming-soon space-bottom-extra-small">
              1st generation coming soon
            </h3>
            <div class="text-lead space-bottom-extra-small">
              Join our
              <a href="https://discord.gg/rbquJjMzau" target="_blank">Discord</a> and
              <a href="https://twitter.com/BBBotsNFT" target="_blank">Twitter </a
              >for announcements and giveaways<span class="text-primary-3"></span>
            </div>
            <div class="text-lead">Price: <span class="text-primary-2">{{$store.state.price}} eth</span></div>
          </div>
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
};
</script>