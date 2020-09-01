<template>
  <div class="header">
    <div class="header-left">
      <i v-ripple :class="isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="collApse"></i>
    </div>
    <div class="header-comont">
      后&nbsp;&nbsp;台&nbsp;&nbsp;模&nbsp;&nbsp;板&nbsp;&nbsp;demo&nbsp;&nbsp;展&nbsp;&nbsp;示
    </div>
    <div class="header-right">
      <!-- 全屏展示 -->
      <Screenfull />

      <div class="header-right-personal">
        <el-dropdown>
          <span class="el-dropdown-link">
            <img src="@/assets/logo.jpg" alt="" />
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="loginOut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"
import Screenfull from "@/compoments/screenfull"
export default {
  components: {
    Screenfull,
  },
  computed: {
    // 侧边栏展示隐藏的数据
    ...mapState({
      isCollapse: (state) => state.home.isCollapse,
    }),
  },
  methods: {
    // 侧边栏展示隐藏
    ...mapMutations(["setCollapse"]),
    collApse () {
      this.setCollapse()
    },
    // 退出登录
    loginOut () {
      this.$confirm("是否退出?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$router.push("login")
          this.$message({
            type: "success",
            message: "退出成功!",
          })
        })
        .catch(() => { })
    },
  },
}
</script>

<style lang="scss" scope>
.header {
  display: flex;

  .header-left {
    padding-left: 10px;
    i {
      font-size: 30px;
      vertical-align: middle;
    }
  }
  .header-comont {
    flex: 1;
    text-align: center;
    line-height: 50px;
    font-weight: 700;
    font-size: 26px;
    font-family: cursive;
  }
  .header-right {
    width: 150px;
    padding-right: 20px;
    text-align: center;
    display: flex;

    div {
      flex: 1;
    }

    .header-right-screen {
      height: 100%;

      img {
        vertical-align: middle;
        width: 22px;
        height: 22px;
      }
    }
    .header-right-international {
      img {
        width: 22px;
        height: 22px;
        vertical-align: middle;
      }
    }
    .header-right-personal {
      img {
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
    }
  }
}
</style>
