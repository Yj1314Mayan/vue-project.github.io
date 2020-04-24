<template>
	<div class="home-tab">
		<div class="home-tab-content" ref="wrapper">
			<div class="home-tab-content-tag" ref="cont">
				<span
					:class="`${menusAtive == 0 ? 'ative' : ''}`"
					@click="setAtive(0, 'home')"
					>首页
				</span>
				<span
					:class="`${index + 1 == menusAtive ? 'ative' : ''}`"
					v-for="(item, index) in menus"
					:key="index"
					@click="setAtive(index + 1, item)"
					>{{ item }}
					<i class="el-icon-close" @click.stop="removeMenu(item)" />
				</span>
			</div>
		</div>
		<div class="home-tab-delete">
			<el-dropdown size="small">
				<span class="el-dropdown-link">
					<i class="el-icon-circle-close"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>关闭当前</el-dropdown-item>
					<el-dropdown-item>关闭所有</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
import BScroll from "better-scroll"
import { mapState, mapMutations } from "vuex"
export default {
	computed: {
		...mapState({
			menus: (state) => state.router.menus,
			menusAtive: (state) => state.router.menusAtive,
		}),
	},
	methods: {
		...mapMutations(["removeMenus", "setmenusAtive"]),
		removeMenu(item) {
			this.removeMenus(item)
			if (this.menus.length < 2) {
				this.$router.push("home")
				this.setmenusAtive(0)
			} else {
				let path = this.menus[this.menus.length - 1]
				this.setmenusAtive(this.menus.length)
				this.$router.push(path)
			}
		},
		// 切换显示时候使用
		setAtive(val, path) {
			this.setmenusAtive(val)
			this.$router.push(path)
		},
		verScroll() {
			let width = this.menus.length + 1 * 180 // 动态计算出滚动区域的大小，前面已经说过了，产生滚动的原因是滚动区域宽度大于父盒子宽度
			this.$refs.cont.style.width = width + "px" // 修改滚动区域的宽度
			this.$nextTick(() => {
				if (!this.scroll) {
					this.scroll = new BScroll(this.$refs.wrapper, {
						startX: 0, // 配置的详细信息请参考better-scroll的官方文档，这里不再赘述
						click: true,
						scrollX: true,
						scrollY: false,
						eventPassthrough: "vertical",
					})
				} else {
					this.scroll.refresh() //如果dom结构发生改变调用该方法
				}
			})
		},
	},
	data() {
		return {}
	},
	mounted() {
		this.$nextTick(() => {
			let timer = setTimeout(() => {
				// 其实我也不想写这个定时器的，这相当于又嵌套了一层$nextTick，但是不这么写会失败
				if (timer) {
					clearTimeout(timer)
					this.verScroll()
				}
			}, 0)
		})
	},
}
</script>

<style lang="scss" scope>
.home-tab {
	position: absolute;
	left: 0;
	top: 5px;
	height: 30px;
	width: 100%;
	line-height: 30px;
	background-color: #fff;
	display: flex;

	.home-tab-left i,
	.home-tab-delete i,
	.home-tab-right i {
		width: 30px;
		height: 30px;
		line-height: 30px;
		text-align: center;
	}
	.home-tab-content {
		flex: 1;
		background-color: aliceblue;
		padding: 0 5px;
		overflow: hidden;
		margin: 0 20px;

		span {
			display: inline-block;
			padding: 0 22px 0 10px;
			box-sizing: border-box;
			height: 22px;
			line-height: 22px;
			font-size: 13px;
			border: 1px solid #409eff;
			border-radius: 4px;
			background-color: #fff;
			margin: 0 5px;
			position: relative;
			cursor: pointer;

			&:first-child {
				padding: 0 10px;
			}
			i {
				position: absolute;
				right: 3px;
				top: 3px;
				padding: 1px;
				line-height: 13px;
				&:hover {
					background-color: #409eff;
					color: #fff;
					border-radius: 50%;
				}
			}
		}
		.ative {
			background-color: #409eff;
			color: #fff;
		}
	}
	.home-tab-delete i {
		border-left: 1px solid #ccc;
	}
}
</style>
