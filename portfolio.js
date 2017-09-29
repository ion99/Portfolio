$(document).ready(function() {
  // Get some spagetti !!!! :)
  if ($(window).width() < 770) {
    $('.sections').addClass("dropdown");
    $('button#dropbutton').css("display", "inline-block");
    $('#dropdown').removeClass("navbar-nav nav").addClass("dropdown-menu");
    $('li').removeClass("section");
  } else {
    $('.sections').removeClass("dropdown");
    $('button.dropdown-toggle').css("display", "none");
    $('#dropdown').removeClass("dropdown-menu").addClass("nav navbar-nav");
    $('li').addClass("section");
  }

  $(window).resize(function() {
    if ($(window).width() < 770) {
      console.log("i work   ", $(window).width())
      $('.sections').addClass("dropdown");
      $('button#dropbutton').css("display", "inline-block");
      $('#dropdown').removeClass("navbar-nav nav").addClass("dropdown-menu");
      $('li').removeClass("section");
    } else {
      $('.sections').removeClass("dropdown");
      $('button.dropdown-toggle').css("display", "none");
      $('#dropdown').removeClass("dropdown-menu").addClass("nav navbar-nav");
      $('li').addClass("section");
    }
  });
});
