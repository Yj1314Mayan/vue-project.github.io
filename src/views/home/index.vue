<template>
	<el-container>
		<!-- 左侧侧边栏 -->
		<el-aside :width="isCollapse ? '210px' : '65px'">
			<elMenu ref="elMenu" :isCollapse="isCollapse"></elMenu>
		</el-aside>
		<!-- 内容区域 -->
		<el-container>
			<!-- 头部 -->
			<el-header>
				<Header ref="Header"></Header>
			</el-header>
			<!-- 主体 -->
			<el-main>Main</el-main>
		</el-container>
	</el-container>
</template>

<script>
import elMenu from "@/views/Home/components/el-menu.vue"
import Header from "@/views/Home/components/el-header.vue"
import { mapState } from "vuex"
export default {
	components: {
		elMenu,
		Header
	},
	computed: {
		...mapState({
			isCollapse: state => state.home.isCollapse
		})
	}
}
</script>

<style>
.el-container {
	width: 100%;
	height: 100%;
}
.el-main {
	background-color: #f0f2f5;
}
.el-header {
	height: 50px !important;
	line-height: 50px;
	padding: 0;
}
</style>
