<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: "App",

  components: {},
  methods: {

  },

  mounted() {
    this.$nextTick(function () {
      this.$store.dispatch("initWeb3", {vm: this});
    });
  },
};
</script>

