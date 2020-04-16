<template>
  <ECharts ref="chart1" :options="orgOptions" :auto-resize="true"></ECharts>
</template>

<script>
import ECharts from "vue-echarts"
import "echarts/lib/chart/line"
export default {
  props: ['orgOptions'],
  name: "echarts",
  components: {
    ECharts,
  },
}
</script>

<style></style>
