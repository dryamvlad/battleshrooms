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
        <h1 class="text-xl-h4">Baby Battle Bots soming soon</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import logo from '../assets/bbb.jpg'

export default {
  name: 'HelloWorld',

  data: () => ({
    logo
  })
}
</script>
