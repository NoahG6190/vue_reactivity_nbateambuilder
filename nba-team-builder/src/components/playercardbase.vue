<template>
    
   <div>
        <div class="player-card">
            <img :src="`/${player.img}`" alt="Player Image" class="player-image">
            <h2 class="player-name">{{ player.name }}</h2>
            <p class="player-position">{{ player.position }}</p>
            <p class="player-team">{{ player.team }}</p>

    </div>
</template>

<script setup>
const props = defineProps({
  player: {
    type: Object,
    required: true,
  },
})

const player = props.player
</script>

<style lang="scss" scoped>
.player-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 16px 0;
    display: flex;
    align-items: center;

    .player-image {
        border-radius: 50%;
        margin-right: 16px;
    }

    .player-name {
        font-size: 1.5em;
        margin: 0;
    }

    .player-position,
    .player-team {
        margin: 4px 0;
    }
}

</style>