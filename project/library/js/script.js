vm = new Vue({
    el: '#pedido',
    data: {
        pizza: {
            tamanho: '',
            sabor: '',
            adicional: {},
        },
        config: {
            titulo: 'Pizzaria UDS',
            CNPJ: '...',
            endereco: 'Nildo Ribeiro'
        },
        selected: 'A',
        
        page: {
            msg_1: '',
            msg_2: 'Quer deixar sua pizza mais interessante ? <br />basta se aventurar nas opções abaixo !',
        },
        teste: 'Hello Vue.js!',
        tamanho: [
            {id: 0, titulo: 'Pequena', valor: 'R$ 20,00', tempo: '15'},
            {id: 1, titulo: 'Média', valor: 'R$ 30,00', tempo: '20'},
            {id: 2, titulo: 'Grande', valor: 'R$ 40,00', tempo: '25'}
        ],
        sabor: [
            {id: 0, titulo: 'Calabresa', valor: '', tempo: ''},
            {id: 1, titulo: 'Marguerita', valor: '', tempo: ''},
            {id: 2, titulo: 'Portuguesa', valor: '', tempo: '5'}
        ],
        adicional: [
            {id: 0, titulo: 'Bacon', valor: '3,00', tempo: '', qtd: 0, opt: '',max_qtd: '10'},
            {id: 1, titulo: 'Cebola', valor: '', tempo: '',  qtd: 0, opt: ['Sim','Não'], max_qtd: '1'},
            {id: 2, titulo: 'Borda Recheada', valor: '5,00', tempo: '5', qtd: 0, opt: '', max_qtd: '2'}
        ],
        msg_max: 'Wow, chegou no limite de incrementos que pode adicionar, iremos colocar um adicional de brinde, hehehe !',
        vl_total: 10
    },
    methods: {
        low_string: function () {
            // info = this.el = this.el.split(' ').join('_').toLowerCase();
            console.log('passou');
            // return info;
        },
        count_vt: function (v) {
            // info = this.el = this.el.split(' ').join('_').toLowerCase();
            console.log(this.vl_total);
            // return info;
        },
        save: function() {
            console.log(this.pizza);
            console.log(this.pizza.tamanho);
            console.log('salvo');
        }

    }
})

/* -------------------------------------------------------------------------- */
/* Mask */
// $(".data").mask("99/99/9999");
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