<template>
  <div class="home-tab">
    <div class="home-tab-left">
      <i class="el-icon-caret-left" v-ripple></i>
    </div>
    <div class="home-tab-content">
      <div class="home-tab-content-tag">
        <span :class="`${ menusAtive == 0 ? 'ative' : ''}`" @click="setMenusAtive(0, 'home')">首页 </span>
        <span :class="`${ (index + 1) == menusAtive ? 'ative' : ''}`" v-for="(item, index) in menus" :key="index" @click="setMenusAtive((index + 1), item)">{{item}}
          <i class="el-icon-close" @click="removeMenu(item)" />
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
import { mapState, mapMutations } from "vuex"
export default {
  computed: {
    ...mapState({
      menus: (state) => state.router.menus,
      menusAtive: (state) => state.router.menusAtive,
    }),
  },
  methods: {
    ...mapMutations(['removeMenus', 'setmenusAtive']),
    removeMenu (item) {
      this.removeMenus(item)
      if (this.menus.length < 2) {
        this.$router.push('home')
        this.setmenusAtive(0)
        console.log('------------');
      } else {
        let path = this.menus[this.menus.length - 1]
        this.setmenusAtive(this.menus.length)
        this.$router.push(path)
        console.log('11111111111111');
      }
    },
    // 切换显示时候使用
    setMenusAtive (val, path) {
      this.setmenusAtive(val)
      this.$router.push(path)
    }
  },
  data () {
    return {}
  }
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
