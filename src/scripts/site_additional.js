import $ from 'jquery';

$(function(){
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


    $('.footer__left').clone().appendTo('.mobile-menu-inner')

    $('.header-bottom').clone().appendTo('.mobile-menu-inner')

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
});