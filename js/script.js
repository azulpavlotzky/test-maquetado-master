$(document).ready(function () {
    $('.category_item[category="all"]').addClass('ct_item-active');
    $('.category_item').click(function () {
        $('.category_item').removeClass('ct_item-active');
        var catProduct = $(this).attr('category')
    // oculta productos 
    $('.product-content').css('transform', 'scale(0)');
        function hideProduct(){
            $('.product-content').hide();
        } setTimeout(hideProduct,400);
    // muestra algunos productos 
        function showProduct(){
            $('.product-content[category="' + catProduct + '"]').show();
            $('.product-content[category="' + catProduct + '"]').css('transform', 'scale(1)');
        } setTimeout(showProduct,400);
    });
    // muestra  todos los productos
        $('.category_item[category="all"]').click(function () {
            function showAll(){
                $('.product-content').show();
                $('.product-content').css('transform', 'scale(1)');
            } setTimeout (showAll,400);
        });
});

$(document).ready(function() {
    $(".menu-icon").on("click", function(){
    $("nav ul").toggleClass("showing");
    });
});
