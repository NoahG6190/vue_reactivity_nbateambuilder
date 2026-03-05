<template>
    <div class ="team">
        <h2>My Team</h2>
            <router-link to="/">
          <button class ="button">Back to Player Selection </button>
        </router-link>
        <div v-if="team.length === 0">No players in the team</div>
        <PlayerCardBase 
  v-for="player in playerList" 
  :key="player.id" 
  :player="player"
>
  <template  #default>
    <button class="button" @click="RemoveFromTeam(player)">Remove from Team</button>
  </template>
</PlayerCardBase>



</div>

    <div>
    </div>
</template>

<script setup>

import { store } from './teamStore.js'
import { RemoveFromTeam } from './teamStore.js'
import { PlayerCardBase } from './playercardbase.vue';



function RemoveFromTeam(player) {
  RemoveFromTeam(player)
}

export default {
  setup () {
    const team = store.team.players
    return { team }
  }
}
</script>
<script scoped></script>
<style lang="css" scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.button{
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: darken(#007bff, 80%);
  }
}
</style>