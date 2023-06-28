// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { md3 } from "vuetify/blueprints";

// Vuetify
import { createVuetify } from "vuetify";
// import DayJsAdapter from '@/date-io/dayjs'

export default createVuetify({
    // date: {
    //   adapter: DayJsAdapter,
    // },
    blueprint: md3,
    theme: {
      defaultTheme: 'customDarkTheme',
      themes: {
        customLightTheme: {
          dark: false,
          colors: {
            linkColor: '#000000DE'
          }
        },
        customDarkTheme: {
          dark: true,
          colors: {
            linkColor: '#fff'
          }
        },
      }
    }
});
