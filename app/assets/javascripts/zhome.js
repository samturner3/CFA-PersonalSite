// Example:
onViewport("section", "NotHidden animated bounceInLeft", 500, function() {
  console.log("This is not a drill.");
  $( ".NotHidden" ).css('visibility','visible')();
});

$(function(){
        $("#typed2").typed({
            strings: ["Hello,","World!", "I'm Sam."],
            typeSpeed: 0
        });
        $("#typed3").typed({
            strings: ["Hello,","World!", "Web Developer."],
            typeSpeed: 0
        });
    });


    $('.flexContainer').animate({
        top: $(window).height(), // to force the window to minimize at the bottom corner
        left: 0,
        width: '20px',
        height: 0
    });

//Timeline Code
$( document ).ready(function() {

  function isElementInViewport(el) {
var rect = el.getBoundingClientRect();
return (
  rect.top >= 0 &&
  rect.left >= 0 &&
  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
}

var items = document.querySelectorAll(".timeline li");

// code for the isElementInViewport function

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

});

jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});


    $(function() {
        $("#my-github-projects").loadRepositories("samturner3");
    });
