<template>
  <div class="button-section">
    <div v-if="!isGameInProgress" class="btn-group">
      <button class="btn" @click="startGame">START NEW GAME</button>
    </div>
    <div v-else class="btn-group">
      <button class="btn btn-attack" @click="attack">ATTACK</button>
      <button class="btn btn-spcl" @click="spclAttack">SPECIAL ATTACK</button>
      <button class="btn btn-heal" @click="healSelf">HEAL</button>
      <button class="btn btn-lose" @click="endGame">GIVE UP</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "button-section",
  data() {
    return {
      isGameInProgress: false,
      actionModifier: 50
    };
  },
  methods: {
    startGame() {
      this.isGameInProgress = true;
      this.$emit('startGame');
    },
    attack() {
      this.$emit('attack');
    },
    spclAttack() {
      this.$emit('spclAttack');      
    },
    healSelf() {
      this.$emit('healSelf');      
    },
    endGame() {
      this.isGameInProgress = false;
      this.$emit('endGame');      
    }
  }
};
</script>

<style scoped>
.button-section {
  border: 1px solid gray;
  border-radius: 5px;
  box-shadow: 0px 0px 4px 0px black;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 5%;
}

.btn-group {
  display: flex;
  justify-content: center;
  padding: 10px;
}

.btn {
  background-color: lightgreen;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 5px;
  box-shadow: 0 0 3px 1px black;
  margin: auto;
}

.btn-attack {
  background-color: orangered;
}

.btn-spcl {
  background-color: peru;
}

.btn-lose {
  background-color: whitesmoke;
}
</style>
