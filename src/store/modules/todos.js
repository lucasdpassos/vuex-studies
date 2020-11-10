import axios from 'axios'

const state = {
    todos: [
        
]
}

const getters = {
    allTodos: (state) => state.todos
}

const actions = {   //Ações são os que fazem as chamadas (request API por exemplo) e passa os parâmetros para mutations 
   async fetchTodos({ commit }) {
       const response = await axios.get('https://jsonplaceholder.typicode.com/todos')

       commit('settodos', response.data)
   }         
}

const mutations = {
    setTodos: (state, todos) => (state.todos = todos)
}

export default {
    state, 
    getters,
    actions,
    mutations
}