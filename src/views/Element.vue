<template lang="">
  <h1>Button</h1>
  <v-btn>Button</v-btn>
  <v-btn variant="outlined">outlined</v-btn>
  <v-btn variant="tonal">tonal</v-btn>
  <v-btn variant="text">text</v-btn>
  <v-btn variant="plain">plain</v-btn>
  <br />
  <v-btn density="compact">Compact Button</v-btn>
  <v-btn density="comfortable">Comfortable Button</v-btn>
  <v-btn density="default">Default Button</v-btn>
  <h1>radio</h1>
  <v-radio-group class="ml-5">
    <v-radio label="Radio 1" value="1"></v-radio>
    <v-radio label="Radio 2" value="2"></v-radio>
    <v-radio label="Radio 3" value="3"></v-radio>
  </v-radio-group>

  <h1>checkboxes</h1>
  <v-checkbox label="Checkbox" class="ml-5"></v-checkbox>

  <h1>switch</h1>
  <v-switch label="Switch" class="ml-5"></v-switch>

  <h1>Combobox</h1>
  <v-combobox
    label="Combobox"
    :items="[
      'California',
      'Colorado',
      'Florida',
      'Georgia',
      'Texas',
      'Wyoming',
    ]"
    class="ml-5"
  ></v-combobox>

  <h1>Form</h1>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        value => {
          if (value) return true

          return 'Name is requred.'
        },
        value => {
          if (value?.length <= 10) return true

          return 'Name must be less than 10 characters.'
        },
      ],
      email: '',
      emailRules: [
        value => {
          if (value) return true

          return 'E-mail is requred.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },
      ],
    }),
  }
</script>
<style scoped>
h1 {
  margin-left: 2rem;
  margin-top: 2rem;
}
button {
  margin-left: 2rem;
  margin-top: 2rem;
}

</style>

