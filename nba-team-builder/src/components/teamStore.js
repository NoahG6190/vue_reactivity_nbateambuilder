import { reactive } from 'vue'

export const store = reactive({
  team: {
    players: [],
  },
})

function AddtoTeam(player) {
  const existingPlayer = store.team.players.find((p) => p.id === player.id)
  if (!existingPlayer) {
    store.team.players.push(player)
  }
}

function RemoveFromTeam(player) {
  const index = store.team.players.findIndex((p) => p.id === player.id)
  if (index !== -1) {
    store.team.players.splice(index, 1)
  }
}

export { AddtoTeam, RemoveFromTeam }
