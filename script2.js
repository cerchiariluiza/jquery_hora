
$(function(){
    
    // cria hora escolha
    var horaescolhaCampo;
   
    //ao focar no input
 $('input').bind('focus',function(){
     
     //posicione(offset) e se mova pela largura
     var pos = $(this).offset();
     var width = $(this).width();
     
     //Mostrar div button a partir da esquerda e de cima e mostrar
     $('.horaescolha').css('left', pos.left + width);
     $('.horaescolha').css('top', pos.top);
     $('.horaescolha').show();
     
     // Hora escolha pega este botão acima
     horaescolhaCampo = $(this);
 });
    
    // Ao soltar o input após 200 ms para não soltar quando clicar no botão, irá ocultar
 $('input').bind('blur',function(){
     
     setTimeout(function(){
          $('.horaescolha').hide();
         }, 200);
    
});
    //ao clicar no botão na hora pegue o valor
    $('.horaescolha button').bind('click', function(){
        
        var hora = $(this).html();
        horaescolhaCampo.val(hora);
    });
    
});