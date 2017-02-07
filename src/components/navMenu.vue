<template>
  <div>
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <router-link active-class="is-active" tag="li" class="el-menu-item" index="1" to="/" exact>Home</router-link>
      <router-link active-class="is-active" tag="li" class="el-menu-item" index="2" to="/display">Results</router-link>
      <router-link active-class="is-active" tag="li" class="el-menu-item" index="3" to="/map">Map</router-link>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss">
  .el-menu-item {
    font-weight: bold;
  }
</style>
