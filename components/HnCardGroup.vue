<template>
  <div class="hn-card-section">
    <v-container>
      <div class="hn-card-group">
        <div class="hn-card-group-title">
          <h3>Designs</h3>
        </div>
        <v-row>
          <v-col
            class="hn-card-col"
            v-for="(card, i) in cards"
            :key="i"
            cols="12"
            md="3"
          >
            <div class="hn-card">
              <div class="hn-card-image">
                <img :src="card.image" :alt="card.title" />
              </div>
              <div class="hn-card-content">
                <span v-text="card.title" />
                <span class="text--primary" v-text="card.cost" />
              </div>
              <a class="hn-card-link" :href="card.link" target="_blank" />
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
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
  }
};
</script>

<style lang="scss" scoped>
.hn-card-section {
  padding: 2rem 0 4rem;
  text-align: center;
  .hn-card-group-title {
    margin-bottom: 4rem;
  }
}
.hn-card-col {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.hn-card {
  margin-bottom: 2rem;
  position: relative;
  font-size: 20px;
  &:hover {
    background-color: lightgray;
  }
  &-link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    cursor: pointer;
  }
  span {
    display: block;
  }
}
</style>
