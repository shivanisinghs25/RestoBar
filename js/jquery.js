(function($){
    $(document).ready(function(){
      $('.container-slides').flickity({
        cellAlign: 'left',
        wrapAround: true,
        pageDots: false
      });
    });
  })(jQuery)

  // to scroll back to top of the page
  $(window).scroll(function(){
    //more then or equals to
    var top = window.scrollY;
    if(top >= 100){
        $( ".sec_footer" ).css( "z-index", "999" );
   
    //less then 100px from top
    } else {
       
   $( ".sec_footer" ).css( "z-index", "0" );
    }
  });
