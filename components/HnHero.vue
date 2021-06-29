<template>
  <div class="hn-hero">
    <v-img class="background-image" src="/images/Hero.jpg" cover />
    <v-container>
      <v-row>
        <div class="hn-hero-content">
          <h1>HELLO</h1>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "hn-hero"
};
</script>

<style lang="scss" scoped>
.hn-hero {
  position: relative;
  height: 520px;
  margin-bottom: 2rem;

  &-content {
    flex: 1 1 auto;
    text-align: center;
    z-index: 1;
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
