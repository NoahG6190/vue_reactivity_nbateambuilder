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
    <button class="button" @click="AddToTeam(player)">Add to Team</button>
  </template>
</PlayerCardBase>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import PlayerCardBase from '@/components/playercardbase.vue'
import { AddtoTeam } from '@/components/teamStore.js'

function AddToTeam(player) {
  AddtoTeam(player)
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
  {
    id: 11,
    name: 'Paolo Banchero',
    position: 'PF',
    team: 'Orlando Magic',
    img: 'paolo.avif',
  },
  {
    id: 12,
    name: 'Victor Wembanyama',
    position: 'C',
    team: 'San Antonio Spurs',
    img: 'victor.avif',
  },
  {
    id: 13,
    name: 'Bam Adebayo',
    position: 'C',
    team: 'Miami Heat',
    img: 'bam.webp',
  },

  {
    id: 15,
    name: 'Scoot Henderson',
    position: 'PG',
    team: 'Portland Trail Blazers',
    img: 'scoot.webp',
  },
  {
    id: 16,
    name: 'Jason Tatum',
    position: 'SG',
    team: 'Boston Celtics',
    img: 'jason.webp',
  }
])



const playerList = players
</script>

<style scoped>
.player {
    border: 1px solid #eee;
    border-radius: 4px;
    padding: 12px;
    margin-bottom: 12px;
    background-color: #f9f9f9;
}
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


}
</style>
