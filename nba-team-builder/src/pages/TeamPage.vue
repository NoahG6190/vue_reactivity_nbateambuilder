<template>
    <h1>Your NBA Team</h1>
    <div>
     
    </div>
</template>

<script>
import { computed } from 'vue'
import { useTeamStore } from '@/store/TeamStore'

export default {
    setup () {
        const { state } = useTeamStore()
        const isFull = computed(() => state.team.length === 5)

        return { isFull }
    }
}
</script>

<style lang="scss" scoped>

</style>