<template>
  <div class="quotes-input">
      <h4 class="quotes-input__header">Quote</h4>
      <textarea class="quotes-input__text" @input="updateInput" v-model="input" ref="textarea"></textarea>
      <button class="btn btn-primary quotes-input__button" @click="updateQuote">Add Quote</button>
  </div>
</template>

<script>
export default {
  name: 'quotes-input',
  data() {
    return {
      input: ''
    };
  },
  methods: {
    updateInput(value) {
      this.$emit('input', value);
    },
    updateQuote() {
      this.$emit('quote', this.input);
      this.$refs.textarea.focus();
    }
  }
};
</script>

<style scoped lang="scss">
.quotes-input {
  align-self: center;
  margin-top: 15px;
  display: flex;
  flex-direction: column;

  &__text {
    width: 500px;
    border: 1px solid lightgrey;
    border-radius: 5px;
    min-height: 100px;
  }

  &__header {
    font-weight: 600;
  }

  &__button {
    max-width: 100px;
    margin-top: 10px;
    align-self: center;
  }
}
</style>
