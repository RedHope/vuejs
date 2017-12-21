<style scoped>
.app {
    display: flex;
    justify-content: center;
}
.player-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.player-you {
  align-self: flex-start;
}

.player-monster {
  align-self: flex-end;
  text-align: -webkit-right;
  margin-left: 20%
}
</style>


<template>
    <div class="app">
         <div class="player-info">
             <div class="player-you">
                 <h1>You</h1>
                 <health-bar
                    :id="'player-1'"
                    :current-health="this.player1Health"></health-bar>
             </div>
             <div class="player-monster">
                  <h1>Monster</h1>
                 <health-bar
                    :id="'player-2'"
                    :current-health="this.player2Health"></health-bar>
             </div>
         </div>
    </div>
</template>


<script>
import Vue from "vue";
import HealthBar from "./HealthBar.vue";

export default {
  name: "app",
  data() {
    return {
      message: "Hello Vue",
      player1Health: 20,
      player2Health: 50
    };
  },
  components: {
    HealthBar
  }
};
</script>
