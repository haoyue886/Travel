<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-fanhui back-icon"></div>
    </div>
    <div class="header-input"><span class="iconfont icon-sousuo"></span>输入城市/景点/游玩主题</div>
    <div class="header-right">城市<span class="iconfont icon-xiajiantou arrow-icon"></span></div>
  </div>
</template>

<script>
export default {
name:'HomeHeader',
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
.header
  display: flex
  line-height: .86rem
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
    width: 1.24rem
    float: right
    text-align: center
    .arrow-icon
      font-size:.24rem


</style>