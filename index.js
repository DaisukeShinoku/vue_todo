new Vue({
  el: '#app',
  data: {
    todos: [
      {title: "ToDo", completed: false},
      {title: "Homework", completed: true}
    ],
    filter: 'all'
  },
  computed: {
    filteredTodos(){
      if (this.filter === 'all'){
        return this.todos
      }
      else if (this.filter === 'completed'){
        return this.todos.filter((todo) => {
          return todo.completed
        })
      }
      else if (this.filter === 'active'){
        return this.todos.filter((todo) => {
          return !todo.completed
        })
      }
    }
  },
  filters: {
    pluralize(n){
      if (n <= 1) {
        return 'item'
      } else {
        return 'items'
      }
    }
  },
  methods:{
    addTodo(){
      if (!this.newToDoTitle){
        return
      }
      this.todos.push({title: this.newToDoTitle, completed: false})
      this.newToDoTitle = null
    },
    removeTodo(index){
      this.todos.splice(index, 1)
    }
  }
});