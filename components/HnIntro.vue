<template>
  <div class="hn-intro">
    <v-container>
      <v-row>
        <v-card class="hn-intro-content" max-width="720">
          <nuxt-content :document="content" />
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
