<template>
  <div class="quote-counter">
      <h3 class="quote-counter__header">Quotes Added</h3>
      <div class="quote-counter__progress-bar-container progress">
          <div class="quote-counter__progress-bar progress-bar" :style="classObject" v-if="currentCount">
              <span class="quote-counter__progress">{{currentCount}} / {{maxCount}}</span>
          </div>
      </div>  
  </div>
</template>

<script>
export default {
  name: 'quote-counter',
  props: {
    currentCount: Number,
    maxCount: Number
  },
  computed: {
    classObject() {
      return {
        width: this.currentCount / this.maxCount * 100 + '%' || '40px'
      };
    }
  }
};
</script>

<style scoped lang="scss">
.quote-counter {
  &__header {
      font-weight: 600;
  }

  &__progress-bar-container {
    height: 20px;
    border-radius: 5px;
    background-color: lightgray;
    width: 100%;
  }

  &__progress-bar {
    background-color: #563d7c;
    color: whitesmoke;
    transition: width 500ms
  }
}
</style>
