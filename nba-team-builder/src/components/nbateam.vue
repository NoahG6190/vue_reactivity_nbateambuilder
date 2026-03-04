<template>
    <div class ="team">
        <h2>My Team</h2>
            <router-link to="/">
          <button class ="button">Back to Player Selection </button>
        </router-link>
        <div v-for="player in team" :key="player.id">{{ player.name }}</div>
        <button class ="button">Remove from Team</button>
    </div>
    <div>
    </div>
</template>

<script>
import { store } from './teamStore.js'
import playercardbase from './playercardbase.vue';

export default {
  setup () {
    const team = store.team.players
    return { team }
  }
}
</script>

<style lang="css" scoped>

</style>