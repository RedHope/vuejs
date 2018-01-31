<style scoped>
.app {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.player-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10%;
}

.player-you {
  align-self: flex-start;
}

.player-monster {
  align-self: flex-end;
  text-align: -webkit-right;
  margin-left: 20%;
}
</style>


<template>
    <div class="app">
         <div class="player-info">
             <div class="player-you">
                 <h1 :style="{textAlign: 'center'}">You</h1>
                 <health-bar
                    :id="'player-1'"
                    :current-health="this.player1Health"></health-bar>
             </div>
             <div class="player-monster">
                  <h1 :style="{textAlign: 'center'}">Monster</h1>
                 <health-bar
                    :style="{textAlign: 'left'}"
                    :id="'player-2'"
                    :current-health="this.player2Health"></health-bar>
             </div>
         </div>
         <button-section
          :is-game-in-progress="isGameInProgress"
          v-on:startGame="startGame"
          v-on:attack="attack"
          v-on:spclAttack="spclAttack"
          v-on:healSelf="healSelf"
          v-on:endGame="endGame"></button-section>
          <turns-section :turns="turns"
            v-if="turns.length > 0">
          </turns-section>
          {{alert}}
    </div>
</template>

<script>
function getRandomActionValue(modifier) {
  return Math.floor(Math.random() * modifier);
}

import Vue from 'vue';
import HealthBar from './HealthBar.vue';
import ButtonSection from './ButtonSection.vue';
import TurnsSection from './TurnsSection.vue';

export default {
  name: 'app',
  data() {
    return {
      message: 'Hello Vue',
      player1Health: 100,
      player2Health: 100,
      actionModifier: 10,
      turns: [],
      turnNumber: 0,
      isGameInProgress: false
    };
  },
  methods: {
    startGame() {
      this.isGameInProgress = true;
    },
    attack() {
      let playerAttack, monsterAttack;

      playerAttack = getRandomActionValue(this.actionModifier);
      monsterAttack = getRandomActionValue(this.actionModifier);
      this.modifyPlayerHealthValues(-monsterAttack, -playerAttack);
    },
    spclAttack() {
      let playerAttack, monsterAttack;

      playerAttack = getRandomActionValue(this.actionModifier * 2);
      monsterAttack = getRandomActionValue(this.actionModifier);
      this.modifyPlayerHealthValues(-monsterAttack, -playerAttack);
    },
    healSelf() {
      if (this.player1Health < 100) {
        let player1Delta =
          getRandomActionValue(this.actionModifier) -
          getRandomActionValue(this.actionModifier * 0.8);
        this.modifyPlayerHealthValues(player1Delta, 0);
      }
    },
    endGame() {
      this.isGameInProgress = false;
      this.player1Health = 100;
      this.player2Health = 100;
      this.turns = [];
    },
    modifyPlayerHealthValues(player1Delta, player2Delta) {
      this.player1Health += player1Delta;
      this.player2Health += player2Delta;
      this.turns.push({
        turnNumber: this.turnNumber++,
        playerHitValue: Math.abs(player2Delta),
        monsterHitValue: Math.abs(player1Delta),
        heal: player1Delta > 0
      });
    }
  },
  computed: {
    hasGameEnded() {
      return this.player1Health <= 0 || this.player2Health <= 0;
    },
    isPlayer1Winner() {
      return this.player1Health >= 0;
    },
    alert() {
      if (this.hasGameEnded && this.isPlayer1Winner) {
        let result = confirm('You win. New game?');
        if (result) {
          this.endGame();
        }
      } else if (this.hasGameEnded) {
        let result = confirm('You lose. New game?');
        if (result) {
          this.endGame();
        }
      }
    }
  },
  components: {
    HealthBar,
    ButtonSection,
    TurnsSection
  }
};
</script>
