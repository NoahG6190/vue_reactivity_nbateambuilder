<template>
  <div class="team">
    <h2>My Team</h2>

    <router-link to="/">
      <button class="button">Back to Player Selection</button>
    </router-link>

    <div v-if="team.length === 0" class="empty">Your Team is Empty.</div>

    <ul class="team-list">
      <li v-for="player in team" :key="player.id" class="team-item">
        <img
          class="player-image"
          :src="playerImg(player)"
          :alt="player.name"
          
        />
        <div class="player-info">
          <div class="player-name">{{ player.name }}</div>
          <div class="player-meta">{{ player.position }} • {{ player.team }}</div>
        </div>
        <div class="actions">
          <button class="button remove" @click="remove(player)">Remove</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { store, RemoveFromTeam } from './teamStore.js'

export default {
  name: 'NBATeam',
  setup () {
    const team = store.team.players

    function playerImg(player) {
      if (!player || !player.img) return '/favicon.ico'
      return player.img.startsWith('/') ? player.img : `/${player.img}`
    }



    function remove(player) { RemoveFromTeam(player) }

    return { team, playerImg, remove }
  }
}
</script>

<style scoped>
.team {
  padding: 16px;
}
.team-list {
  list-style: none;
  padding: 0;
  margin: 12px 0;
}
.team-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-bottom: 1px solid #eee;
}
.player-image {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 6px;
}
.player-info {
  flex: 1;
}
.player-name {
  font-weight: 600;
}
.player-meta {
  color: #666;
  font-size: 0.9rem;
}
.actions .button.remove {
  background: #dc3545;
  color: white;
}
.button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
}
.empty {
  margin-top: 16px;
  color: #444;
}
</style>