<template>
  <header class="header">
    <h1 :style="{color:ReplaceColor}">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" >
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model.trim="value"
      @keydown.enter="enterFn(value)"
    />
  </header>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
export default {
  data () {
    return {
      value:'',
      replaceColor:''
    }
  },
  methods: {
    //随机颜色
     Color(){
    this.r = Math.floor(Math.random()*255);
    this.g = Math.floor(Math.random()*255);
    this.b = Math.floor(Math.random()*255);
    this.replaceColor = 'rgba('+ this.r +','+ this.g +','+ this.b +',0.8)';
    },
    enterFn(value){
      if (!value){
        this.value=''
        return alert('不能为空')
      }
      this.asyncAddTodoList({
        name:value,
        id:this.$store.state.todosList.TodosList.length+1,
        done: false
      })
    },
    ...mapActions(['asyncAddTodoList'])
  },
 
  computed: {
    ...mapGetters(['ReplaceColor']),
  }
}
</script>
