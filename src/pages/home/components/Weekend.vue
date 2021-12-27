<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    props:{
      list:Array
    },
    data() {
      return {
            List:[
            {
                id:'001',
                imgUrl:'https://img0.baidu.com/it/u=4089622531,494058583&fm=26&fmt=auto',
                title:'故宫博物院',
                desc:'建立于1925年，是在明朝、清朝两代皇宫及其收藏的基础上建立起来的中国综合性博物馆'
            },
                {
                id:'002',
                imgUrl:'https://img0.baidu.com/it/u=4089622531,494058583&fm=26&fmt=auto',
                title:'故宫博物院',
                desc:'建立于1925年，是在明朝、清朝两代皇宫及其收藏的基础上建立起来的中国综合性博物馆'
            },
                {
                id:'003',
                imgUrl:'https://img0.baidu.com/it/u=4089622531,494058583&fm=26&fmt=auto',
                title:'故宫博物院',
                desc:'建立于1925年，是在明朝、清朝两代皇宫及其收藏的基础上建立起来的中国综合性博物馆'
            }
        ]
      }
    },
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
