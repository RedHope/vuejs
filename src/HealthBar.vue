<style scoped>
  .health-bar{
    width: 300px
  }
</style>

<template>
  <div class="health-bar">
      <div :style="style">
        &nbsp;
      </div>
  </div>
</template>

<<script>
export default {
  name: 'health-bar',
  data() {
    return {
      currentHealth: 100,
      id: ''
    }
  },
  computed: {
    style() {
      backgroundColor: 'green',
      width: this.currentHealth
    }
  }
}
</script>
