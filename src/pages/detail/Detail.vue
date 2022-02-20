<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List'
export default {
name:'Detail',
data() {
  return {
    list:[
      {title:'学生票',
      children:[
        {title:'徐小夕',
        children:[
           {title:'发发发'}
        ]
        }
      ]
      },
      {title:'成人票'},
      {title:'单身贵族票'}
    ]
  }
},
components:{
    DetailBanner,
    DetailHeader,
    DetailList
}
}
</script>

<style lang="stylus" scoped>
.content
 height: 40rem
</style>