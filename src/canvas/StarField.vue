<template>
  
</template>

<script>
export default {
  name: 'star-field',
  data() {
    return {};
  },
  props: {
    screenSize: Number,
    size: Number
  },
  mounted() {
    var vm = this;
    setInterval(() => {
      vm.move(this.size);
    }, 100);
  },
  methods: {
      move(size) {
          
      }
  }
};
</script>

<style>

</style>
