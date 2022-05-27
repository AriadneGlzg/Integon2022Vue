import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) // ese objeto vuex no es propio de vue es un vue 
// se pueden tener varias stores para gestionar distintosestados

export default new Vuex.Store({
  state: { // los estados serian lo que se va a estar cambiando
    formData: {
      name: '',
      occupation: '',
      organization: ''
    }
  },
  mutations: { // las mutaciones son la funcion basicamente, se habla de que muta el estado osea las variables
    profileUpdate(state, payload) { //primer mutacion que es un metodo 
      state.formData = {
        name: payload.name || '',
        occupation: payload.occupation || '',
        organization: payload.organization || '',
      }
    },
    profileClear(state) { //segunda mutacion
      state.formData = {
        name: '',
        occupation: '',
        organization: ''
      }
    }
  }
})