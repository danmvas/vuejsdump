new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{        
        alertando(){
            alert('To te alertando hein fica esperto')
        },

        armazenaValor(e){
            this.valor = e.target.value
        },

        attEnter(e){
            this.valor = e.target.value
        }
    }
})