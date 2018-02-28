<template>
    <div class="container">
        <quote-counter :current-count="currentCount" :max-count="maxCount"/>
        <quotes-input @quote="updateQuote"/>
        <quotes :quotes="quotes" @remove="removeQuote"/>
        <switch v-model="dataSwitch"/>
    </div>
</template>

<script>
import QuoteCounter from './QuoteCounter.vue';
import QuotesInput from './QuotesInput.vue';
import Quotes from './Quotes.vue';
import Switch from './Switch.vue';
export default {
  name: 'app',
  components: {
    QuoteCounter,
    QuotesInput,
    Quotes,
    Switch
  },
  data() {
    return {
      currentCount: 0,
      maxCount: 10,
      quotes: [],
      error: false,
      dataSwitch: true
    };
  },
  methods: {
    updateQuote(value) {
      if (this.currentCount < 10) {
        this.quotes.push(value);
        this.currentCount++;
        this.error = false;
      } else {
        this.error = true;
      }
    },
    removeQuote(index) {
      this.quotes.splice(index, 1);
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  margin: auto;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
