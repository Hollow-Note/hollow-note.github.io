<template>
  <v-stepper v-model="formStepper" class="hn-contact-form">
    <v-stepper-items>
      <v-stepper-content step="1">
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
            :rules="descriptionRules"
            label="Description"
            required
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
      </v-stepper-content>
      <v-stepper-content step="2">
        <div class="hn-contact-response">
          <h3 class="secondary--text">Thank you!</h3>
        </div>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
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
        v =>
          !v || // field not required
          /.+@.+\..+/.test(v) || // email format required
          "Email must be valid (E.g. hello@hollownote.com)"
      ],
      descriptionRules: [v => !!v || "This field is required."],
      lazy: false,
      text: "",
      formStepper: 1
    };
  },
  methods: {
    submit() {
      this.formStepper = 2;
      axios({
        method: "post",
        url: this.$config.formSecret,
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

<style lang="scss" scoped>
.v-stepper__wrapper {
  padding: 5px;
}
.v-input {
  margin-bottom: 1rem;
}
.hn-contact-form {
  padding: 2rem;
}
.hn-contact-response {
  text-align: center;
  padding: 4rem;
}
</style>
