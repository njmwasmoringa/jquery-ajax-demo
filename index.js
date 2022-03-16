$(document).ready(function(){

    $('.image-holder').on('mouseenter', function(){
        $(this).find('.image-description').show();
    }).on('mouseleave', function(){
        $(this).find('.image-description').hide();
    });

    $('#feedbackform').on('submit', function(evt){

        evt.preventDefault();

        //option when using vanilla js
        /* const form = this;
        for(let field of form){
            field.value = '';
        } */

        //option when using vanilla js
        // this.reset();

        //option when using jquery
        $(this).find('input, textarea').val('');
        

    });

});