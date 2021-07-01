<template>
  <div class="hn-card-section">
    <div class="hn-container">
      <v-row>
        <v-col>
          <div class="hn-card-group-title">
            <h3>Designs</h3>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="hn-container">
      <div class="hn-card-group">
        <v-row>
          <v-col
            class="hn-card-col"
            v-for="(card, i) in cards"
            :key="i"
            cols="12"
            md="6"
          >
            <v-card class="hn-card">
              <div class="hn-card-image">
                <img :src="card.image" :alt="card.title" />
              </div>
              <div class="hn-card-content">
                <nuxt-content :document="card" />
                <v-btn :href="card.link" target="_blank" text outlined>
                  Buy on Etsy
                </v-btn>
              </div>
              <!-- <a class="hn-card-link" :href="card.link" target="_blank" /> -->
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hn-card-group",
  props: {
    cards: {
      type: Array,
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
.hn-card-section {
  padding: 4rem 0 4rem;
  .hn-card-group-title {
    margin-bottom: 4rem;
    text-align: center;
  }
}
.hn-card-col {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.hn-card {
  width: 100%;
  display: flex;
  flex-direction: column;

  &-image img {
    width: 100%;
  }
  &-content {
    padding: 2rem;
  }
  .v-btn {
    margin-top: 2rem;
  }
}
</style>
