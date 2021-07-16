<template>
  <div class="hn-hero">
    <div class="background-image">
      <v-img src="/images/hero-hn.png" contain height="400" />
    </div>
    <div class="hn-container">
      <v-row>
        <v-col>
          <div class="hn-hero-content">
            <v-card class="hn-intro-content" max-width="800">
              <nuxt-content :document="content" />
            </v-card>
          </div>
        </v-col>
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
  height: 580px;
  margin-bottom: 8rem;
  background-color: #96cfff;
  border-bottom: 2px solid black;

  &-content {
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -6rem;
    right: 0;
    left: 0;
    text-align: center;
    z-index: 1;
  }
  .v-row {
    align-items: flex-end;
    position: relative;
  }
  .v-card {
    padding: 2rem;
    border: 2px solid black;
  }
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 3rem;
    .v-image {
      flex-grow: 0;
    }
  }
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
