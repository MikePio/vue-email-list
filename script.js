/*
**Descrizione:**
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
**Bonus**
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const { createApp } = Vue;

createApp({
  data() {
    return {
      mails: [],
      loading: true,
      mail: '',
      error: false
    }
  },

  methods: {
    multipleMails() {
      for (let i = 1; i < 11; i++) {
        // richiesta
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          //! test errore
          // axios.get('https://Fflynn.boolean.careers/exercises/api/random/mail')
          // dati ottenuti
          .then((result) => {
            // una sola mail
            // this.mail = result.data.response; 
            // più mail
            this.mails.push(result.data.response);
            console.log(this.mails.length);
            //*quando la lunghezza dell'array è = 10 compaiono le email tutte in una volta
            this.checkLenghtMails();
            //* Oppure
            // if(this.mails.length == 10){
            // this.loading = false
            // }
          })
          // errori ottenuti
          .catch(error => {
            console.log(error);
            this.error = true;
          })
      }
    },
    
    checkLenghtMails() {
      //*quando la lunghezza dell'array è = 10 compaiono le email tutte in una volta
      if (this.mails.length == 10) {
        this.loading = false
      }

    }

  },

  computed: {

  },

  created() {

  },

  mounted() {
    this.multipleMails()
  }

}).mount('#app')