import $ from 'jquery';

import noUiSlider from 'nouislider';

import 'owl.carousel';


$(function(){
    // main_page
    $(document).on('click', function(e){
        if ($('.phones-button').is(':visible')) {
            if( $(e.target).closest('.phones-button, .popuping-content').length ) 
                return;
            $('.popuping-content').slideUp();
        }

        if( $(e.target).closest('.burger-btn, .mobile-menu-inner').length) 
            return;
        $('.mobile-menu-wrapper').removeClass('opened');
        $('body').removeClass('no-scroll');

    });

    $('.phones-button').on('click', function(){
        $(this).parent().find('.popuping-content').slideToggle();
    });

    $('.footer__left').clone().appendTo('.mobile-menu-inner');
    $('.header-bottom').clone().appendTo('.mobile-menu-inner');

    $('.mobile-menu-wrapper .menu_close').on('click', function(){
        $('.mobile-menu-wrapper').removeClass('opened');
        $('body').removeClass('no-scroll');
    });

    $('.burger-btn').on('click', function(){
        $('.mobile-menu-wrapper').addClass('opened');
        $('body').addClass('no-scroll');
    });

    $('.foldersShow-js').on('click', function(){
        let btn_text = $(this).find("span");
        btn_text.toggleClass('active');

        if (btn_text.hasClass('active')) {
            btn_text.text('Скрыть')
        } else {
            btn_text.text('Все категории')
        }

        $('.main-folders .folder_wrapper:nth-child(n+5)').slideToggle();
    });
    // main_page end


    //market_page
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    let movingFilter = $('.filter_append-js');
    
    if ($(window).width() < 1025) {
        movingFilter.appendTo('#FilterModal .modal-body');
    }
    $(window).on('resize', function(){
        if ($(this).width() > 1024) {
            if ($('.filter-wrapper .filter_append-js').length < 1) {
                movingFilter.appendTo('.filter-wrapper');
            }
        } else if ($(this).width() < 1025) {
            if ($('#FilterModal .filter_append-js').length < 1) {
                movingFilter.appendTo('#FilterModal .modal-body');
            }
        }
    });

    $('.filter-item .item-title').on('click', function(){
        $(this).toggleClass('opened').parent().find('.item-body').slideToggle();
    });

    $('.filter-item').each(function(){
        if ($(this).find('.item-body > .item-outer').length > 4) {
            $(this).find('.more-items').show();
        }
    });
    $('.filter-item .f-more-js').on('click', function(){
        $(this).parents('.filter-item').find('.item-outer:nth-child(n+5)').slideDown();
        $(this).parent().hide();
    });
    
    $('.product-colors').on('click', function(){
        $('.color-item').each(function(){
            if ($(this).find('[type="radio"]').is(':checked')) {
                $(this).addClass('checked');
            } else {
                $(this).removeClass('checked');
            }
        });
    });

    if ($('#range_slider').length) {
        var slider = document.getElementById('range_slider');

        noUiSlider.create(slider, {
            start: [0, 10000],
            connect: true,
            range: {
                'min': 0,
                'max': 10000
            }
        });
        slider.noUiSlider.on('update', function (values, handle) {

            var value = values[handle];
        
            if (handle) {
                $('[name="range-max"]').val(value);
            } else {
                $('[name="range-min"]').val(value);
            }
        });
    }
    //market_page end

    // card_page
    $('.prod-slider-init').each(function(){
        $(this).owlCarousel({
            items: 5,
            margin: 30,
            dots: true,
            nav: true,
            autoplay: false,
            responsive : {
                0 : {
                    items: 2,
                    margin: 20
                },
                
                641 : {
                    items: 3
                },
                
                769 : {
                    items: 4
                },
                1025 : {
                    items: 5
                }
            }
        });
    });
    // card_page end


    // basket_page
    $('.product__amount').each(function(){
        let amountInput =  $(this).find('.amount-input'),
            amountMinus = $(this).find('.minus'),
            amountPlus = $(this).find('.plus');
        if (amountInput.val() == '1') {
            amountMinus.addClass('disabled');
        }
        amountPlus.on('click', function(){
            let inputValue = amountInput.val();
            inputValue = +inputValue + 1;
            amountInput.val(inputValue);
            if (amountInput.val() !='1') {
                amountMinus.removeClass('disabled');
            } else {
                amountMinus.addClass('disabled');
            }
        });

        amountMinus.on('click', function(){
            let inputValue = amountInput.val();
            if (inputValue !='1') {
                inputValue = +inputValue - 1;
                amountInput.val(inputValue);
            }
            if (amountInput.val() !='1') {
                amountMinus.removeClass('disabled');
            } else {
                amountMinus.addClass('disabled');
            }
        });
        amountInput.on('change', function(){
            if (amountInput.val() !='1') {
                amountMinus.removeClass('disabled');
            } else {
                amountMinus.addClass('disabled');
            }
        });
    });
    // basket_page end
});