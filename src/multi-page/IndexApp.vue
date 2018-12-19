<template>
    <div>
        这是主页
        <a @click="name" href="javascript:void(0);">点击进入新页面</a>
    </div>
</template>

<script>
export default {
  methods: {
    name () {
      window.location = 'http://localhost:1111/subpage.html'
    }
  }
}
</script>

<style scoped>

</style>
