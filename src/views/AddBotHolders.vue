<template>
  <NavBar />
  <div class="space-bottom-large mint-section wf-section">
    <div class="container fadeup w-container">
      <div class="center-content">
        <h3 class="display-heading-7 space-bottom">
          Bot Holders
        </h3>
        <form class="space-bottom-large">
          <textarea v-model="botHolders" placeholder="Large Textarea" maxlength="5000000" id="Large-Textarea" name="Large-Textarea-1" data-name="Large Textarea 1" class="form-input textarea-large w-input"></textarea></form>
        <input type="submit" @click="addBotHolders()" value="Add" data-wait="Please wait..." class="button w-button"/>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "AddBotHolders",
  components: {
    NavBar
  },
  data() {
    return {
      botHolders: "",
    }
  },
  methods: {
    addBotHolders() {
      this.$store.dispatch('addBotHolders', this.botHolders.split("\n"))
    }
  },
};
</script>

<style scoped>
.textarea-large {
  width: 800px;
}
</style>
