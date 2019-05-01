<template>
  <div>
    <div>
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          <ul>
            <li>title: {{ todo.title }}</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="form">
      <div>
        add todo:
        <input type="text" name="email" v-model="todo">
      </div>
      <div>
        <button @click="submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import db from '@/plugins/firebase'

export default {
  data: () => {
    return {
      todo: ''
    }
  },
  computed: {
    ...mapGetters({ users: 'todo/todos' })
  },
  created: function() {
    this.$store.dispatch('todo/init')
  },
  methods: {
    async submit() {
      const todo = {
        todo: this.todo
      }
      const usersRef = db.collection('todos')
      usersRef.add(todo)
      this.todo = ''
    }
  }
}
</script>