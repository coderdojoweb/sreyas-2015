$('.flip')
  .click(function(){
    location.href="https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&es_th=1&ie=UTF-8#q=zerg%20rush&es_th=1"
  })
  .hover(function(){
    // if(Math.round(Math.random())){
      $(this).css("transform", 'translate('+Math.random()*200+'px,'+Math.random()*200+'px)')
    // }else{

    // }
  })
