<template>
  <v-footer class="hn-footer">
    <v-container>
      <v-row>
        <v-col>
          <div class="hn-footer-body">
            <hn-logo />
            <div class="hn-footer-menu">
              <div class="hn-footer-item" v-for="(link, i) in links" :key="i">
                <span class="link-title" v-text="link.title" />
                <a
                  class="link-url"
                  v-text="link.displayUrl"
                  :href="link.url"
                  target="_blank"
                />
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <span
            >&copy; {{ new Date().getFullYear() }} Hollow Note. All rights
            reserved.</span
          >
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "hn-footer",
  data() {
    return {
      links: [
        {
          title: "Visit Our Shop",
          displayUrl: "etsy.com/hollow-note",
          url: ""
        },
        {
          title: "Contact Us",
          displayUrl: "hello@hollow-note.com",
          url: "mailto:hello@hollow-note.com"
        },
        {
          title: "Follow Us",
          displayUrl: "instagram.com/hollow-note",
          url: "https://instagram.com/hollow-note"
        }
      ]
    };
  },
  beforeMount() {
    this.links[0].url = this.$store.state.storeLink;
  }
};
</script>

<style lang="scss" scoped>
.hn-footer {
  padding: 2rem;
  &-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  &-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  &-item {
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
  }
}
</style>
