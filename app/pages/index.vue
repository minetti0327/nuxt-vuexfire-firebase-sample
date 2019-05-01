<template>
  <div>
    <div>
      <ul v-for="(todo, index) in todos" :key="index">
        <li>title: {{ todo.title }}</li>
      </ul>
    </div>
    <div class="form">
      <div>
        add todo:
        <input type="text" name="title" v-model="title">
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
      title: ''
    }
  },
  computed: {
    ...mapGetters({ todos: 'todo/todos' })
  },
  created: function() {
    this.$store.dispatch('todo/init')
  },
  methods: {
    async submit() {
      const todo = {
        title: this.title
      }
      const ref = db.collection('todos')
      ref.add(todo)
      this.title = ''
    }
  }
}
</script>