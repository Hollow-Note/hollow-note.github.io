<template>
  <div class="hn-hero">
    <v-img class="background-image" src="/images/Hero.jpg" cover />
    <div class="hn-container">
      <v-row>
        <div class="hn-hero-content">
          <v-card class="hn-intro-content" max-width="800">
            <nuxt-content :document="content" />
          </v-card>
        </div>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "hn-hero",
  props: {
    content: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.hn-hero {
  position: relative;
  height: 520px;
  margin-bottom: 2rem;

  &-content {
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 1;
  }
  .v-card {
    padding: 2rem;
  }
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
