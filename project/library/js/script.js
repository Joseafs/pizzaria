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