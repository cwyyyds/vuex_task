<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li :class="{completed:!item.done}" v-for="item in $store.state.todosList.TodosList" :key="item.id">
      <div class="view" >
        <input class="toggle" type="checkbox" v-model="item.done" @change="changFn(item.done,item.id)"/>
        <label >{{item.name}}</label>
        <button class="destroy"  @click="delFn(item.id)"></button>
      </div>
    </li>
  </ul>
  
</template>

<script>
import {mapState,mapActions} from 'vuex'

export default {
  data () {
    return {
      value:true,
    }
  },

  methods: {
    delFn(id){
      this.asyncReduceTodoList(id)
    },

    changFn(state,id){
      console.log(mapState(['todosList/TodosList']));
      console.log(state);
      let index = this.TodosList.findIndex(item => item.id === id)
      console.log(index);
    },

    ...mapActions(['asyncReduceTodoList'])
  },
  computed: {
    ...mapState(['TodosList'])
  }
}
</script>
