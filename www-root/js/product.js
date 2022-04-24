function showFilterMenu() {
    var filterForm = $('#products-filter-section');
    var btnFilter = $('#products-filter-section #products-filter-btn');
    var btnIcon = $('#products-filter-section #products-filter-btn .btn-icon');
    var btnText = $('#products-filter-section #products-filter-btn .btn-text');
    var filterBoxs = $('#products-filter-section .products-filter-box');
    var productsContent = $('#products-content .products-content-wrapper > div.products-content-grid');
    
    if (filterForm.hasClass('dm-open-menu')) {
        filterForm.removeClass('dm-open-menu');
        btnIcon.css('margin-right', '0 !important');
        btnText.css('display', 'none');
        
        filterBoxs.fadeOut(50);
        filterForm.addClass('dm-close-menu');
        filterForm.css('width', '70px');
        filterForm.css('max-width', 'unset !important');
        filterForm.css('max-width', 'unset !important');
        filterForm.css('transition', 'all 0.25s ease !important');


        if (productsContent.hasClass('uk-child-width-1-4@m')) {
            productsContent.removeClass('uk-child-width-1-4@m');
        }
        productsContent.addClass('uk-child-width-1-5@m');
    }
    else {
        filterForm.removeClass('dm-close-menu');
        // btnIcon.css('margin-right', '5px !important');
        btnText.css('display', 'inline-block');
        
        filterBoxs.fadeIn(350);
        filterForm.addClass('dm-open-menu');
        filterForm.css('width', '300px');
        filterForm.css('max-width', '300px');
        filterForm.css('max-width', '300px');
        filterForm.css('transition', 'all 0.25s ease !important');

        
        if (productsContent.hasClass('uk-child-width-1-5@m')) {
            productsContent.removeClass('uk-child-width-1-5@m');
        }
        productsContent.addClass('uk-child-width-1-4@m');
    }
}