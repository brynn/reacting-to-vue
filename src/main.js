import Vue from 'vue';
import './plugins/vuetify';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader
import colors from 'vuetify/es5/util/colors';

import App from './App.vue';

Vue.use(Vuetify, {
  theme: {
    accent: colors.blue.lighten2,
    error: colors.red.accent3,
  },
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
