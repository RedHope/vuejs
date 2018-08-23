<template>
  <div class="quotes">
      <div v-for="(quote, index) in quotes" :key="index" class="quotes__quote" @click="removeQuote(index) ">{{quote}}</div>
  </div>
</template>

<script>
export default {
  name: 'quotes',
  props: {
    quotes: Array
  },
  methods: {
    removeQuote(index) {
      this.$emit('remove', index);
    }
  }
};
</script>

<style scoped lang="scss">
.quotes {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;

  &__quote {
    font-family: 'Arizonia';
    font-size: 30px;
    font-weight: 600;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 10px;
    margin: 15px;
    min-height: 75px;
    min-width: calc(10%);
  }

  &__quote:hover {
    cursor: pointer;
    background-color: lightcoral;
  }
}
</style>
