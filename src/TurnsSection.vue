<template>
  <div class="turns-section">
      <div v-for="turn in turns"
           :key="turn.turnNumber">
        <div class="player-hit">
            <span v-if="turn.heal">Player heals self for {{turn.playerHitValue}} </span>
            <span v-else>Player hits monster for {{turn.monsterHitValue}} </span>         
        </div>
        <div class="monster-hit">
            <span>Monster hits player for {{turn.monsterHitValue}} </span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'turns-section',
  data() {
    return {};
  },
  props: {
    turns: Array
  }
};
</script>

<style scoped>
.turns-section {
  border: 1px solid gray;
  border-radius: 5px;
  box-shadow: 0px 0px 4px 0px black;
  margin: 0 auto;
  padding: 5%;
  width: 80%;
  text-align: center;
  font-size: large;
  font-weight: 600;
}

.player-hit {
  background-color: coral;
  color: red;
  margin: 2px;
  width: 100%;
}

.monster-hit {
  background-color: lightskyblue;
  color: purple;
  width: 100%;
  margin: 2px;
}
</style>
