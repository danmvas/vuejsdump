new Vue({
    el:'#desafio',
    data:{
        nome: 'DAN',
        idade: '23',
        icon: 'https://64.media.tumblr.com/6fd703ee1f03ca5cc23e8b2ba5b8af46/92366686254fbcae-28/s400x600/274c08d77fd7652a3596b143edfac4781fc508b6.jpg',

    },
    methods:{
        randomico: function(){
            return Math.random()
        }
    }
})