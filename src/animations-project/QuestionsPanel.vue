<template>
  <div class="panel panel-default">
      <div class="panel-heading"><h2 class="text-center panel-title">{{currentQuestion}}</h2></div>
      <div class="panel-body">
          <div class="buttons-area">
              <answers-button @correct="animatePanel"
                              v-for="option in options"
                              :key="option.value"
                              :value="option.value"
                              :is-correct="option.isCorrect"/>
          </div>
      </div>
  </div>
</template>

<script>
import AnswersButton from './AnswersButton.vue';

export default {
  name: 'questions-panel',
  props: {
    currentQuestion: String,
    options: Array
  },
  components: {
    AnswersButton
  },
  methods: {
    animatePanel() {
        this.$emit('answered')
    }
  }
};
</script>

<style scoped>
.buttons-area {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
