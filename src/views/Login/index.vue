<template>
  <div class="login">
    <div class="login-from">
      <h1>后台管理系统</h1>
      <el-form :label-position="labelPosition" :rules="rules" ref="formLabelAlign" label-width="50px" :model="formLabelAlign">
        <el-form-item label="账号" prop="name">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="formLabelAlign.password"></el-input>
        </el-form-item>
      </el-form>
      <div class="login-btn">
        <el-button type="primary" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
export default {
  data () {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "admin",
        password: "888888",
      },
      rules: {
        name: [
          { required: true, message: "请输入账号", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
        ],
      },
    }
  },
  methods: {
    ...mapMutations(["removeMenus", "setmenusAtive", 'resetMenus']),
    login () {
      this.$refs.formLabelAlign.validate((valid) => {
        if (valid) {
          this.$router.push("home")
          this.resetMenus()
          this.setmenusAtive("home")
        }
      })
    },
  },
}
</script>

<style lang="scss" scope>
.login {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/th.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .login-from {
    width: 350px;
    padding: 30px;
    box-sizing: border-box;
    background-color: rgba(255, 240, 245, 0.1);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;

    h1 {
      font-size: 32px;
      text-align: center;
      margin-bottom: 20px;
    }
  }
  .login-btn {
    text-align: center;
    margin-top: 40px;

    .el-button {
      width: 150px;
    }
  }
}
</style>
