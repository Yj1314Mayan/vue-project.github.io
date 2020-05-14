<template>
  <div>
    <div class="header" @click="toHome">
      <img :class="!isCollapse ? 'img' : ''" src="@/assets/logo.jpg" alt="" />
    </div>
    <el-menu
      :default-active="menusAtive"
      :collapse-transition="false"
      class="el-menu-vertical-demo"
      background-color="rgb(48, 65, 86)"
      text-color="rgb(191, 203, 217)"
      router
      :collapse="!isCollapse"
      @select="setMenu"
    >
      <el-menu-item index="Table">
        <i class="el-icon-s-order"></i>
        <span slot="title">Table</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">组件</span>
        </template>
        <el-menu-item index="quillEditor">富文本编辑器</el-menu-item>
      </el-submenu>
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
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      isCollapse: (state) => state.home.isCollapse,
      menus: (state) => state.router.menus,
      menusAtive: (state) => state.router.menusAtive,
    }),
  },
  methods: {
    ...mapMutations(["setMenus", "setmenusAtive"]),
    setMenu(index, indexPath) {
      this.setMenus({
        name: index,
        path: indexPath[indexPath.length - 1],
      });
      this.setmenusAtive(index);
    },
    toHome() {
      this.$router.push("home");
      this.setmenusAtive("home");
    },
  },
};
</script>

<style lang="scss" scope>
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
