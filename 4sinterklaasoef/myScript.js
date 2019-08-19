//$( document ).ready(function(){

    function voornaamFunction() {
        var vn = document.getElementById("vngeg").value;
        document.getElementById("voornaam").innerHTML = vn;
    }
    function achternaamFunction() {
        var an = document.getElementById("angeg").value;
        document.getElementById("achternaam").innerHTML = an;
    }
    
    
$('.verlanglijst').each(function() {

var $wrapper = $('.multi-fields', this);
$(".add-field", $(this)).click(function(e) {
$('.multi-field:first-child', $wrapper).clone(true).appendTo($wrapper).find('input').val('').input();
});
$('.multi-field .remove-field', $wrapper).click(function() {
if ($('.multi-field', $wrapper).length > 1)
$(this).parent('.multi-field').remove();
});
})
    
    
    
    
    
    
    function myFunctiondisabelen() {
        document.getElementById("mysubmit").disabled = true;
    }
    function myFunctionabelen() {
        document.getElementById("mysubmit").disabled = false;
    }
    
    

//                });