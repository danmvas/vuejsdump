new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100,
        spcounter: 0,
        logs: [],
    },
    computed:{
        hasResult(){
            return this.playerLife <= 0 || this.monsterLife <= 0
        }
    },
    methods: {
        changesGame(){
            this.playerLife = 100
            this.monsterLife = 100
            if (this.running==false) return this.running = true
            else return this.running = false
        },
        attack(special){ // if true, it is a special attack
            this.hurt('monsterLife',1,5,special, 'Player', 'Monster', 'player')
            if(this.monsterLife > 0) this.hurt('playerLife',10,15,special, 'Monster', 'Player', 'monster')
        },
        hurt(atr, min, max, special, source, target, cls){ // atr = player or monster
            const plus = special ? 10 : 0 // if special = true, sums five
            const hurt = this.getRandom(min + plus, max + plus)
            this[atr] = Math.max(this[atr] - hurt, 0) // does not make the playerLife a negative number, 0 is max if thats the case
            this.registerLog(`${source} attacked ${target} and dealt ${hurt} damage.`, cls)
        },
        healHurt(){
            this.heal()
            this.hurt('playerLife', 10, 30, false, 'Monster', 'Player','monster')
        },
        heal(){
            heal = this.getRandom(15,35)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registerLog(`Player healed ${heal} life.`, 'player')
        },
        registerLog(text, cls){ // cls = class which will be used in each one of the logs
            this.logs.unshift({ text, cls }) // will put element in the first position of the array. "push" would the last position. will receive an object with both of thos attributes
        },
        getRandom(min, max){
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        }
    },
    watch:{
        hasResult(value){
            if(value) this.running = false // if there is a result, the game is not running
        }
    }
})