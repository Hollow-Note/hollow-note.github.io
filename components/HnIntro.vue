<template>
  <div class="hn-intro">
    <div class="hn-container">
      <v-row>
        <v-card class="hn-intro-content" max-width="800" elevation="0">
          <nuxt-content :document="content" />
        </v-card>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "hn-intro",
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  computed: {
    storeLink() {
      return this.$store.state.storeLink;
    }
  }
};
</script>

<style lang="scss" scoped>
.hn-intro {
  padding: 4rem 0;
  &-content {
    padding: 2rem;
    text-align: center;
  }
}
</style>
