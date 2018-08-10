<template>
  <div class="container">
      <div class="row">
        <h1 class="text-center">The Super Quiz</h1>
        <br><br>
        <hr>
        <transition mode="out-in" name="flip">
            <component :is="mode" :current-question="questions[0].question" :options="questions[0].options" @answered="mode = 'Answer'"
                @next="mode= 'QuestionsPanel'"></component>
        </transition>
      </div>
  </div>
</template>
<script>
import QuestionsPanel from './QuestionsPanel.vue';
import Answer from './Answer.vue';

export default {
  name: 'app',
  methods: {},
  data() {
    return {
      questions: [
        {
          question: 'What is 27 - 24?',
          options: [
            {
              value: '-4',
              isCorrect: false
            },
            {
              value: '3',
              isCorrect: true
            },
            {
              value: '12',
              isCorrect: false
            },
            {
              value: '-1',
              isCorrect: false
            }
          ]
        }
      ],
      mode: 'QuestionsPanel'
    };
  },
  components: {
    QuestionsPanel,
    Answer
  }
};
</script>

<style>
.flip-enter-active {
  animation: flip-in 0.5s ease-out forwards;
}

.flip-leave-active {
  animation: flip-out 0.5s ease-in-out forwards;
}

@keyframes flip-out {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}

@keyframes flip-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}
</style>
