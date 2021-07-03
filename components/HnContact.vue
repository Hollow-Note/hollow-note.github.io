<template>
  <div class="hn-contact light_grey">
    <div class="hn-container">
      <v-row>
        <v-col>
          <div class="hn-contact-content">
            <nuxt-content :document="content" />
          </div>
        </v-col>
        <v-col>
          <hn-contact-form />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "hn-contact",
  props: {
    content: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.hn-contact {
  padding: 4rem 0 4rem;
  &-content {
    padding: 2rem;
  }
}
</style>
