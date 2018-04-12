<template>
  <div>
    <h1>The User page</h1>
    <hr>
    <button class="btn btn-primary" @click="goHome">Go to Home</button>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push({
        path: '/'
      });
    }
  }
};
</script>

<style>

</style>
