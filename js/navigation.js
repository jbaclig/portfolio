/* Affix class alternative for Bootstrap 4 */
/* http://bootbites.com/articles/freebie-sticky-bootstrap-navbar-scroll-bootstrap-4*/

$(document).ready(function(){

  var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyTop = stickyWrapper.offset().top;
    if(scrollElement.scrollTop() >= stickyTop){
      stickyWrapper.height(stickyHeight);
      sticky.addClass('is-sticky');
    }
    else {
      sticky.removeClass('is-sticky');
      stickyWrapper.height('auto');
    }
  };

  $('[data-toggle="sticky-onscroll"]').each(function(){
      var sticky = $(this);
      var stickyWrapper = $('<div>').addClass('sticky-wrapper');
      sticky.before(stickyWrapper);
      sticky.addClass('sticky');

      $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
          stickyToggle(sticky, stickyWrapper, $(this));
      });

      stickyToggle(sticky, stickyWrapper, $(window));
  });

  $('[data-collapse="left"] .navbar-toggler').each(function(){
    $(this).on('click', function() {
      if($(this).parent().parent().parent().hasClass('expanded')){
        $(this).parent().parent().parent().removeClass('expanded');
      }
      else {
        $(this).parent().parent().parent().addClass('expanded');
      }
    });

    $('[data-collapse="left"] .nav-item').each(function() {
      $(this).on('click', function() {
        $(this).parent().parent().parent().removeClass('expanded');
      });
    });
  });

});
