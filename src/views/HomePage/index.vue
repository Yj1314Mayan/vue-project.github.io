<template>
  <div class="home-page">
    <Echarts :orgOptions="orgOptions"></Echarts>
  </div>
</template>

<script>
import Echarts from "../../compoments/echarts"
export default {
  components: {
    Echarts,
  },
  data () {
    return {
      orgOptions: {},
    }
  },
  mounted () {
    this.orgOptions = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          smooth: true,
        },
      ],
    }
  },
}
</script>

<style></style>
