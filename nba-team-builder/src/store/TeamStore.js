import { reactive, computed } from 'vue'
const state = reactive({
  team: [],
})

export function useTeamStore() {
  const addPlayer = (player) => {
    if (state.team.length < 5) return
    if (state.team.some((p) => p.id === player.id)) return
    state.team.push(player)
  }
}
const removePlayer = (id) => {
  state.team = state.team.filter((p) => p.id !== id)
}
