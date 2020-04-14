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
			<el-main>
				<!-- 路由缓存 -->
				<elTab></elTab>
				<!-- 页面入口 -->
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
import elMenu from "@/views/Home/components/el-menu.vue"
import Header from "@/views/Home/components/el-header.vue"
import elTab from "@/views/Home/components/el-tab.vue"
import { mapState } from "vuex"
export default {
	components: {
		elMenu,
		Header,
		elTab
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
	padding: 0;
	background-color: #f0f2f5;
}
.el-header {
	height: 50px !important;
	line-height: 50px;
	padding: 0;
}
</style>
