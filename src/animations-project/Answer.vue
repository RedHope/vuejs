<template>
  <div class="alert alert-success text-center">
      <h1>That's Correct</h1>
      <hr>
      <button class="btn btn-primary" @click="nextQuestion">
          Next-Question
      </button>
  </div>
</template>

<script>
export default {
  name: 'answer',
  methods: {
    nextQuestion() {
      this.$emit('next');
    }
  }
};
</script>

<style>

</style>
