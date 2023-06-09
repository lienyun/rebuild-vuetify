<template>
  <h1>
    套件：highcharts-vue
  </h1>
  <div id="app"><chart></chart></div>
</template>

<script>
import Chart from "../components/Chart.vue";

export default {
  name: "app",
  components: {
    chart: Chart
  },
  methods: {
    handler() {
      var args = arguments;
      for (var arg of args) {
        if (arg instanceof Function) {
          arg();
        }
      }
    }
  }
};
</script>
