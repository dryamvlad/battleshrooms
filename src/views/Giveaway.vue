<template>
  <div class="space-bottom-large mint-section wf-section">
    <div class="container fadeup w-container">
      <div class="center-content">
        <h3 class="display-heading-7 space-bottom">
          Winners
        </h3>
        <form class="space-bottom-large">
          <textarea v-model="supporters" placeholder="Large Textarea" maxlength="5000000" id="Large-Textarea" name="Large-Textarea-1" data-name="Large Textarea 1" class="form-input textarea-large w-input"></textarea></form>
        <input type="submit" @click="giveaway()" value="Add" data-wait="Please wait..." class="button w-button"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Giveaway",
  data() {
    return {
      supporters: "",
    }
  },
  methods: {
    giveaway() {
      this.$store.dispatch('giveaway', this.supporters.split("\n"))
    }
  },
};
</script>

<style scoped>
.textarea-large {
  width: 800px;
}
</style>
