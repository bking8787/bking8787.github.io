$(document).ready(function(){
    $(".ppp").click(function(){
      $(this).hide();
    });
    $(".large").click(function() {
        $(this).html($(this).html() + "<br>I've added a function to print the function of this jQuery when clicked")
    });
  });