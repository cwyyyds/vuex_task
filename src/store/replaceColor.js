export default {
    state: {
        ReplaceColorA:'blue'
    },
    getters: {
    },
    mutations: {
        replaceColor(state,payload){
            state.ReplaceColorA=payload
        }
    },
    actions: {
        asyncReplaceColor(context,payload){
            context.commit('replaceColor',payload)
        }
    },
  }