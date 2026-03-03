<template>
    <div class ="team">
        <h2>My Team</h2>
        <div v-for="player in team" :key="player.id">{{ player.name }}</div>
    </div>
    <div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="css" scoped>

</style>