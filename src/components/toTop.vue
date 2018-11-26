<template>
    <div class="toTop">
        <div class="scroll" v-show="backTop">
            <div id="toTop" @click="toTop(step)"><img src="../assets/img/home_back.png" alt=""></div>
           <!-- <div id="toTop" @click="toBottom(step)"><img src="../assets/img/home_back.png" alt=""></div> -->
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            step:{   //此数据是控制动画快慢的
                type:Number,
                default:750 
            },
          backTop:{
              type:Boolean,
              default: false
          }
        },
        data(){
            return {
                isActive:false,
            }
        },
      mounted(){

      },
      methods:{
        toTop(i){
          if(this.$route.path=='/home'){
            this.$parent.parentsFu({backTop:true})
            return;
          }
          //参数i表示间隔的幅度大小，以此来控制速度
          document.documentElement.scrollTop-=i;
          if (document.documentElement.scrollTop>0) {
            var c=setTimeout(()=>this.toTop(i),16);
          }else {
            clearTimeout(c);
          }
        },
      },
      watch:{
          'backTop':function (val) {
            console.log(val)
          }
      }
    }
</script>
<style scoped>
    .scroll{
            position: fixed;
			width: 0.4rem;
			height: 0.4rem;
           right: 0.73rem;
           /* bottom: 2.1rem; */
           bottom: 0.9rem;
            cursor: pointer;
			z-index: 9999;
        }
.scroll img{
    width: 0.4rem;
	height: 0.4rem;
}

</style>
