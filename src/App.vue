<template>
  <div>
    <button @click="replaceColorFn">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
import { mapActions } from 'vuex'
export default {
  data() {
    return {
     
    }
  },    

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain,
  },

  created() {

  },

  methods: {
    replaceColorFn(){
      let r = Math.floor(Math.random()*255);
      let g = Math.floor(Math.random()*255);
      let b = Math.floor(Math.random()*255);
     let color = 'rgba('+ r +','+ g +','+ b +',0.8)';
      this.asyncReplaceColor(color)
    },
    ...mapActions(['asyncReplaceColor'])
  },

}
</script>

<style scoped></style>
