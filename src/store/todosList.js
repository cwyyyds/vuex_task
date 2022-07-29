import list from './数据'
export default {
  state: {
     TodosList:list
  },
  getters: {
  },
  mutations: {
      addTodoList(state,payload){
        state.TodosList.push(payload);
      },
      reduceTodoList(state,payload){
        let index = state.TodosList.findIndex(item => item.id === payload);
        state.TodosList.splice(index, 1);
      }
  },
  actions: {
      asyncAddTodoList(context,payload){
          context.commit('addTodoList',payload)
      },
      asyncReduceTodoList(context,payload){
        context.commit('reduceTodoList',payload)
      }
  },
}