/*
**Descrizione:**
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
**Bonus**
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const { createApp } = Vue;

createApp ({
  data() {
    return {
      mail: '',
      error: false
    }
  },

  methods: {

  },

  computed: {
    
    
  },

  mounted() {
    // richiesta
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    //! test errore
    // axios.get('https://Fflynn.boolean.careers/exercises/api/random/mail')
    // dati ottenuti
    .then( (result) => {
      console.log(result.data);
      
      this.mail = result.data.response
    })
    // errori ottenuti
    .catch( error => {
      console.log(error);
      this.error = true
    })

  }

}).mount('#app')