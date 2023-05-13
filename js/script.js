window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});


// header animate text
var span = document.querySelector(".typewriter span");
	var textArr = span.getAttribute("data-text").split(", ");
	var maxTextIndex = textArr.length;

	var sPerChar = 0.15;
	var sBetweenWord = 1.5;
	var textIndex = 0;

	typing(textIndex, textArr[textIndex]);

	function typing(textIndex, text) {
		var charIndex = 0;
		var maxCharIndex = text.length - 1;

		var typeInterval = setInterval(function () {
			span.innerHTML += text[charIndex];
			if (charIndex == maxCharIndex) {
				clearInterval(typeInterval);
				setTimeout(function () {
					deleting(textIndex, text);
				}, sBetweenWord * 1000);
			} else {
				charIndex += 1;
			}
		}, sPerChar * 1000);
	}

	function deleting(textIndex, text) {
		var minCharIndex = 0;
		var charIndex = text.length - 1;

		var typeInterval = setInterval(function () {
			span.innerHTML = text.substr(0, charIndex);
			if (charIndex == minCharIndex) {
				clearInterval(typeInterval);
				textIndex + 1 == maxTextIndex ? (textIndex = 0) : (textIndex += 1);
				setTimeout(function () {
					typing(textIndex, textArr[textIndex]);
				}, sBetweenWord * 1000);
			} else {
				charIndex -= 1;
			}
		}, sPerChar * 1000);
	} 


// $(window).scroll(function(){
//   var sticky = $('.sticky'),
//       scroll = $(window).scrollTop();

//   if (scroll >= 100) sticky.addClass('fixed');
//   else sticky.removeClass('fixed');
// });

//
(function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})();
$(".btn-circle-download").click(function() {
  $(this).addClass("load");
  setTimeout(function() {
    $(".btn-circle-download").addClass("done");
  }, 1000);
  setTimeout(function() {
    $(".btn-circle-download").removeClass("load done");
  }, 5000);
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()

})

// owl ends

// Swiper-Slide-js-area-start-here //for the our clients
var swiper = new Swiper(".our-clients", {
  spaceBetween: 10,
  speed: 500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: "true",
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 7,
    },
    1400: {
      slidesPerView: 7,
    },
  },
});
// Swiper-Slide-js-area-end-here
// Swiper-Slide-js-area-start-here //for the our clients
var swiper = new Swiper(".testimonial", {

  spaceBetween: 40,
  speed: 500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: "true",
  breakpoints: {
    420: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
   
  },
});
// Swiper-Slide-js-area-end-here
//data-filter
$(document).ready(function(){

 

  $(".filter-button").click(function(){
      var value = $(this).attr('data-filter');
      
      if(value == "all")
      {
          //$('.filter').removeClass('hidden');
          $('.filter').show('1000');
      }
      else
      {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
          $(".filter").not('.'+value).hide('3000');
          $('.filter').filter('.'+value).show('3000');
          
      }
  });

});
//data-filter
//active class
// Add active class to the current button (highlight it)
var header = document.getElementById("portfolio");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("activefolio");
  current[0].className = current[0].className.replace(" activefolio", "");
  this.className += " activefolio";
  });
}


$('[data-toggle="collapse"]').click(function() {
  $('.collapse.in').collapse('hide')
});
$(document).ready(function () {
  'use strict';
$(window).on("scroll", function () {
  if (window.scrollY > window.outerHeight) {
    $("#btn-back-to-top").addClass("activebtn");
    setTimeout(function() {
      var theta = ($(window).scrollTop() - (window.outerHeight + (window.outerHeight/2))) / 500;
      $('#btn-back-to-top').css({ transform: 'rotate(' + theta + 'rad)' });
    })
  } else {
    $("#btn-back-to-top").removeClass("activebtn");
  }

});





$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();
  // Show/hide menu on scroll
  //if (scrollDistance >= 850) {
  // $('nav').fadeIn("fast");
  //} else {
  // $('nav').fadeOut("fast");
  //}
  
  // Assign active class to nav links while scolling
  $('.scrollpage').each(function(i) {
    // if ($(this).position().top <= scrollDistance) {
    if ($(this).position().top - $(this).height() <= scrollDistance){
  $('#navbarSupportedContent li a.active').removeClass('active');
  $('#navbarSupportedContent li a').eq(i).addClass('active');
  }
  });
  }).scroll();



  
})
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}