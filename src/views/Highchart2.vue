<template>
  <h1>套件：vue-highcharts</h1>
  <vue-highcharts
    type="chart"
    :options="chartOptions"
    :redrawOnUpdate="true"
    :oneToOneUpdate="false"
    :animateOnUpdate="true"
    @rendered="onRender"/>
    <p>highchart還是用這個套件吧</p>
</template>
<script>
  import VueHighcharts from 'vue3-highcharts';
  import { ref, computed } from 'vue'

  export default {
    name: 'SimpleChart',

    components: {
      VueHighcharts,
    },

    setup() {
      const seriesData = ref([25, 39, 30, 15]);
      const categories = ref(['Jun', 'Jul', 'Aug', 'Sept']);

      const chartOptions = computed(() => ({
        chart: {
          type: 'line',
        },
        title: {
          text: 'Number of project stars',
        },
        xAxis: {
          categories: categories.value,
        },
        yAxis: {
          title: {
            text: 'Number of stars',
          },
        },
        series: [{
          name: 'New project stars',
          data: seriesData.value,
        }],
      }));

      const onRender = () => {
        console.log('Chart rendered');
      };

      return {
        chartOptions,
        onRender,
      };
    },
  };
</script>