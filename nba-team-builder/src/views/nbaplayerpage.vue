<template>
    
    <div>
        <h1>NBA Team Creator</h1>

        <router-link to="/team">
          <button class ="button"> View My Team</button>
        </router-link>
        <div id ="playercontainer"></div>
<PlayerCardBase 
  v-for="player in playerList" 
  :key="player.id" 
  :player="player"
>
  <template  #default>
    <button @click="AddToTeam(player)">Add to Team</button>
  </template>
</PlayerCardBase>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import PlayerCardBase from '@/components/playercardbase.vue'
const team = ref([])
function AddToTeam(player) {
if (team.value.length < 5) {
  team.value.push(player)
} else {
  alert('Team is full! Remove a player before adding another.')
}
}

const players = ref([
  {
    id: 1,
    name: 'LeBron James',
    position: 'SF',
    team: 'Los Angeles Lakers',
    img: 'lebron.avif',
  },
  {
    id: 2,
    name: 'Kevin Durant',
    position: 'SF',
    team: 'Houston Rockets',
    img: 'durant.webp',
  },
  {
    id: 3,
    name: 'Stephen Curry',
    position: 'PG',
    team: 'Golden State Warriors',
    img: 'curry.avif',
  },
  {
    id: 4,
    name: 'Giannis Antetokounmpo',
    position: 'PF',
    team: 'Milwaukee Bucks',
    img: 'giannis.avif',
  },
  {
    id: 5,
    name: 'Kawhi Leonard',
    position: 'SF',
    team: 'Los Angeles Clippers',
    img: 'kawhi.png',
  },
  {
    id: 6,
    name: 'Luka Dončić',
    position: 'PG',
    team: 'Los Angeles Lakers',
    img: 'luka.avif',
  },
  {
    id: 7,
    name: 'Joel Embiid',
    position: 'C',
    team: 'Philadelphia 76ers',
    img: 'joel.avif',
  },
  {
    id: 8,
    name: 'Nikola Jokić',
    position: 'C',
    team: 'Denver Nuggets',
    img: 'jokic.avif',
  },
  {
    id: 9,
    name: 'Jimmy Butler',
    position: 'SF',
    team: 'Golden State Warriors',
    img: 'butler.avif',
  },
  {
    id: 10,
    name: 'Paul George',
    position: 'SF',
    team: 'Philadelphia 76ers',
    img: 'paulgeorge.avif',
  },
])



const playerList = players
</script>

<style scoped>
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
    background-color: darken(#007bff, 10%);
  }
}
</style>
