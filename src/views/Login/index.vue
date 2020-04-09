<template>
	<div class="login">
		<div class="login-from">
			<h3>后台管理系统</h3>
			<el-form
				:label-position="labelPosition"
				label-width="80px"
				:model="formLabelAlign"
			>
				<el-form-item label="账号">
					<el-input v-model="formLabelAlign.name"></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="formLabelAlign.region"></el-input>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			labelPosition: "right",
			formLabelAlign: {
				name: "",
				region: "",
				type: "",
			},
		}
	},
}
</script>

<style lang="scss">
.login {
	width: 100%;
	height: 100%;
	background: linear-gradient(
		to top right,
		rgb(56, 188, 240) 0%,
		skyblue 25%,
		rgb(5, 175, 241) 100%
	);
	position: relative;

	.login-from {
		width: 350px;
		height: 300px;
		padding: 30px;
		box-sizing: border-box;
		background-color: #000;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
}
</style>
