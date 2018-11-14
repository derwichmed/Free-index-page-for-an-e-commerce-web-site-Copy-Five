$(function (){
    $('.ecomerce_side_bar_item').click(function (){
        $('.ecomerce_sub_side_bar:visible').hide();
        $(this).find('>.ecomerce_sub_side_bar').show();
    });
    isSideBarHidden = true;
    $('.menu_icon').click(function (){
        if(isSideBarHidden){
            $('.ecomerce_side_bar_item').show();
            isSideBarHidden = false;
        }
        else{
            $('.ecomerce_side_bar_item').hide();
            isSideBarHidden = true;
        }
         
    });
});