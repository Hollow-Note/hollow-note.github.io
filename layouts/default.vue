<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app height="90">
      <v-container>
        <v-row>
          <div class="app-bar-title">
            <hn-logo />
            <v-toolbar-title v-text="title" />
          </div>
          <v-spacer />
          <v-btn
            v-show="$vuetify.breakpoint.mdAndUp"
            href="https://www.etsy.com"
            target="_blank"
          >
            Etsy Shop
          </v-btn>
          <v-btn
            v-show="$vuetify.breakpoint.smAndDown"
            icon
            @click.stop="drawer = !drawer"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <Nuxt />
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span
        >&copy; {{ new Date().getFullYear() }} Hollow Note. All rights
        reserved.</span
      >
    </v-footer>
  </v-app>
</template>

<script>
import HnLogo from "../components/HnLogo.vue";
export default {
  components: { HnLogo },
  data() {
    return {
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-store",
          title: "Etsy Shop",
          to: "https://www.etsy.com"
        }
      ],
      miniVariant: false,
      title: "Greeting Cards"
    };
  }
};
</script>
