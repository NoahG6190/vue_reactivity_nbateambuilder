import nbaplayerpage from '@/views/nbaplayerpage.vue'

const store = {
  state: {
    team: {
      players: [],
    },
  },
  AddtoTeam(player){
    store.commit('ADD_PLAYER', player)
  },
  RemoveFromTeam(player){
    store.commit('REMOVE_PLAYER', player)
  }
