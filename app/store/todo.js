import { firestoreAction } from 'vuexfire'
import db from '@/plugins/firebase'

const todos = db.collection('todos')

export const state = () => ({
  todos: []
})

export const getters = {
  todos: state => {
    return state.todos
  }
}

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('todos', todos)
      .then(() => {
        // commit('setTodosLoaded', true)
      })
      .catch(err => {
        console.log(err)
      })
  })
}
