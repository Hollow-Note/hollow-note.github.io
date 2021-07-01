<template>
  <div class="hn-contact-form">
    <v-form
      class="contact-form"
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
      name="Contact Form"
    >
      <v-text-field
        background-color="white"
        v-model="email"
        :rules="emailRules"
        label="Email (optional)"
        outlined
        dense
        hint="If the card becomes available, we’ll let you know."
        persistent-hint
      ></v-text-field>
      <v-textarea
        background-color="white"
        outlined
        name="description"
        v-model="description"
        label="Description"
      ></v-textarea>
      <!-- 99inbound's honeypot field -->
      <div style="position: absolute; left: -5000px;">
        <input
          type="checkbox"
          name="thunderous_salmon_cracked_laboratory"
          value="1"
          tabindex="-1"
          autocomplete="no"
        />
      </div>
      <v-btn :disabled="!valid" color="mana_blue" @click="submit" tile>
        Submit idea
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "hn-contact-form",
  data() {
    return {
      valid: true,
      email: "",
      description: "",
      emailRules: [
        // v => !!v || "Email is required",
        v => /.+@.+\..+/.test(v) || "Email must be valid"
      ],
      lazy: false,
      text: ""
    };
  },
  methods: {
    submit() {
      axios({
        method: "post",
        url: "https://app.99inbound.com/api/e/5YV8aVdJ",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        data: {
          email: this.email,
          description: this.description
        }
      }).then(response => {
        console.log(response);
      });
    }
  }
};
</script>

<style></style>
