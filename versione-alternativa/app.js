/* 
- La nostra todo list avrá alcune tasks di default predefinite
- L'utente puó inserire nuove tasks
- Cliccando sulla "X" l'utente puó cancellare una task
- Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
- L'utente vuole poter indicare che la task é stata completata (con un icona cliccabile)

Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add 
o preme il taso Enter della tastiera.
Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.
Da tenere a mente:

Ricordate di scrivere le istruzioni prima di iniziare a lavorare cercate di 
descrivere in modo sintetico gli step che pensate siano necessari.
Consultate la documentazione e se siete bloccati, aprite un ticket.

## Bonus-extra (opzionale)
- Quando una task é stata completa allora l'utente vuole che venga 
inserita in un'altra colonna tipo "tasks completate"
- se una task é stata marcata come completa per sbaglio allora vuole poterla 
rimettere nella todo list (cliccando su un altra icona)
- ah non é finita, dice che quando cancella una task non vuole che questa venga subito rimossa, 
ma vuole che resti visibile ma venga spostata in una colonna tipo "cestino"
- si, l'utente é un rompi scatole, dice infine che vuole poter rimuovere tutte le tasks nel 
cestino cliccando su un pulsante tipo "svuota cestino"
Il nostro utente per ora sembra non avere altre richieste ... ma chissá se dopo gli 
viene in mente che vuole anche poter rimettere una task cancellata nella lista di 
tasks da fare, magari l'ha cancellata per sbaglio...
Qui sotto alcuni screenshot per farvi vedere il funzionamento dell'app
*/

const app = new Vue({
    el: '#app2',
    data: {
        active: 0,
        //aggiungere un nuovo task alla lista pushandolo nell'array - uso unshift per metterlo in alto alla lista
        newTask: {
            text: '',
            done: false
        },

        tasks: [
            {
                text: 'fare la spesa',
                done: false
            },
            {
                text: 'prenotare viaggio a Londra',
                done: false
            },
            {
                text: 'portare fuori il cane',
                done: false
            }
        ],
        tasksComplete: [
         
        ],

        deletedTask: []
    },
    methods: {
        removeTask(index) {
            console.log('togli');
            this.deletedTask.unshift(this.tasks[i])
            this.tasks.splice(index, 1)
        },

        addTask() {
            //console.log('hai cliccato su aggiungi');
            this.tasks.unshift(this.newTask)
            this.newTask = {
                text: '',
                done: false
            }
        },


        completeTask(i) {
            const currentTask = this.tasks[i]
            this.tasksComplete.unshift(currentTask)
            currentTask.done = true
            this.tasks.splice(i, 1)
        },
        emptyBin(){
            this.deletedTask = []
        }
    }
})