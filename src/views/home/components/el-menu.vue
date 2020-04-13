<template>
  <div>
    <div class="header">
      <img :class="!isCollapse ? 'img' : ''" src="@/assets/logo.jpg" alt="">
    </div>
    <el-menu default-active="1-1" :collapse-transition="false" class="el-menu-vertical-demo" background-color="rgb(48, 65, 86)" text-color="rgb(191, 203, 217)" @open="handleOpen" @close="handleClose"
      :collapse="!isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-menu-item index="1-4">选项1</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      isCollapse: state => state.home.isCollapse
    })
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss">
.el-aside {
  background-color: rgb(48, 65, 86);
  overflow: hidden;
  transition: all 0.3s;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    img {
      width: 80px;
      height: 80px;
      transition: all 0.3s;
    }
    .img {
      width: 30px;
      height: 30px;
    }
  }
}
.el-menu-item:focus,
.el-menu-item:hover {
  background-color: #001528 !important;
}
#app .el-aside .el-menu .el-submenu__title:hover,
#app .el-aside .el-menu .submenu-title-noDropdown:hover {
  background-color: #263445 !important;
}
#app .el-aside .el-submenu .el-menu-item,
#app .el-aside .nest-menu .el-submenu > .el-submenu__title {
  min-width: 210px !important;
  background-color: #1f2d3d !important;
}
#app .el-aside .el-submenu .el-menu-item:hover,
#app .el-aside .nest-menu .el-submenu > .el-submenu__title:hover {
  background-color: #001528 !important;
}
#app .el-aside .el-menu {
  border: none !important;
}
#app .el-aside .el-menu .el-menu-item:focus,
#app .el-aside .el-menu .el-menu-item:hover {
  background-color: #001528 !important;
}
</style>