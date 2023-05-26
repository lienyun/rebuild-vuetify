// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { md2 } from "vuetify/blueprints";

// Vuetify
import { createVuetify } from "vuetify";



export default createVuetify({
    blueprint: md2,

    theme: {
      defaultTheme: 'light',
    }
});
