<template>
  <div class="hn-about">
    <div class="hn-container">
      <v-row>
        <v-card class="hn-about-content" max-width="800" elevation="0">
          <nuxt-content :document="content" />
        </v-card>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "hn-about",
  props: {
    content: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.hn-about {
  padding: 2rem 0 6rem;
  &-content {
    padding: 2rem;
    text-align: center;
  }
}
</style>
