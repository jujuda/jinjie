<template>
 
     <div class="wrap" v-if="showWrap" :class="showContent ?'fadein':'fadeout'"></div>
 
</template>
<style scoped>
.wrap{
    width: 3rem;
    height: 0.5rem;
    position: absolute; 
    font-size: 0.24rem;
    line-height: 0.48rem;
    text-align: center;
    left:50%;
    top:7%; 
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



