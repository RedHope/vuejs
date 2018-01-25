<style scoped>
.health-bar {
  width: 300px;
  height: 30px;
  background-color: aliceblue;
}
</style>

<template>
  <div class="health-bar">
      <div :style="style">
       {{currentHealth}}
      </div>
  </div>
</template>

<script>
export default {
  name: 'health-bar',
  props: {
    id: {
      type: String,
      required: true,
      default: 'player-1'
    },
    currentHealth: {
      type: Number,
      required: true,
      default: 100
    }
  },
  data() {
    return {};
  },
  computed: {
    style() {
      return {
        backgroundColor: 'green',
        width: this.currentHealth + '%',
        textAlign: 'center',
        height: '100%',
        color: 'white',
        transition: 'width 500ms'
      };
    }
  }
};
</script>
