<template>
  <div id="app">
    <to-top></to-top>
    <router-view/>
  </div>
</template>

<script>
import home from './components/home'
import toTop from './components/toTop';
export default {
  name: 'App',
  components:{
    home,
    toTop
  }
}
</script>

<style>

</style>
