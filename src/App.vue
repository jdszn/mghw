<template>
  
  <router-view></router-view>
</template>

<script>

// 同级路径，需要加./
export default {
  name: 'app',
  data () {
    return {
      msg: './src/assets/images/index.png'
    }
  }
}
</script>

<style>
	div{
		width:100%;
		overflow:auto;
	}
</style>
