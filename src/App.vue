<template>
  <div id="app">
    <to-top :backTop="backTop" ></to-top>
    <router-view @childFu = "childFu" ref ="routerView"/>
  </div>
</template>

<script>
import home from './components/home'
import toTop from './components/toTop';
export default {
  name: 'App',
  data(){
    return{
      backTop:false,
    }

  },
  components:{
    home,
    toTop
  },
  methods:{

    childFu(val){
      if(val.backTopShow){
        this.backTop=true;
      }else{
        this.backTop=false;
      }
    },
    parentsFu(val){
      if(val.backTop){
        this.$refs.routerView.GotoSwiperPage(0)
      }
    },
  },

  created(){
    var vm=this;
    window.onscroll=function(){
      if (document.documentElement.scrollTop>200) {
        vm.backTop=true;
      }else {
        vm.backTop=false;
      }
    }
  }
}
</script>

<style>

</style>
