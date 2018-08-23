<template>
  <div class="button text-center">
        <button class="btn btn-primary btn-lg"
            @click="validateAnswer">
            {{value}}
        </button>
  </div>
</template>

<script>
export default {
  name: 'answers-button',
  props: {
    value: String,
    isCorrect: Boolean
  },
  methods: {
    validateAnswer() {
      if (this.isCorrect) {
        this.$emit('correct', this.value);
      } else {
        alert('Try Again');
      }
    }
  }
};
</script>

<style>
.button {
  flex-basis: 45%;
  margin: 10px;
}
</style>
