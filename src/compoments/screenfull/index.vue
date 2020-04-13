<template>
	<div class="header-right-screen" @click="toScreenfull">
		<img src="@/assets/screen.jpg" alt="" />
	</div>
</template>

<script>
import screenfull from "screenfull"
export default {
	methods: {
		// 全屏显示切换
		toScreenfull() {
			if (!screenfull.isEnabled) {
				this.$message({
					message: "you browser can not work",
					type: "warning"
				})
				return false
			}
			screenfull.toggle()
		}
	}
}
</script>

<style></style>
