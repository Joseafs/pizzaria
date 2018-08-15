vm = new Vue({
    el: '#pedido',
    data: {
        pizza: {
            tamanho: 0,
            sabor: 0,
        },
        config: {
            titulo: 'Pizzaria UDS',
            CNPJ: '...',
            endereco: 'Nildo Ribeiro'
        },
        page: {
            msg_1: 'Não se acanhe, monte o que seu estômago desejar ',
            msg_2: 'Quer deixar sua pizza mais interessante ? <br />basta se aventurar nas opções abaixo !',
        },
        tamanho: [
            {id: 0, titulo: 'Pequena', valor: 20.00 , tempo: '15', status: ''},
            {id: 1, titulo: 'Média', valor: 30.00 , tempo: '20', status: ''},
            {id: 2, titulo: 'Grande', valor: 40.00 , tempo: '25', status: ''}
        ],
        sabor: [
            {id: 0, titulo: 'Calabresa', valor: 0, tempo: ''},
            {id: 1, titulo: 'Marguerita', valor: 10, tempo: ''},
            {id: 2, titulo: 'Portuguesa', valor: 0, tempo: '5'}
        ],
        adicional: [
            {id: 0, titulo: 'Bacon', valor: 3.00 , tempo: '', qtd: 0, status: '',max_qtd: '4'},
            {id: 1, titulo: 'Cebola', valor: 0, tempo: '',  qtd: 0, status: true, max_qtd: '1'},
            {id: 2, titulo: 'Borda Recheada', valor: 5.00, tempo: '5', qtd: 0, status: '', max_qtd: '2'}
        ],
        msg_max: 'Wow, chegou no limite de incrementos que pode adicionar, iremos colocar um adicional de brinde, hehehe !',
        vl_total: 0
    },
    methods: {
        count_add: function (i) {
            if(i.qtd >= i.max_qtd){
                alert(this.msg_max);
            } else{
                i.qtd ++;
            }
        },
        count_less: function (i) {
            if(i.qtd <= 0){
            } else{
                i.qtd --;
            }
        },
        save: function() {
            console.log(this.pizza.tamanho);
        }
    },
    watch: {
        pizza: {
          handler: function() {
            var tm,v_tm, sb, v_sb;
            tm = this.pizza.tamanho;
            sb = this.pizza.sabor;

            v_tm = this.tamanho[tm].valor;
            v_sb = this.sabor[sb].valor;

            this.vl_total =  v_tm + v_sb;
        },
          deep: true
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