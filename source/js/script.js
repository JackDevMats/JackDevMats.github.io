//determines collapse state
var collapsed = false;

$(document).ready(function () {
  //animates navbar on scroll
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 100) {
      $(".navbar-logo-img").addClass("compressed");
    } else {
      $(".navbar-logo-img").removeClass("compressed");
    }
  });

  //when viewport is small collapse all link group members
  var width = $(window).width();
  if (width < 768) {
    collapseAll();
  }

  //when viewport is small allow only one link group member to be open at a time
  $(".link-group-member > p > a").click(function() {
    if(width < 768) {
      //collapse all
      collapseAll();
      //then opens only user target
      $(this).click();
    }
  });
});


//handle collapse function
function toggleCollapse() {
  if (collapsed) {
    $(".link-group-member > .collapse").collapse("show");
    $("#toggle-collapse-button").html("Close All");
    collapsed = false;
  } else {
    $(".link-group-member > .collapse").collapse("hide");
    $("#toggle-collapse-button").html("Open All");
    collapsed = true;
  }
}

function collapseAll() {
  $(".link-group-member > .collapse").collapse("hide");
}