<template>
	<div
		ref="myChart"
		:style="{
			width: width ? width + 'px' : '300px',
			height: height ? height + 'px' : '300px',
		}"
	></div>
</template>

<script>
import echarts from "echarts"
export default {
	props: ["orgOptions", "width", "height"],
	name: "echarts",
	mounted() {
		this.drawLine()
	},
	methods: {
		drawLine() {
			// 基于准备好的dom，初始化echarts实例
			let myChart = echarts.init(this.$refs.myChart)
			// 绘制图表
			myChart.setOption(this.orgOptions)
		},
	},
}
</script>

<style></style>
