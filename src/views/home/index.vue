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
				<div class="main">
					<transition name="fade-transform" mode="out-in">
						<keep-alive>
							<router-view></router-view>
						</keep-alive>
					</transition>
				</div>
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
		elTab,
	},
	computed: {
		...mapState({
			isCollapse: (state) => state.home.isCollapse,
		}),
	},
}
</script>

<style scope>
.el-container {
	width: 100%;
	height: 100%;
}
.el-main {
	padding: 40px 0 0 0;
	background-color: #f0f2f5;
	position: relative;
}
.el-header {
	height: 50px !important;
	line-height: 50px;
	padding: 0;
}
.main {
	background-color: #fff;
	width: 100%;
	height: 100%;
	padding: 40px;
	box-sizing: border-box;
}
.fade-transform-leave-active,
.fade-transform-enter-active {
	transition: all 0.5s;
}

.fade-transform-enter {
	opacity: 0;
	transform: translateX(-30px);
}

.fade-transform-leave-to {
	opacity: 0;
	transform: translateX(30px);
}
</style>
