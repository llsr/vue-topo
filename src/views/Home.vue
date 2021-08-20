<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    版本号为：{{vuex_version}}----
    人名{{vuex_user.name}}
    <div @click="modifyVuex">点击改变版本号</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  created(){
    //   console.log(this.$getTime)
  },
  methods:{
    modifyVuex() {
        this.$u.vuex('vuex_version', '1.0.8');
    }
  }
}
</script>
<style>

</style>