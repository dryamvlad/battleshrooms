<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="logo" class="my-2" height="400" />
        <br />
        <br />
        <h2 class="text-md-h1">Baby Battle Bots</h2>
        <br />
        <wallet-address />
        <input v-model="message" placeholder="0">
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import logo from "../assets/bbb.png";
import WalletAddress from "../components/WalletAddress.vue";

export default {
  name: "Home",
  components: {
    WalletAddress,
  },
  methods: {
    mintBot() {},
  },
  data() {
    return {
      logo: logo,
      botCount: 0,
    };
  },
};
</script>

<style scoped>
.centered {
  position: fixed; /* or absolute */
  top: 50%;
  left: 50%;
}
</style>
