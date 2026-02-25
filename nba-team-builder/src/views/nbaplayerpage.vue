<template>
    
    <div>
        <h1>NBA Team Creator</h1>
        <div id ="playercontainer"></div>
       <PlayerCardBase v-for="player in playerList" :key="player.id" :player="player" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import PlayerCardBase from '@/components/playercardbase.vue'

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
    team: 'Brooklyn Nets',
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
    team: 'Dallas Mavericks',
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
    team: 'Miami Heat',
    img: 'butler.avif',
  },
  {
    id: 10,
    name: 'Paul George',
    position: 'SF',
    team: 'Los Angeles Clippers',
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
</style>
