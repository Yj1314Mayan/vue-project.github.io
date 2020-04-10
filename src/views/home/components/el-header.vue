<template>
  <div class="header">
    <div class="header-left">
      <i :class="isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="collApse"></i>
    </div>
    <div class="header-comont"></div>
    <div class="header-right"></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      isCollapse: state => state.home.isCollapse
    })
  },
  methods: {
    ...mapMutations(['setCollapse']),
    collApse () {
      this.setCollapse()
    }
  }
}
</script>

<style lang="scss">
.header {
  display: flex;

  .header-left {
    padding-left: 10px;
    i {
      font-size: 30px;
      vertical-align: middle;
    }
  }
}
</style>