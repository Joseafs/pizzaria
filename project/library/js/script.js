/* -------------------------------------------------------------------------- */
/* In the Dark side of force... things can be more fun... */
/* -------------------------------------------------------------------------- */
/* Base/Start */
var ft_h, hd_h, sct_h, wdw_y, wdw_w, wdw_h, x_ht;
$(".rf-"+i_pg_id).addClass('active');

wdw_w = $(window).width();
wdw_h = $(window).height();
hd_h = $("header").height();

$("section").css({'padding-top': hd_h});

/* Base/Repeat/Reize */
$(window).on('resize load reload', function(){
    wdw_h = $(window).height();
    wdw_w = $(window).width();
    ft_h = $("footer").height();
    
    $frame.sly('reload');
    // $(".txt-dot").dotdotdot();
});
$(".txt-dot").dotdotdot();

$(window).on('resize load reload scroll', function(){
    wdw_y = $(window).scrollTop();
    hd_h = $("header").height();
    
    if (wdw_y > (hd_h)){
        $("header, #btn-scroll-top").addClass('update');
    } else {
        $("header, #btn-scroll-top").removeClass('update');
    }
    x_ht = (wdw_h - ft_h) - (hd_h);
    
    $("section").css({'padding-top': hd_h, 'min-height': x_ht});
});

/* -------------------------------------------------------------------------- */
/* Mask */
$(".data").mask("99/99/9999");
$(".fone-ddd").mask("99");
$('.fone-cel').change(function(){
    var phone, element;
    element = $(this);
    element.unmask();
    phone = element.val().replace(/\D/g, '');
    if(phone.length > 10) {
        element.mask("(99) 99999-9999");
    } else {
        element.mask("(99) 9999-99999");
    }
}).change();
$(".cpf").mask("999.999.999-99");
$(".cnpj").mask("99.999.999/9999-99");
$('.cpf-cnpj').change(function(){
    var reg, element;
    element = $(this);
    element.unmask();
    reg = element.val().replace(/\D/g, '');
    if(reg.length === 14) {
        element.mask("99.999.999/9999-99");
    } else if(reg.length === 11){
        element.mask("999.999.999-99999");
    } else {
        element.mask("99999999999999");
    }
}).change();

function block_number(evt){
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
/* -------------------------------------------------------------------------- */
/* Blind/click */
$('.link-null').click(function(e){
     e.preventDefault();
     return false;
});
$('.go-target').click(function(e){
    var t_id, t_pos, t_delay;
    t_id = $(this).data('id');
    t_pos = $(this).data('pos');
    t_delay = $(this).data('time');
    
    go_target(t_id,t_pos,t_delay);
    return false;
});
$('.sync-val').on('change keypress',function(){
    var targ,attr,val;
    targ = $(this).data('target');
    attr = $(this).data('attr');
    val = $(this).val();
    
    if(val.length > 0 || val !== ''){
        
        $(targ).addClass(attr);
    } else{
        $(targ).removeClass(attr);
    }
});

$('#hd-btn-toggle').click(function(){
    if($("body").hasClass('hd-menu-open')){
        $("body").removeClass("hd-menu-open");
    } else{
        $("body").addClass("hd-menu-open");
    }
});

$(".go-top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "800");
    return false;
});
/* Share */
$(".sh-info").click(function(){
    share_life(this);
    return false;
});
$("#share-life .kill").click(function(){
    $("#share-life").removeClass('in');
});

/* Alert */
$(".warn-info .cur-ptr").click(function(){
    $(this).parents($('.warn-info').removeClass("active"));
});

/* -------------------------------------------------------------------------- */
/* Targets */
$('.go-target').on('click', function(event) {
    var target = $($(this).attr('href') );
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - hd_h
        }, 1000);
    }

    if($('#hd-menu').hasClass('in')){
        $('#hd-menu').removeClass('in');
        $('#hd-menu, #hd-btn-toggle').attr('aria-expanded','false');
        $("body").removeClass("hd-menu-open");
    }
});
/* -------------------------------------------------------------------------- */
/* pz/pers */
$('.selectpicker').selectpicker({});
/* -------------------------------------------------------------------------- */
/* Banner */
var bn_size_w, bn_size_h, bn_ctrl, bn_arrow;

$('.bn-tp-1').each(function(){
    bn_size_w = $(this).data('size-w');
    bn_size_h = $(this).data('size-h');
    bn_ctrl = $(this).data('ctrl');
    bn_arrow = $(this).data('arrow');

    $(this).royalSlider({
        arrowsNav: bn_arrow,
        loop: true,
        keyboardNavEnabled: true,
        controlsInside: true,
        imageScaleMode: 'fill',
        arrowsNavAutoHide: false,
        autoScaleSlider: true,
        autoScaleSliderWidth: bn_size_w,
        autoScaleSliderHeight: bn_size_h,
        imgWidth: bn_size_w,
        imgHeight: bn_size_h,
        controlNavigation: bn_ctrl,
        navigateByClick: true,
        startSlideId: 0,
        autoPlay: {
            enabled: true,
            pauseOnHover: true,
            stopAtAction: true,
            delay: 6000
        },
        transitionType: 'fade',
        sliderDrag: true,
        easeInOut: true,
        globalCaption: false,
        deeplinking: {
            enabled: true,
            change: false
        }
    });
});
/* -------------------------------------------------------------------------- */
/* Slick */
$('.slick-ct').slick({
    centerMode: true,
    dots: false,
    arrows: false,
    infinite: true,
    variableWidth: true
});

/* -------------------------------------------------------------------------- */
/* Slick */
var sk_qtd = [];
$('.slick-ctrl').each(function(){
    sk_qtd['xs'] = $(this).data('qtd-xs');
    sk_qtd['sm'] = $(this).data('qtd-sm');
    sk_qtd['md'] = $(this).data('qtd-md');
    sk_qtd['lg'] = $(this).data('qtd-lg');
    
    $(this).slick({
        infinite: false,
        slidesToShow: sk_qtd['lg'],
        slidesToScroll: sk_qtd['lg'],
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToScroll: sk_qtd['md'],
                    slidesToShow: sk_qtd['md'],
                    dots: true
              }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToScroll: sk_qtd['sm'],
                    slidesToShow: sk_qtd['sm'],
                    dots: true
              }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToScroll: sk_qtd['xs'],
                    slidesToShow: sk_qtd['xs'],
                    dots: true
              }
            }
          ]
    });
});

$('.slick-btn-prev').click(function (){
    var targ = $(this).data('target');
    $(targ+' .slick-ctrl').slick('slickPrev');
});
$('.slick-btn-next').click(function (){
    var targ = $(this).data('target');
    $(targ+' .slick-ctrl').slick('slickNext');
});

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
var pageLoader = $.nPageLoader;
pageLoader.init({});
pageLoader.addEventListener("complete", onComplete);

function onComplete(e){
    $(".anm-loading").fadeOut(600); 
    setTimeout(function(){
        $(".anm-loading").remove();
    },3000);
}

// ==========================================================================
//   Header example
// ==========================================================================
var $example = $('.sly-ctrl');
var $frame = $example.find('.frame'); window.frr = $frame;
var sly = new Sly($frame, {
        horizontal: 1,
        itemNav: 'basic',
        activateMiddle: 1,
        smart: 1,
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 0,
        scrollBar: $example.find('.scrollbar'),
        scrollBy: 0,
        pagesBar: $example.find('.pages'),
        activatePageOn: 'click',
        speed: 200,
        moveBy: 600,
        elasticBounds: 1,
        dragHandle: 1,
        dynamicHandle: 0,
        clickBar: 1,
        minHandleSize: 20,

        // Buttons
        forward: $example.find('.forward'),
        backward: $example.find('.backward'),
        prev: $example.find('.prev'),
        next: $example.find('.next'),
        prevPage: $example.find('.prevPage'),
        nextPage: $example.find('.nextPage')
}).init();
/*
// Method calling buttons
$example.on('click', 'button[data-action]', function () {
        var action = $(this).data('action');

        switch (action) {
            case 'add':
                sly.add('<li>' + sly.items.length + '</li>');
                break;
            case 'remove':
                sly.remove(-1);
                break;
            default:
                sly[action]();
        }
});
*/
//
//horizontal: 1,
//itemNav: 'basic',
//smart: 1,
//activateOn: 'click',
//mouseDragging: 1,
//touchDragging: 1,
//releaseSwing: 1,
//startAt: 3,
//scrollBar: $wrap.find('.scrollbar'),
//scrollBy: 1,
//pagesBar: $wrap.find('.pages'),
//activatePageOn: 'click',
//speed: 300,
//elasticBounds: 1,
//easing: 'easeOutExpo',
//dragHandle: 1,
//dynamicHandle: 1,
//clickBar: 1,

			