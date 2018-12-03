<template>
 
     <div class="wrap" v-show="showWrap" :class="showContent ?'fadein':'fadeout'">{{text}}</div>
 
</template>
<style scoped>
.wrap{
    width: 2rem;
    height: 0.4rem;
    position: fixed; 
    font-size: 0.18rem;
    line-height: 0.36rem;
    text-align: center;
    left:50%;
    top: 40%; 
    background: rgba(0,0,0,.35); 
    padding: 10px;   
    border-radius: 5px; 
    transform: translate(-50%,-50%);    
    color:#fff;
  }
   .fadein {    animation: animate_in 0.25s;
  }  .fadeout {    animation: animate_out 0.25s;    opacity: 0;
  }
  @keyframes animate_in {
    0% {      opacity: 0;
    }
    100%{      opacity: 1;
    }
  }
  @keyframes animate_out {
    0% {      opacity: 1;
    }
    100%{      opacity: 0;
    }
  }
</style>
<script>
export default {
    data(){
        return{
            text:"",
            showWrap:true,
            showContent:"true"
        }
    }
}
</script>



