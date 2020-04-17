<template>
	<div class="home-tab">
		<div class="home-tab-left">
			<i class="el-icon-caret-left" v-ripple></i>
		</div>
		<div class="home-tab-content">
			<div class="home-tab-content-tag">
				<span class="ative">首页 </span>
				<span
					>首页
					<i class="el-icon-close" />
				</span>
			</div>
		</div>
		<div class="home-tab-right">
			<i class="el-icon-caret-right" v-ripple></i>
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
export default {}
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
