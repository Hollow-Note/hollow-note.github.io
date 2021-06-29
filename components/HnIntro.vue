<template>
  <div class="hn-intro">
    <v-container>
      <v-row>
        <v-card class="hn-intro-content" max-width="800">
          <nuxt-content :document="content" />
          <v-btn
            v-show="$vuetify.breakpoint.mdAndUp"
            :href="storeLink"
            target="_blank"
          >
            Visit our Etsy Shop
          </v-btn>
        </v-card>
      </v-row>
    </v-container>
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
