vm = new Vue({
    el: '#website',
    data: {
        pizza: {
            size: 0,
            taste: 0,
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
        newCat: 'Loremalalal',
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
            this.list_request = JSON.parse(localStorage.getItem('list_request'));
        },
        remove(x) {
            // this.pizza.splice(x,1);
        },
        save() {
            this.list_request.push(this.pizza.craft);
            let parsed = JSON.stringify(this.list_request);
            localStorage.setItem('list_request', parsed);
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
    ready(){
        this.load_list();
        // console.log(this.list_request);
    },
    watch: {
        pizza: {
          handler: function() {
            sz = this.pizza.size;
            ts = this.pizza.taste;
            
            size = this.size[sz];
            taste = this.taste[ts];

            this.pizza.craft[0] = size;
            this.pizza.craft[1] = taste;
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
// $(".fone-ddd").mask("99");
// $('.fone-cel').change(function(){
//     var phone, element;
//     element = $(this);
//     element.unmask();
//     phone = element.val().replace(/\D/g, '');
//     if(phone.length > 10) {
//         element.mask("(99) 99999-9999");
//     } else {
//         element.mask("(99) 9999-99999");
//     }
// }).change();
// $(".cpf").mask("999.999.999-99");
// $(".cnpj").mask("99.999.999/9999-99");
// $('.cpf-cnpj').change(function(){
//     var reg, element;
//     element = $(this);
//     element.unmask();
//     reg = element.val().replace(/\D/g, '');
//     if(reg.length === 14) {
//         element.mask("99.999.999/9999-99");
//     } else if(reg.length === 11){
//         element.mask("999.999.999-99999");
//     } else {
//         element.mask("99999999999999");
//     }
// }).change();

// function block_number(evt){
//     evt = (evt) ? evt : window.event;
//     var charCode = (evt.which) ? evt.which : evt.keyCode;
//     if (charCode > 31 && (charCode < 48 || charCode > 57)) {
//         return false;
//     }
//     return true;
// }
/* -------------------------------------------------------------------------- */
/* pz/pers */
$('.selectpicker').selectpicker({
    showSubtext: true
});