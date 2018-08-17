vm = new Vue({
    el: '#website',
    data: {
        pizza: {
            size: '',
            taste: '',
            inc: 0,
            craft: [],
        },
        config: {
            title: 'Pizzaria La Larica',
            descricao: 'Pizzas sob medida para seu estômago e para todas ocasiões',
            key: 'Pizza, quiejo, pizzaria, calabreza, marguerita, portuguesa, bacon',
            author: 'José André Fernandes Sabino',
            address: 'Lorem Ipsum sit, amet 6699',
            // bar_color: '#c12e2a' /* secret... */
        },
        page: {
            msg_1: 'Não se acanhe, monte o que seu estômago desejar ',
            msg_2: 'Quer deixar sua pizza mais interessante ? <br />basta se aventurar nas opções abaixo !',
            i_prod: 'Lista de Encomendas',
        },
        size: [
            {id: 0, title: 'Pequena', value: '20.00' , time: '15', status: ''},
            {id: 1, title: 'Média', value: '30.00' , time: '20', status: ''},
            {id: 2, title: 'Grande', value: '40.00' , time: '25', status: ''}
        ],
        taste: [
            {id: 0, title: 'Calabresa', value: '0', time: '0'},
            {id: 1, title: 'Marguerita', value: '0', time: '0'},
            {id: 2, title: 'Portuguesa', value: '0', time: '5'}
        ],
        increments: [
            {id: 0, title: 'Bacon', value: '3.00' , time: '0', qtd: '0', status: '',max_qtd: '15'},
            {id: 1, title: 'Cebola', value: '0', time: '0',  qtd: '0', status: true, max_qtd: '1'},
            {id: 2, title: 'Borda Recheada', value: '5.00', time: '5', qtd: '0', status: '', max_qtd: '2'}
        ],
        list_request:[],
        pizza_t: 0,
        pizza_v: 0
    },
    methods: {
        msg(i) {alert(i);},
        count_add(i) {
            if(i.qtd >= i.max_qtd){
                this.msg('Wow, você chegou no limite de '+i.title+', por conta disso, iremos adicionar um brinde, hehehe !');
            } else{
                i.qtd ++;
                this.pizza.inc++;
            }
        },
        count_less(i) {
            if(i.qtd <= 0){
                this.msg('Omg, pq tanto ódio nesse coração ? Adicione um pouco de '+i.title+' e faça seu estomago feliz :D !');
            } else{
                i.qtd --;
                this.pizza.inc++;
            }
        },
        load_list() {
            if(localStorage.getItem('list_request')) {
                this.list_request = JSON.parse(localStorage.getItem('list_request'));
            }
        },
        add_order() {
            this.pizza.craft.push({ 'order_v': this.pizza_v, 'order_t': this.pizza_t, 'status': 0});
            this.list_request.push(this.pizza.craft);
            this.pizza.craft = [];
            this.save();
        },
        remove(x) {
            this.list_request.splice(x,1);
            this.save();
        },
        save() {
            let parsed = JSON.stringify(this.list_request);
            localStorage.setItem('list_request', parsed);
            this.load_list();
        },
        butler(i){
            for(item in i){
                if($.isArray(i[item])){
                    this.butler(i[item]);
                } else{
                    if('qtd' in i[item]){
                        v = i[item].value * parseInt(i[item].qtd);
                        t = i[item].time * parseInt(i[item].qtd);
                    } else{
                        v = i[item].value;
                        t = i[item].time;
                    }
                    this.pizza_v += parseFloat(v);
                    this.pizza_t += parseFloat(t);
                }
            }
        },
    },
    ready(){this.load_list();},
    watch: {
        pizza: {
          handler: function() {
            sz = this.pizza.size;
            ts = this.pizza.taste;
            
            
            if(sz){
                size = this.size[sz];
                this.pizza.craft[0] = size;
            }
            if(ts){
                taste = this.taste[ts];
                this.pizza.craft[1] = taste;
            }
            this.pizza.craft[2] = this.increments;
            
            this.pizza_t = 0;
            this.pizza_v = 0;
            this.butler(this.pizza.craft);
            },
            deep: true
        }
    }
})

/* -------------------------------------------------------------------------- */
/* Mask */
$(".ib-number").mask("9");
/* -------------------------------------------------------------------------- */
/* pz/pers */
$('.selectpicker').selectpicker({
    showSubtext: true
});