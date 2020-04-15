<template>
	<ECharts ref="chart1" :options="orgOptions" :auto-resize="true"></ECharts>
</template>

<script>
import ECharts from "vue-echarts"
import "echarts/lib/chart/line"
export default {
	name: "echarts",
	components: {
		ECharts,
	},
	data() {
		return {
			orgOptions: {},
		}
	},
	mounted() {
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
