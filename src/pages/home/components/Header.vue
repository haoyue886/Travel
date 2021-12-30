<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-fanhui back-icon"></div>
    </div>
    <div class="header-input"><span class="iconfont icon-sousuo"></span>输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">{{this.city}}<span class="iconfont icon-xiajiantou arrow-icon"></span></div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
name:'HomeHeader',
computed:{
  ...mapState(['city'])
}
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  display: flex
  line-height:$headerHeight
  background: $bgColor
  color: #fff
  .header-left
    width: 0.64rem
    float :left
    .back-icon
      text-align: center
      font-size:.4rem
  .header-input
    padding-left: .2rem
    flex: 1
    height: .64rem
    line-height: .64rem
    margin-top: .12rem
    margin-left: .2rem
    background: #fff
    border-radius: .1rem
    color: #ccc
  .header-right
    min-width: 1.04rem
    padding:0 .1rem
    color: #fff
    float: right
    text-align: center
    .arrow-icon
      font-size:.24rem


</style>