<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select name="animation" id="" v-model="alertAnimation">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>                    
                </select>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br />
                <br />                
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
                <transition appear
                            enter-active-class="animated bounce"
                            leave-active-class="animated shake">
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
                <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="alert">This is some info</div>
                    <div class="alert alert-warning" v-else key="warning">This is some warning</div>                    
                </transition>
                <hr>
                <button class="btn btn-primary" @click="load = !load">Load / Remove</button>
                <br><br>
                <transition
                  @before-enter="beforeEnter"
                  @enter="enter"
                  @after-enter="afterEnter"
                  @enter-cancelled="enterCancelled"
                  @before-leave="beforeLeave"
                  @leave="leave"
                  @after-leave="afterLeave"
                  @leave-cancelled="leaveCancelled">
                  <div style="width: 100px; height: 100px; background-color: lightgreen" v-if="load"></div> 
                </transition>
                <hr>
                <button class="btn btn-primary"
                  @click="toggleComponent">Toggle Components</button>
                <br><br>
                <transition name="fade" appear mode="out-in">
                  <component :is="selectedComponent"></component>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="addItem">Add Item</button>
                <br>
                <br>
                <ul class="list-group">
                  <transition-group name="slide">
                    <li class="list-group-item" v-for="(number, index) in numbers" :key="index"
                    @click="removeItem(index)">{{number}}</li>
                  </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Danger from './Danger.vue';
import Success from './Success.vue';

export default {
  data() {
    return {
      show: true,
      load: false,
      alertAnimation: 'fade',
      elementWidth: 100,
      selectedComponent: 'Danger',
      numbers: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    addItem() {
      this.numbers.push(Math.floor(Math.random() * this.numbers.length));
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    },
    toggleComponent() {
      this.selectedComponent == 'Danger'
        ? (this.selectedComponent = 'Success')
        : (this.selectedComponent = 'Danger');
    },
    beforeEnter(el) {
      console.log('beforeEnter');
    },
    enter(el, done) {
      console.log('enter');
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + round * 10 + 'px';
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter() {
      console.log('afterEnter');
    },
    enterCancelled() {
      console.log('cancelled');
    },
    beforeLeave(el) {
      console.log('beforeleave');
      el.style.width = '300px';
    },
    leave(el, done) {
      console.log('leave');
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = 300 - round * 10 + 'px';
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave() {
      console.log('afterleave');
    },
    leaveCancelled() {
      console.log('cancelled');
    }
  },
  components: {
    Danger,
    Success
  }
};
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave {
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
  /* transform: translateY(20px); */
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity scale 0.5s;
}

.slide-move {
  transition: transform 1s;
}

.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 0.5s;
  opacity: 0;
  position: absolute;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}

/* .list-group {
  min-height: 300px;
} */
</style>
