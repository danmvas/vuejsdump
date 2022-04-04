new Vue({
    el:'#app',

    data:{
        title: 'Hello, world!',
        link: 'https://google.com/',
        linkHtml: '<a href="https://google.com">Google</a>',
        count: 1,
        count2: 1,
        count1: 0,
        x: 0,
        y: 0 
    },

    computed:{
        result(){
            return this.count1 >= 5 ?
                'Greater than 5' : "Lesser than 5"
        }
    },

    methods:{
        alterTitle(event){
            this.title = event.target.value
        },

        greetings: function() {
            return 'Have a good day!'
        },

        plus(){
            this.count++
        },

        pluss(con){
            this.count2 += con
        },

        upd8XY(event){
            this.x = event.clientX
            this.y = event.clientY
        },

        stop(e){
            e.stopPropagation()
        },

        alerting(){
            alert('I am alerting you!')
        },

        add(){
            this.count1++
        },

        subtract(){
            this.count1--
        }
    }
})