<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
          
        loop: true
      },
      swiperList:[
        {
          id:'0001',
          imgUrl:'http://phototj.photo.store.qq.com/psc?/V54AHwsr185Mss2KCUYC01On1q11plKi/45NBuzDIW489QBoVep5mcXDZMFIUzSq8f3e8PrEi5qRHO6bRV.Ovsviu*Gs5yo1guaR4zizUHyWdyT6HHoc2BitY8PXmT46Jce0kkkzfbKE!/b&bo=VQhABkAOsAoBOfE!&rf=viewer_4'
        },
        {
          id:'0002',
          imgUrl:'http://photogz.photo.store.qq.com/psc?/V12cn1dt2bUGUB/ruAMsa53pVQWN7FLK88i5tBNyfGn2pH8ybglX85UagbX.a9J05mLQ1FoYToh5FieuhuFbX3AjJ*GKFf*h5VnE2m5aAnSAfSg*VQopFcF.VQ!/b&bo=VQg*BlUIPwYRECc!&rf=mood_app'
        }
      ]
    }
  },

}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
