<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="logo"
          class="my-2"
          height="400"
        />
        <br>
        <br>
        <h2 class="text-md-h1 ">Baby Battle Bots</h2>
        <br>
        <h4 class="text-sm-h4">coming soon...</h4>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import logo from '../assets/bbb.png'

export default {
  name: 'HelloWorld',

  data: () => ({
    logo
  })
}
</script>

<style scoped>
.centered {
  position: fixed; /* or absolute */
  top: 50%;
  left: 50%;
}
</style>
