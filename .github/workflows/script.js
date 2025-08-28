window.onhashchange = function() {
  if (location.hash != "#open") {
    $("#menu,.page_cover,html").removeClass("open");
  }
};

$(document).ready(function(){
$("#menu ul.sub_mobile").hide();
$("#menu ul.nav li").click(function(){
$("ul",this).slideToggle("fast");
})
});
