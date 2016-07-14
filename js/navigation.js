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
        $(this).children('.fa').removeClass('fa-times').addClass('fa-bars');
      }
      else {
        $(this).parent().parent().parent().addClass('expanded');
        $(this).children('.fa').removeClass('fa-bars').addClass('fa-times');
      }
    });

    $('[data-collapse="left"] .nav-item').each(function() {
      $(this).on('click', function() {
        $(this).parent().parent().parent().parent().removeClass('expanded');
        $('.navbar-toggler').children('.fa').removeClass('fa-times').addClass('fa-bars');
      });
    });
  });

  //smooth scroll to sections
  $('#nav-main a').on('click', function() {
    if(this.hasth !== '') {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      },800,function(){
        window.location.hash = hash;
      });
    }
  });

  //projects card overlay hide/show
  $('.projects-content .card').each(function() {
    var overlay = $(this).children('.card-img-overlay');
    $(this)
      .on('mouseenter', function() {
        overlay.addClass('display');
      })
      .on('mouseleave', function() {
        overlay.removeClass('display');
      })
      .on('click', function() {
        if(!overlay.hasClass('display')){
          overlay.add('display');
        }
      });
  });

  $('body').on('click', function() {
    $('.projects-content .card-overlay').each(function() {
      if($(this).hasClass('display')) {
        $(this).removeClass('display');
      }
    });
  });

  AOS.init({
    once: true
  });

});
